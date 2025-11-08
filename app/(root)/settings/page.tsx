'use client';

import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/common';
import { LoadingState, ErrorState } from '@/components/common/States';
import { Button } from '@/components/ui/button';
import { Container, Section, SectionHeader } from '@/components/common';
import { logger } from '@/lib/logger';

const DEFAULT_PROMPT = `You are a financial news analyst. Generate a concise, easy-to-understand summary of the following market news articles.

Format your response in simple HTML with the following structure:
- Use <h3> for section headings
- Use <p> for paragraphs
- Use <strong> for important terms (stock symbols, company names, key numbers)
- Use UP ARROW for positive news, DOWN ARROW for negative news, CHART for neutral/analysis
- Keep language simple and accessible to non-experts
- Focus on what matters to individual investors
- Limit to 3-4 key highlights

IMPORTANT: Output ONLY the HTML content, without any markdown code blocks or backticks.

News data:
{{newsData}}

Generate a brief summary (200-300 words) highlighting the most important market movements and what they mean for investors.`;

export default function SettingsPage() {
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [prompt, setPrompt] = useState('');

    // 加载设置
    useEffect(() => {
        fetchSettings();
    }, []);

    const fetchSettings = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch('/api/settings');
            if (!response.ok) {
                throw new Error('Failed to fetch settings');
            }
            const data = await response.json();
            setPrompt(data.newsSummaryPrompt || DEFAULT_PROMPT);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to load settings');
        } finally {
            setLoading(false);
        }
    };

    const handleSave = async () => {
        if (!prompt.trim()) {
            setError('Prompt cannot be empty');
            return;
        }

        if (prompt.trim().length < 10) {
            setError('Prompt must be at least 10 characters long');
            return;
        }

        setSaving(true);
        setError(null);
        setSuccessMessage(null);

        try {
            const response = await fetch('/api/settings', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    newsSummaryPrompt: prompt,
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to save settings');
            }

            setSuccessMessage('Settings saved successfully!');
            setTimeout(() => setSuccessMessage(null), 3000);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to save settings');
        } finally {
            setSaving(false);
        }
    };

    const handleReset = () => {
        setPrompt(DEFAULT_PROMPT);
        setSuccessMessage(null);
        setError(null);
    };

    if (loading) {
        return (
            <Container size="lg">
                <Section>
                    <SectionHeader
                        title="Settings"
                        description="Customize your OpenStock experience"
                    />
                    <LoadingState message="Loading settings..." />
                </Section>
            </Container>
        );
    }

    return (
        <Container size="lg">
            <Section>
                <SectionHeader
                    title="Settings"
                    description="Customize your OpenStock experience"
                />

                <Card>
                    <CardHeader>
                        <CardTitle>News Summary AI Prompt</CardTitle>
                        <p className="text-sm text-gray-400 mt-2">
                            Customize how the AI generates your daily news summaries. Use{' '}
                            <code className="bg-gray-800 px-2 py-1 rounded text-yellow-400">
                                {'{{newsData}}'}
                            </code>{' '}
                            as a placeholder for the news articles data.
                        </p>
                    </CardHeader>

                    <CardContent>
                        {error && (
                            <div className="mb-4 p-4 bg-red-900/20 border border-red-500/50 rounded-lg">
                                <p className="text-red-400 text-sm">{error}</p>
                            </div>
                        )}

                        {successMessage && (
                            <div className="mb-4 p-4 bg-teal-900/20 border border-teal-500/50 rounded-lg">
                                <p className="text-teal-400 text-sm">{successMessage}</p>
                            </div>
                        )}

                        <div className="space-y-4">
                            <div>
                                <label
                                    htmlFor="prompt"
                                    className="block text-sm font-medium text-gray-300 mb-2"
                                >
                                    AI Prompt Template
                                </label>
                                <textarea
                                    id="prompt"
                                    value={prompt}
                                    onChange={(e) => setPrompt(e.target.value)}
                                    rows={18}
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors font-mono text-sm"
                                    placeholder="Enter your custom AI prompt..."
                                />
                                <p className="mt-2 text-xs text-gray-500">
                                    {prompt.length} / 5000 characters
                                </p>
                            </div>

                            <div className="flex gap-3 pt-2">
                                <Button
                                    onClick={handleSave}
                                    disabled={saving}
                                    className="bg-teal-500 hover:bg-teal-400 text-gray-900 font-medium"
                                >
                                    {saving ? 'Saving...' : 'Save Changes'}
                                </Button>
                                <Button
                                    onClick={handleReset}
                                    variant="outline"
                                    className="border-gray-700 hover:bg-gray-800"
                                >
                                    Reset to Default
                                </Button>
                            </div>

                            <div className="mt-6 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                                <h4 className="text-sm font-semibold text-gray-200 mb-2">
                                    Tips for writing prompts:
                                </h4>
                                <ul className="text-sm text-gray-400 space-y-1 list-disc list-inside">
                                    <li>
                                        Use{' '}
                                        <code className="bg-gray-800 px-1 py-0.5 rounded text-yellow-400">
                                            {'{{newsData}}'}
                                        </code>{' '}
                                        to reference the news articles
                                    </li>
                                    <li>Specify the output format (HTML, Markdown, plain text, etc.)</li>
                                    <li>Set the tone and style (formal, casual, technical, etc.)</li>
                                    <li>Define the length and structure of the summary</li>
                                    <li>Include specific instructions for handling stock symbols or numbers</li>
                                </ul>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </Section>
        </Container>
    );
}
