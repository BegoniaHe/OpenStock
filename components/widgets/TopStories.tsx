'use client';

import { memo } from 'react';
import useTradingViewWidget from '@/hooks/useTradingViewWidget';
import { TOP_STORIES_CONFIG, WIDGET_SCRIPT_URLS } from '@/lib/tradingview/config';
import type { TopStoriesConfig } from '@/lib/tradingview/types';

interface TopStoriesProps {
    symbol?: string;
    config?: Partial<TopStoriesConfig>;
    className?: string;
}

const TopStories = ({ symbol, config, className }: TopStoriesProps) => {
    const mergedConfig = { 
        ...TOP_STORIES_CONFIG, 
        ...config,
        ...(symbol && { 
            feedMode: 'symbol',
            symbol 
        })
    };
    
    const containerRef = useTradingViewWidget(
        WIDGET_SCRIPT_URLS['top-stories'],
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

export default memo(TopStories);
