import { Schema, model, models, type Document, type Model } from 'mongoose';

export interface NewsSummary extends Document {
    userId: string;
    summary: string;
    articles: Array<{
        headline: string;
        source: string;
        url: string;
        summary?: string;
        datetime: number;
        image?: string;
    }>;
    generatedAt: Date;
    expiresAt: Date;
}

const NewsSummarySchema = new Schema<NewsSummary>(
    {
        userId: { type: String, required: true, index: true, unique: true },
        summary: { type: String, required: true },
        articles: [
            {
                headline: { type: String, required: true },
                source: { type: String, required: true },
                url: { type: String, required: true },
                summary: { type: String },
                datetime: { type: Number, required: true },
                image: { type: String },
            }
        ],
        generatedAt: { type: Date, default: Date.now },
        expiresAt: { type: Date, required: true },
    },
    { timestamps: true }
);

// 自动删除过期的文档
NewsSummarySchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

export const NewsSummaryModel: Model<NewsSummary> =
    (models?.NewsSummary as Model<NewsSummary>) || model<NewsSummary>('NewsSummary', NewsSummarySchema);
