'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/common';
import { LoadingState, ErrorState } from '@/components/common/States';
import { colors, borderRadius } from '@/lib/design-system';

interface NewsSummaryData {
    summary: string;
    articles: Array<{
        headline: string;
        source: string;
        url: string;
        summary?: string;
        datetime: number;
        image?: string;
    }>;
    cached?: boolean;
    generatedAt?: string;
}

const REFRESH_BUTTON_TEXT = 'Refresh';
const LATEST_ARTICLES_TITLE = 'Latest Articles';

export default function NewsSummary() {
    const [data, setData] = useState<NewsSummaryData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchNewsSummary = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch('/api/news-summary');
            if (!response.ok) {
                throw new Error('Failed to fetch news summary');
            }
            const data = await response.json();
            setData(data);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchNewsSummary();
    }, []);

    if (loading) {
        return (
            <Card>
                <CardHeader>
                    <CardTitle>Daily Market News</CardTitle>
                </CardHeader>
                <LoadingState message="Loading news summary..." />
            </Card>
        );
    }

    if (error) {
        return (
            <Card>
                <CardHeader>
                    <CardTitle>Daily Market News</CardTitle>
                </CardHeader>
                <ErrorState error={error} onRetry={fetchNewsSummary} />
            </Card>
        );
    }

    return (
        <Card>
            <CardHeader>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <CardTitle>Daily Market News</CardTitle>
                        {data?.cached && data?.generatedAt && (
                            <span className="text-xs text-gray-500 font-normal">
                                (Updated {new Date(data.generatedAt).toLocaleTimeString()})
                            </span>
                        )}
                    </div>
                    <Button 
                        onClick={fetchNewsSummary} 
                        variant="outline" 
                        size="sm"
                        disabled={loading}
                        className="border-gray-700 hover:bg-gray-800"
                    >
                        {REFRESH_BUTTON_TEXT}
                    </Button>
                </div>
            </CardHeader>

            <CardContent>
                {data?.summary && (
                    <div 
                        className="prose prose-sm prose-invert max-w-none mb-6 p-4 bg-gray-800/50 rounded-lg border border-gray-700"
                        dangerouslySetInnerHTML={{ __html: data.summary }}
                    />
                )}

                {data?.articles && data.articles.length > 0 && (
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-200 border-b border-gray-700 pb-2">
                            {LATEST_ARTICLES_TITLE}
                        </h3>
                        <div className="grid gap-4 md:grid-cols-2">
                            {data.articles.map((article, index) => (
                                <a
                                    key={index}
                                    href={article.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block p-4 border border-gray-800 rounded-lg bg-gray-800/30 hover:bg-gray-800/60 transition-all duration-200 hover:border-gray-700"
                                >
                                    <div className="flex gap-3">
                                        {article.image && (
                                            <img
                                                src={article.image}
                                                alt={article.headline}
                                                className="w-20 h-20 object-cover rounded"
                                            />
                                        )}
                                        <div className="flex-1">
                                            <h4 className="font-semibold line-clamp-2 mb-1 text-gray-100">
                                                {article.headline}
                                            </h4>
                                            <p className="text-sm text-gray-400 mb-1">
                                                {article.source}
                                            </p>
                                            <p className="text-xs text-gray-500">
                                                {new Date(article.datetime * 1000).toLocaleString()}
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
