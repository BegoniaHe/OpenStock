'use client';

import { memo } from 'react';
import useTradingViewWidget from '@/hooks/useTradingViewWidget';
import { FOREX_SCREENER_CONFIG, WIDGET_SCRIPT_URLS } from '@/lib/tradingview/config';
import type { ScreenerConfig } from '@/lib/tradingview/types';

interface ForexScreenerProps {
    config?: Partial<ScreenerConfig>;
    className?: string;
}

const ForexScreener = ({ config, className }: ForexScreenerProps) => {
    const mergedConfig = { ...FOREX_SCREENER_CONFIG, ...config };
    const containerRef = useTradingViewWidget(
        WIDGET_SCRIPT_URLS['forex-screener'],
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

export default memo(ForexScreener);
