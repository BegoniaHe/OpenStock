import type {
    TickerTapeConfig,
    HotlistsConfig,
    ScreenerConfig,
    EconomicCalendarConfig,
    HeatmapConfig,
    AdvancedChartConfig,
    ForexCrossRatesConfig,
    TopStoriesConfig,
    SymbolOverviewConfig,
    TradingViewSymbol
} from './types';

export const DEFAULT_SYMBOLS: TradingViewSymbol[] = [
    { proName: "NASDAQ:AAPL", title: "Apple" },
    { proName: "NASDAQ:GOOGL", title: "Google" },
    { proName: "NASDAQ:MSFT", title: "Microsoft" },
    { proName: "NASDAQ:TSLA", title: "Tesla" },
    { proName: "NASDAQ:AMZN", title: "Amazon" },
    { proName: "NASDAQ:META", title: "Meta" },
    { proName: "NASDAQ:NVDA", title: "NVIDIA" },
    { proName: "NYSE:JPM", title: "JPMorgan" },
    { proName: "NYSE:V", title: "Visa" },
    { proName: "NASDAQ:NFLX", title: "Netflix" }
];

export const TICKER_TAPE_CONFIG: TickerTapeConfig = {
    symbols: DEFAULT_SYMBOLS,
    showSymbolLogo: true,
    colorTheme: "dark",
    isTransparent: true,
    displayMode: "adaptive",
    locale: "en"
};

export const HOTLISTS_CONFIG: HotlistsConfig = {
    colorTheme: "dark",
    isTransparent: false,
    locale: "en",
    width: "100%",
    height: 400,
    exchange: "US",
    showChart: true,
    largeChartUrl: ""
};

export const STOCK_SCREENER_CONFIG: ScreenerConfig = {
    width: "100%",
    height: 600,
    defaultColumn: "overview",
    defaultScreen: "general",
    market: "america",
    showToolbar: true,
    colorTheme: "dark",
    locale: "en"
};

export const FOREX_SCREENER_CONFIG: ScreenerConfig = {
    width: "100%",
    height: 600,
    defaultColumn: "overview",
    defaultScreen: "general",
    market: "forex",
    showToolbar: true,
    colorTheme: "dark",
    locale: "en"
};

export const CRYPTO_SCREENER_CONFIG: ScreenerConfig = {
    width: "100%",
    height: 600,
    defaultColumn: "overview",
    defaultScreen: "general",
    market: "crypto",
    showToolbar: true,
    colorTheme: "dark",
    locale: "en"
};

export const ECONOMIC_CALENDAR_CONFIG: EconomicCalendarConfig = {
    colorTheme: "dark",
    isTransparent: false,
    width: "100%",
    height: 600,
    locale: "en",
    importanceFilter: "-1,0,1",
    countryFilter: "us,eu,jp,cn"
};

export const STOCK_HEATMAP_CONFIG: HeatmapConfig = {
    exchanges: [],
    dataSource: "SPX500",
    grouping: "sector",
    blockSize: "market_cap_basic",
    blockColor: "change",
    locale: "en",
    colorTheme: "dark",
    hasTopBar: false,
    isTransparent: false,
    width: "100%",
    height: 600
};

export const CRYPTO_HEATMAP_CONFIG: HeatmapConfig = {
    dataSource: "Crypto",
    exchanges: [],
    grouping: "no_group",
    blockSize: "market_cap_calc",
    blockColor: "change",
    locale: "en",
    colorTheme: "dark",
    hasTopBar: false,
    isTransparent: false,
    width: "100%",
    height: 600
};

export const FOREX_HEATMAP_CONFIG: HeatmapConfig = {
    currencies: ["EUR", "USD", "JPY", "GBP", "CHF", "AUD", "CAD", "NZD", "CNY"],
    width: "100%",
    height: 600,
    colorTheme: "dark",
    isTransparent: false,
    locale: "en"
};

export const ETF_HEATMAP_CONFIG: HeatmapConfig = {
    dataSource: "AllUSEtf",
    exchanges: [],
    grouping: "asset_class",
    blockSize: "aum",
    blockColor: "change|60",
    locale: "en",
    colorTheme: "dark",
    hasTopBar: false,
    isTransparent: false,
    width: "100%",
    height: 600
};

export const ADVANCED_CHART_CONFIG: AdvancedChartConfig = {
    width: "100%",
    height: 610,
    symbol: "NASDAQ:AAPL",
    interval: "D",
    timezone: "Etc/UTC",
    theme: "dark",
    style: "1",
    locale: "en",
    toolbar_bg: "#f1f3f6",
    enable_publishing: false,
    allow_symbol_change: true,
    studies: [],
    show_popup_button: true,
    popup_width: "1000",
    popup_height: "650"
};

export const FOREX_CROSS_RATES_CONFIG: ForexCrossRatesConfig = {
    width: "100%",
    height: 400,
    currencies: ["EUR", "USD", "JPY", "GBP", "CHF", "AUD", "CAD", "NZD"],
    colorTheme: "dark",
    isTransparent: false,
    locale: "en"
};

export const TOP_STORIES_CONFIG: TopStoriesConfig = {
    feedMode: "all_symbols",
    colorTheme: "dark",
    isTransparent: false,
    width: "100%",
    height: 600,
    locale: "en"
};

export const SYMBOL_OVERVIEW_CONFIG: SymbolOverviewConfig = {
    symbols: [["Apple", "AAPL|1D"]],
    chartOnly: false,
    width: "100%",
    height: 500,
    locale: "en",
    colorTheme: "dark",
    autosize: true,
    gridLineColor: "rgba(42, 46, 57, 0)",
    fontColor: "#787B86",
    underLineColor: "rgba(41, 98, 255, 0.3)",
    trendLineColor: "rgba(41, 98, 255, 1)",
    underLineBottomColor: "rgba(41, 98, 255, 0)",
    isTransparent: false
};

export const WIDGET_SCRIPT_URLS: Record<string, string> = {
    'ticker-tape': 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js',
    'hotlists': 'https://s3.tradingview.com/external-embedding/embed-widget-hotlists.js',
    'stock-screener': 'https://s3.tradingview.com/external-embedding/embed-widget-screener.js',
    'forex-screener': 'https://s3.tradingview.com/external-embedding/embed-widget-screener.js',
    'crypto-screener': 'https://s3.tradingview.com/external-embedding/embed-widget-screener.js',
    'economic-calendar': 'https://s3.tradingview.com/external-embedding/embed-widget-events.js',
    'stock-heatmap': 'https://s3.tradingview.com/external-embedding/embed-widget-stock-heatmap.js',
    'crypto-heatmap': 'https://s3.tradingview.com/external-embedding/embed-widget-crypto-coins-heatmap.js',
    'forex-heatmap': 'https://s3.tradingview.com/external-embedding/embed-widget-forex-heat-map.js',
    'etf-heatmap': 'https://s3.tradingview.com/external-embedding/embed-widget-etf-heatmap.js',
    'advanced-chart': 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js',
    'forex-cross-rates': 'https://s3.tradingview.com/external-embedding/embed-widget-forex-cross-rates.js',
    'top-stories': 'https://s3.tradingview.com/external-embedding/embed-widget-timeline.js',
    'symbol-overview': 'https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js'
};
