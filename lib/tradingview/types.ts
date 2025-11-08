export interface TradingViewSymbol {
    proName: string;
    title: string;
}

export interface BaseWidgetConfig {
    colorTheme?: 'light' | 'dark';
    isTransparent?: boolean;
    locale?: string;
    width?: string | number;
    height?: number;
}

export interface TickerTapeConfig extends BaseWidgetConfig {
    symbols: TradingViewSymbol[];
    showSymbolLogo?: boolean;
    displayMode?: 'adaptive' | 'regular' | 'compact';
}

export interface HotlistsConfig extends BaseWidgetConfig {
    exchange?: string;
    showChart?: boolean;
    largeChartUrl?: string;
}

export interface ScreenerConfig extends BaseWidgetConfig {
    defaultColumn?: string;
    defaultScreen?: string;
    market?: string;
    showToolbar?: boolean;
}

export interface EconomicCalendarConfig extends BaseWidgetConfig {
    importanceFilter?: string;
    countryFilter?: string;
}

export interface HeatmapConfig extends BaseWidgetConfig {
    exchanges?: string[];
    dataSource?: string;
    grouping?: string;
    blockSize?: string;
    blockColor?: string;
    hasTopBar?: boolean;
    currencies?: string[];
}

export interface AdvancedChartConfig extends BaseWidgetConfig {
    symbol?: string;
    interval?: string;
    timezone?: string;
    theme?: 'light' | 'dark';
    style?: string;
    toolbar_bg?: string;
    enable_publishing?: boolean;
    allow_symbol_change?: boolean;
    container_id?: string;
    studies?: string[];
    show_popup_button?: boolean;
    popup_width?: string;
    popup_height?: string;
}

export interface ForexCrossRatesConfig extends BaseWidgetConfig {
    currencies?: string[];
}

export interface TopStoriesConfig extends BaseWidgetConfig {
    symbol?: string;
    feedMode?: string;
    market?: string;
}

export interface SymbolOverviewConfig extends BaseWidgetConfig {
    symbols?: Array<[string, string]>;
    chartOnly?: boolean;
    gridLineColor?: string;
    fontColor?: string;
    underLineColor?: string;
    trendLineColor?: string;
    underLineBottomColor?: string;
    autosize?: boolean;
}

export type WidgetType = 
    | 'ticker-tape'
    | 'hotlists'
    | 'stock-screener'
    | 'forex-screener'
    | 'crypto-screener'
    | 'economic-calendar'
    | 'stock-heatmap'
    | 'crypto-heatmap'
    | 'forex-heatmap'
    | 'etf-heatmap'
    | 'advanced-chart'
    | 'forex-cross-rates'
    | 'top-stories'
    | 'symbol-overview'
    | 'market-overview'
    | 'market-quotes'
    | 'technical-analysis'
    | 'fundamental-data'
    | 'timeline';
