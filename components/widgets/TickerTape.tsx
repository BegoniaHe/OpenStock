'use client';

import { memo } from 'react';
import useTradingViewWidget from '@/hooks/useTradingViewWidget';
import { TICKER_TAPE_CONFIG, WIDGET_SCRIPT_URLS } from '@/lib/tradingview/config';
import type { TickerTapeConfig } from '@/lib/tradingview/types';

interface TickerTapeProps {
    config?: Partial<TickerTapeConfig>;
    className?: string;
}

const TickerTape = ({ config, className }: TickerTapeProps) => {
    const mergedConfig = { ...TICKER_TAPE_CONFIG, ...config };
    const containerRef = useTradingViewWidget(
        WIDGET_SCRIPT_URLS['ticker-tape'],
        mergedConfig,
        80
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

export default memo(TickerTape);
