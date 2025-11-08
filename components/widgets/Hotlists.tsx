'use client';

import { memo } from 'react';
import useTradingViewWidget from '@/hooks/useTradingViewWidget';
import { HOTLISTS_CONFIG, WIDGET_SCRIPT_URLS } from '@/lib/tradingview/config';
import type { HotlistsConfig } from '@/lib/tradingview/types';

interface HotlistsProps {
    title?: string;
    config?: Partial<HotlistsConfig>;
    className?: string;
}

const Hotlists = ({ title, config, className }: HotlistsProps) => {
    const mergedConfig = { ...HOTLISTS_CONFIG, ...config };
    const containerRef = useTradingViewWidget(
        WIDGET_SCRIPT_URLS['hotlists'],
        mergedConfig,
        mergedConfig.height || 400
    );

    return (
        <div className={className}>
            {title && (
                <h3 className="text-xl font-semibold text-gray-100 mb-4">{title}</h3>
            )}
            <div 
                ref={containerRef}
                className="tradingview-widget-container"
            >
                <div className="tradingview-widget-container__widget"></div>
            </div>
        </div>
    );
};

export default memo(Hotlists);
