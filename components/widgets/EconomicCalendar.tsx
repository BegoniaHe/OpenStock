'use client';

import { memo } from 'react';
import useTradingViewWidget from '@/hooks/useTradingViewWidget';
import { ECONOMIC_CALENDAR_CONFIG, WIDGET_SCRIPT_URLS } from '@/lib/tradingview/config';
import type { EconomicCalendarConfig } from '@/lib/tradingview/types';

interface EconomicCalendarProps {
    config?: Partial<EconomicCalendarConfig>;
    className?: string;
}

const EconomicCalendar = ({ config, className }: EconomicCalendarProps) => {
    const mergedConfig = { ...ECONOMIC_CALENDAR_CONFIG, ...config };
    const containerRef = useTradingViewWidget(
        WIDGET_SCRIPT_URLS['economic-calendar'],
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

export default memo(EconomicCalendar);
