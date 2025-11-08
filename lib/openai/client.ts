/**
 * OpenAI compatible API client
 * Supports OpenAI and any OpenAI-compatible endpoints (e.g., Azure OpenAI, local models, etc.)
 */

interface OpenAIMessage {
    role: 'system' | 'user' | 'assistant';
    content: string;
}

interface OpenAIResponse {
    choices: Array<{
        message: {
            content: string;
        };
    }>;
}

export class OpenAIClient {
    private apiKey: string;
    private baseUrl: string;
    private model: string;

    constructor() {
        this.apiKey = process.env.OPENAI_API_KEY || '';
        this.baseUrl = process.env.OPENAI_BASE_URL || 'https://api.openai.com/v1';
        this.model = process.env.OPENAI_MODEL || 'gpt-4o-mini';

        if (!this.apiKey) {
            console.warn('OPENAI_API_KEY is not set. AI features will be disabled.');
        }
    }

    /**
     * Generate completion from OpenAI-compatible API
     */
    async generate(prompt: string, systemPrompt?: string): Promise<string> {
        if (!this.apiKey) {
            console.warn('OpenAI API key not configured, returning fallback response');
            return this.getFallbackResponse();
        }

        try {
            const messages: OpenAIMessage[] = [];
            
            if (systemPrompt) {
                messages.push({
                    role: 'system',
                    content: systemPrompt
                });
            }
            
            messages.push({
                role: 'user',
                content: prompt
            });

            const response = await fetch(`${this.baseUrl}/chat/completions`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.apiKey}`
                },
                body: JSON.stringify({
                    model: this.model,
                    messages: messages,
                    temperature: 0.7,
                    max_tokens: 1000
                })
            });

            if (!response.ok) {
                const error = await response.text();
                console.error('OpenAI API error:', error);
                throw new Error(`OpenAI API error: ${response.status} ${response.statusText}`);
            }

            const data: OpenAIResponse = await response.json();
            return data.choices[0]?.message?.content || this.getFallbackResponse();
        } catch (error) {
            console.error('Error calling OpenAI API:', error);
            return this.getFallbackResponse();
        }
    }

    private getFallbackResponse(): string {
        return 'Thanks for joining OpenStock! We\'re excited to help you track markets and make smarter investment decisions.';
    }

    /**
     * Check if API is configured
     */
    isConfigured(): boolean {
        return !!this.apiKey;
    }
}

// Singleton instance
export const openaiClient = new OpenAIClient();
