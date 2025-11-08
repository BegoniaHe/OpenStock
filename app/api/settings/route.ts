import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/better-auth/auth';
import { headers } from 'next/headers';
import { logger } from '@/lib/logger';
import { AuthenticationError, formatErrorResponse, ValidationError } from '@/lib/errors';
import { UserSettingsModel } from '@/database/models/user-settings.model';
import { connectToDatabase } from '@/database/mongoose';

/**
 * GET /api/settings - 获取用户设置
 */
export async function GET(request: NextRequest) {
    try {
        const session = await auth.api.getSession({ headers: await headers() });
        
        if (!session?.user?.email) {
            logger.warn('Unauthorized settings request');
            throw new AuthenticationError();
        }

        const userEmail = session.user.email;
        await connectToDatabase();

        let settings = await UserSettingsModel.findOne({ userId: userEmail });
        
        if (!settings) {
            // 创建默认设置
            settings = await UserSettingsModel.create({ userId: userEmail });
        }

        return NextResponse.json({
            newsSummaryPrompt: settings.newsSummaryPrompt,
        });

    } catch (error) {
        logger.error('Error fetching settings', error);
        
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

/**
 * PUT /api/settings - 更新用户设置
 */
export async function PUT(request: NextRequest) {
    try {
        const session = await auth.api.getSession({ headers: await headers() });
        
        if (!session?.user?.email) {
            logger.warn('Unauthorized settings update request');
            throw new AuthenticationError();
        }

        const userEmail = session.user.email;
        const body = await request.json();

        // 验证输入
        if (!body.newsSummaryPrompt || typeof body.newsSummaryPrompt !== 'string') {
            throw new ValidationError('News summary prompt is required and must be a string');
        }

        if (body.newsSummaryPrompt.trim().length < 10) {
            throw new ValidationError('News summary prompt must be at least 10 characters long');
        }

        if (body.newsSummaryPrompt.length > 5000) {
            throw new ValidationError('News summary prompt must be less than 5000 characters');
        }

        await connectToDatabase();

        const settings = await UserSettingsModel.findOneAndUpdate(
            { userId: userEmail },
            { 
                userId: userEmail,
                newsSummaryPrompt: body.newsSummaryPrompt.trim(),
            },
            { upsert: true, new: true }
        );

        logger.info('Updated user settings', { email: userEmail });

        return NextResponse.json({
            message: 'Settings updated successfully',
            newsSummaryPrompt: settings.newsSummaryPrompt,
        });

    } catch (error) {
        logger.error('Error updating settings', error);
        
        if (error instanceof AuthenticationError || error instanceof ValidationError) {
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
