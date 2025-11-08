'use client';

import { memo } from 'react';
import useTradingViewWidget from '@/hooks/useTradingViewWidget';
import { ETF_HEATMAP_CONFIG, WIDGET_SCRIPT_URLS } from '@/lib/tradingview/config';
import type { HeatmapConfig } from '@/lib/tradingview/types';

interface ETFHeatmapProps {
    config?: Partial<HeatmapConfig>;
    className?: string;
}

const ETFHeatmap = ({ config, className }: ETFHeatmapProps) => {
    const mergedConfig = { ...ETF_HEATMAP_CONFIG, ...config };
    const containerRef = useTradingViewWidget(
        WIDGET_SCRIPT_URLS['etf-heatmap'],
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

export default memo(ETFHeatmap);
