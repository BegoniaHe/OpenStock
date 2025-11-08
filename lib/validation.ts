/**
 * Input validation utilities
 */

export function validateEmail(email: string): boolean {
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/;
    return emailRegex.test(email);
}

export function validatePassword(password: string): { valid: boolean; error?: string } {
    if (password.length < 8) {
        return { valid: false, error: 'Password must be at least 8 characters long' };
    }
    if (password.length > 128) {
        return { valid: false, error: 'Password must be less than 128 characters' };
    }
    return { valid: true };
}

export function validateStockSymbol(symbol: string): boolean {
    return /^[A-Z]{1,5}$/.test(symbol.trim().toUpperCase());
}

export function sanitizeString(input: string, maxLength = 255): string {
    return input.trim().slice(0, maxLength);
}

export function validateRequired<T>(value: T, fieldName: string): void {
    if (value === null || value === undefined || value === '') {
        throw new Error(`${fieldName} is required`);
    }
}

export interface ValidationResult {
    valid: boolean;
    errors: Record<string, string>;
}

export function validateSignUpData(data: SignUpFormData): ValidationResult {
    const errors: Record<string, string> = {};

    if (!data.email || !validateEmail(data.email)) {
        errors.email = 'Invalid email address';
    }

    const passwordValidation = validatePassword(data.password);
    if (!passwordValidation.valid) {
        errors.password = passwordValidation.error!;
    }

    if (!data.fullName || data.fullName.trim().length < 2) {
        errors.fullName = 'Name must be at least 2 characters';
    }

    if (!data.country) {
        errors.country = 'Country is required';
    }

    return {
        valid: Object.keys(errors).length === 0,
        errors
    };
}
