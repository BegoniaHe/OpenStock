import { Schema, model, models, type Document, type Model } from 'mongoose';

export interface UserSettings extends Document {
    userId: string;
    newsSummaryPrompt: string;
    createdAt: Date;
    updatedAt: Date;
}

const UserSettingsSchema = new Schema<UserSettings>(
    {
        userId: { type: String, required: true, index: true, unique: true },
        newsSummaryPrompt: {
            type: String,
            required: true,
            default: `You are a financial news analyst. Generate a concise, easy-to-understand summary of the following market news articles.

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

Generate a brief summary (200-300 words) highlighting the most important market movements and what they mean for investors.`
        },
    },
    { timestamps: true }
);

export const UserSettingsModel: Model<UserSettings> =
    (models?.UserSettings as Model<UserSettings>) || model<UserSettings>('UserSettings', UserSettingsSchema);
