import { NextRequest, NextResponse } from 'next/server';
import { getNews } from '@/lib/actions/finnhub.actions';
import { openaiClient } from '@/lib/openai/client';
import { auth } from '@/lib/better-auth/auth';
import { headers } from 'next/headers';
import { getWatchlistSymbolsByEmail } from '@/lib/actions/watchlist.actions';
import { logger } from '@/lib/logger';
import { AuthenticationError, formatErrorResponse } from '@/lib/errors';
import { UI_CONFIG } from '@/lib/config';
import { NewsSummaryModel } from '@/database/models/news-summary.model';
import { connectToDatabase } from '@/database/mongoose';

const NEWS_SUMMARY_PROMPT = `You are a financial news analyst. Generate a concise, easy-to-understand summary of the following market news articles.

Format your response in simple HTML with the following structure:
- Use <h3> for section headings
- Use <p> for paragraphs
- Use <strong> for important terms (stock symbols, company names, key numbers)
- Use UP ARROW for positive news, DOWN ARROW for negative news, CHART for neutral/analysis
- Keep language simple and accessible to non-experts
- Focus on what matters to individual investors
- Limit to 3-4 key highlights

News data:
{{newsData}}

Generate a brief summary (200-300 words) highlighting the most important market movements and what they mean for investors.`;

const CACHE_DURATION_HOURS = 1;

/**
 * 清理AI生成的内容，去除markdown代码块标记
 */
function cleanAIResponse(response: string): string {
    // 去除 ```html 和 ``` 标记
    let cleaned = response.trim();
    
    // 匹配并移除开头的 ```html 或 ```
    cleaned = cleaned.replace(/^```html\s*/i, '');
    cleaned = cleaned.replace(/^```\s*/, '');
    
    // 匹配并移除结尾的 ```
    cleaned = cleaned.replace(/\s*```$/, '');
    
    return cleaned.trim();
}

export async function GET(request: NextRequest) {
    try {
        const session = await auth.api.getSession({ headers: await headers() });
        
        if (!session?.user?.email) {
            logger.warn('Unauthorized news summary request');
            throw new AuthenticationError();
        }

        const userEmail = session.user.email;
        logger.info('Fetching news summary', { email: userEmail });

        // 连接数据库
        await connectToDatabase();

        // 检查缓存
        const cached = await NewsSummaryModel.findOne({ userId: userEmail });
        const now = new Date();
        
        if (cached) {
            const cacheAge = now.getTime() - cached.generatedAt.getTime();
            const cacheAgeHours = cacheAge / (1000 * 60 * 60);
            
            // 如果缓存未过期（小于1小时），直接返回
            if (cacheAgeHours < CACHE_DURATION_HOURS) {
                logger.info('Returning cached news summary', { 
                    email: userEmail,
                    cacheAgeMinutes: Math.round(cacheAge / (1000 * 60))
                });
                
                return NextResponse.json({
                    summary: cached.summary,
                    articles: cached.articles,
                    cached: true,
                    generatedAt: cached.generatedAt
                });
            } else {
                logger.info('Cache expired, generating new summary', { 
                    email: userEmail,
                    cacheAgeHours: cacheAgeHours.toFixed(2)
                });
            }
        }

        // 缓存不存在或已过期，生成新的摘要
        let symbols: string[] = [];
        try {
            symbols = await getWatchlistSymbolsByEmail(userEmail);
        } catch (error) {
            logger.warn('Failed to get watchlist symbols, using general news');
        }

        let articles = await getNews(symbols);
        
        if (!articles || articles.length === 0) {
            articles = await getNews();
        }

        articles = (articles || []).slice(0, UI_CONFIG.MAX_NEWS_ARTICLES);

        if (!articles || articles.length === 0) {
            return NextResponse.json({
                summary: '<p>No market news available at the moment. Please check back later.</p>',
                articles: []
            });
        }

        const prompt = NEWS_SUMMARY_PROMPT.replace(
            '{{newsData}}',
            JSON.stringify(articles, null, 2)
        );

        let summary = '';
        if (openaiClient.isConfigured()) {
            try {
                const rawSummary = await openaiClient.generate(prompt);
                summary = cleanAIResponse(rawSummary);
                logger.info('Generated news summary successfully', { email: userEmail });
            } catch (error) {
                logger.error('Error generating news summary', error);
                summary = generateFallbackSummary(articles);
            }
        } else {
            logger.warn('OpenAI not configured, using fallback summary');
            summary = generateFallbackSummary(articles);
        }

        // 保存到数据库
        const expiresAt = new Date(now.getTime() + CACHE_DURATION_HOURS * 60 * 60 * 1000);
        
        try {
            await NewsSummaryModel.findOneAndUpdate(
                { userId: userEmail },
                {
                    userId: userEmail,
                    summary,
                    articles: articles.map(article => ({
                        headline: article.headline,
                        source: article.source,
                        url: article.url,
                        summary: article.summary,
                        datetime: article.datetime,
                        image: article.image
                    })),
                    generatedAt: now,
                    expiresAt
                },
                { upsert: true, new: true }
            );
            
            logger.info('Saved news summary to cache', { 
                email: userEmail,
                expiresAt: expiresAt.toISOString()
            });
        } catch (dbError) {
            logger.error('Failed to save news summary to cache', dbError);
            // 继续返回结果，即使保存失败
        }

        return NextResponse.json({
            summary,
            articles: articles.map(article => ({
                headline: article.headline,
                source: article.source,
                url: article.url,
                summary: article.summary,
                datetime: article.datetime,
                image: article.image
            })),
            cached: false,
            generatedAt: now
        });

    } catch (error) {
        logger.error('Error in news-summary API', error);
        
        if (error instanceof AuthenticationError) {
            return NextResponse.json(
                formatErrorResponse(error),
                { status: error.statusCode }
            );
        }

        return NextResponse.json(
            formatErrorResponse(error),
            { status: 500 }
        );
    }
}

function generateFallbackSummary(articles: MarketNewsArticle[]): string {
    const headlines = articles.slice(0, 3).map(a => a.headline).join(', ');
    return `<h3>Market News Highlights</h3><p>Today's top stories: ${headlines}. Check the articles below for more details.</p>`;
}
