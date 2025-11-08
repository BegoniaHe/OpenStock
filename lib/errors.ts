/**
 * Custom application error classes
 */

export class AppError extends Error {
    constructor(
        public statusCode: number,
        public message: string,
        public code?: string,
        public details?: unknown
    ) {
        super(message);
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}

export class ValidationError extends AppError {
    constructor(message: string, details?: unknown) {
        super(400, message, 'VALIDATION_ERROR', details);
    }
}

export class AuthenticationError extends AppError {
    constructor(message = 'Authentication required') {
        super(401, message, 'AUTHENTICATION_ERROR');
    }
}

export class AuthorizationError extends AppError {
    constructor(message = 'Access denied') {
        super(403, message, 'AUTHORIZATION_ERROR');
    }
}

export class NotFoundError extends AppError {
    constructor(resource: string) {
        super(404, `${resource} not found`, 'NOT_FOUND');
    }
}

export class DatabaseError extends AppError {
    constructor(message: string, details?: unknown) {
        super(500, message, 'DATABASE_ERROR', details);
    }
}

export class ExternalServiceError extends AppError {
    constructor(service: string, message: string) {
        super(503, `${service} service error: ${message}`, 'EXTERNAL_SERVICE_ERROR');
    }
}

/**
 * Format error response for API
 */
export function formatErrorResponse(error: unknown) {
    if (error instanceof AppError) {
        return {
            success: false,
            error: {
                message: error.message,
                code: error.code,
                statusCode: error.statusCode,
                ...(process.env.NODE_ENV === 'development' && { details: error.details })
            }
        };
    }

    // Handle unknown errors
    const message = error instanceof Error ? error.message : 'An unexpected error occurred';
    return {
        success: false,
        error: {
            message,
            code: 'INTERNAL_ERROR',
            statusCode: 500
        }
    };
}

/**
 * Safe error logging (sanitize sensitive data)
 */
export function logError(error: unknown, context?: Record<string, unknown>) {
    const errorInfo = {
        timestamp: new Date().toISOString(),
        message: error instanceof Error ? error.message : String(error),
        stack: error instanceof Error ? error.stack : undefined,
        context: context ? sanitizeContext(context) : undefined
    };

    console.error('[ERROR]', JSON.stringify(errorInfo, null, 2));
}

/**
 * Remove sensitive data from context
 */
function sanitizeContext(context: Record<string, unknown>): Record<string, unknown> {
    const sensitiveKeys = ['password', 'token', 'apiKey', 'secret', 'authorization'];
    const sanitized = { ...context };

    for (const key of Object.keys(sanitized)) {
        if (sensitiveKeys.some(sensitive => key.toLowerCase().includes(sensitive))) {
            sanitized[key] = '[REDACTED]';
        }
    }

    return sanitized;
}
