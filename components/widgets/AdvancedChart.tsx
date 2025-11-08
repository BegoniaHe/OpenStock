'use client';

import { memo } from 'react';
import useTradingViewWidget from '@/hooks/useTradingViewWidget';
import { ADVANCED_CHART_CONFIG, WIDGET_SCRIPT_URLS } from '@/lib/tradingview/config';
import type { AdvancedChartConfig } from '@/lib/tradingview/types';

interface AdvancedChartProps {
    symbol?: string;
    config?: Partial<AdvancedChartConfig>;
    className?: string;
}

const AdvancedChart = ({ symbol, config, className }: AdvancedChartProps) => {
    const mergedConfig = { 
        ...ADVANCED_CHART_CONFIG, 
        ...config,
        ...(symbol && { symbol })
    };
    
    const containerRef = useTradingViewWidget(
        WIDGET_SCRIPT_URLS['advanced-chart'],
        mergedConfig,
        mergedConfig.height || 610
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

export default memo(AdvancedChart);
