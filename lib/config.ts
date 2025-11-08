/**
 * Application configuration constants
 */

export const APP_CONFIG = {
    NAME: 'OpenStock',
    DESCRIPTION: 'Open-source stock market tracking platform',
    VERSION: '0.1.0',
} as const;

export const UI_CONFIG = {
    DEFAULT_WIDGET_HEIGHT: 600,
    DEBOUNCE_DELAY: 300,
    NEWS_REFRESH_INTERVAL: 5 * 60 * 1000, // 5 minutes
    MAX_NEWS_ARTICLES: 6,
} as const;

export const API_CONFIG = {
    TRADINGVIEW_WIDGET_BASE_URL: 'https://s3.tradingview.com/external-embedding/embed-widget-',
    FINNHUB_BASE_URL: 'https://finnhub.io/api/v1',
} as const;

export const WIDGET_TYPES = {
    MARKET_OVERVIEW: 'market-overview.js',
    STOCK_HEATMAP: 'stock-heatmap.js',
    MARKET_QUOTES: 'market-quotes.js',
    TIMELINE: 'timeline.js',
} as const;

export const ERROR_MESSAGES = {
    GENERIC: 'An unexpected error occurred',
    AUTH_REQUIRED: 'Authentication required',
    INVALID_CREDENTIALS: 'Invalid email or password',
    SIGNUP_FAILED: 'Failed to create account',
    SIGNIN_FAILED: 'Failed to sign in',
    SIGNOUT_FAILED: 'Failed to sign out',
    FETCH_FAILED: 'Failed to fetch data',
    NETWORK_ERROR: 'Network error occurred',
} as const;

export const SUCCESS_MESSAGES = {
    SIGNUP: 'Account created successfully',
    SIGNIN: 'Signed in successfully',
    SIGNOUT: 'Signed out successfully',
    WATCHLIST_ADDED: 'Added to watchlist',
    WATCHLIST_REMOVED: 'Removed from watchlist',
} as const;
