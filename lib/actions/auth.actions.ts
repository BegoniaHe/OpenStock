'use server';

import { auth } from "@/lib/better-auth/auth";
import { headers } from "next/headers";
import { logger } from "@/lib/logger";
import { AuthenticationError, formatErrorResponse } from "@/lib/errors";
import { ERROR_MESSAGES } from "@/lib/config";

export const signUpWithEmail = async ({ 
    email, 
    password, 
    fullName, 
    country, 
    investmentGoals, 
    riskTolerance, 
    preferredIndustry 
}: SignUpFormData) => {
    try {
        const response = await auth.api.signUpEmail({ 
            body: { email, password, name: fullName } 
        });

        logger.info('User signed up successfully', { email });
        return { success: true, data: response };
    } catch (error) {
        logger.error('Sign up failed', error, { email });
        
        if (error instanceof Error) {
            return { 
                success: false, 
                error: error.message || ERROR_MESSAGES.SIGNUP_FAILED 
            };
        }
        
        return { 
            success: false, 
            error: ERROR_MESSAGES.SIGNUP_FAILED 
        };
    }
};

export const signInWithEmail = async ({ email, password }: SignInFormData) => {
    try {
        const response = await auth.api.signInEmail({ 
            body: { email, password } 
        });

        logger.info('User signed in successfully', { email });
        return { success: true, data: response };
    } catch (error) {
        logger.error('Sign in failed', error, { email });
        
        if (error instanceof Error) {
            return { 
                success: false, 
                error: error.message || ERROR_MESSAGES.SIGNIN_FAILED 
            };
        }
        
        return { 
            success: false, 
            error: ERROR_MESSAGES.INVALID_CREDENTIALS 
        };
    }
};

export const signOut = async () => {
    try {
        await auth.api.signOut({ headers: await headers() });
        logger.info('User signed out successfully');
        return { success: true };
    } catch (error) {
        logger.error('Sign out failed', error);
        return { 
            success: false, 
            error: ERROR_MESSAGES.SIGNOUT_FAILED 
        };
    }
};

