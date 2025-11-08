'use client';

import { memo } from 'react';
import useTradingViewWidget from '@/hooks/useTradingViewWidget';
import { FOREX_CROSS_RATES_CONFIG, WIDGET_SCRIPT_URLS } from '@/lib/tradingview/config';
import type { ForexCrossRatesConfig } from '@/lib/tradingview/types';

interface ForexCrossRatesProps {
    config?: Partial<ForexCrossRatesConfig>;
    className?: string;
}

const ForexCrossRates = ({ config, className }: ForexCrossRatesProps) => {
    const mergedConfig = { ...FOREX_CROSS_RATES_CONFIG, ...config };
    const containerRef = useTradingViewWidget(
        WIDGET_SCRIPT_URLS['forex-cross-rates'],
        mergedConfig,
        mergedConfig.height || 400
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

export default memo(ForexCrossRates);
