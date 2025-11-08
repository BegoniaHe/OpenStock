'use client';

import { memo } from 'react';
import useTradingViewWidget from '@/hooks/useTradingViewWidget';
import { STOCK_SCREENER_CONFIG, WIDGET_SCRIPT_URLS } from '@/lib/tradingview/config';
import type { ScreenerConfig } from '@/lib/tradingview/types';

interface StockScreenerProps {
    config?: Partial<ScreenerConfig>;
    className?: string;
}

const StockScreener = ({ config, className }: StockScreenerProps) => {
    const mergedConfig = { ...STOCK_SCREENER_CONFIG, ...config };
    const containerRef = useTradingViewWidget(
        WIDGET_SCRIPT_URLS['stock-screener'],
        mergedConfig,
        mergedConfig.height || 600
    );

    return (
        <div className={className}>
            <div 
                ref={containerRef}
                className="tradingview-widget-container"
            >
                <div className="tradingview-widget-container__widget"></div>
            </div>
        </div>
    );
};

export default memo(StockScreener);
