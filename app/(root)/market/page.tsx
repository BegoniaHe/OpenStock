import TradingViewWidget from "@/components/TradingViewWidget";
import {
    HEATMAP_WIDGET_CONFIG,
    MARKET_DATA_WIDGET_CONFIG,
    MARKET_OVERVIEW_WIDGET_CONFIG
} from "@/lib/constants";
import { API_CONFIG, WIDGET_TYPES } from "@/lib/config";

export default function MarketPage() {
    return (
        <div className="min-h-screen p-6 md:p-8">
            <div className="max-w-7xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-100 mb-2">Market Overview</h1>
                    <p className="text-gray-400">Real-time market data, analysis, and comprehensive insights</p>
                </div>

                <div className="space-y-6">
                    <div className="grid gap-6 lg:grid-cols-3">
                        <div className="lg:col-span-1 rounded-xl border border-gray-800 bg-gray-900 overflow-hidden">
                            <div className="p-4 border-b border-gray-800">
                                <h2 className="text-lg font-semibold text-gray-100">Market Overview</h2>
                            </div>
                            <TradingViewWidget
                                scriptUrl={`${API_CONFIG.TRADINGVIEW_WIDGET_BASE_URL}${WIDGET_TYPES.MARKET_OVERVIEW}`}
                                config={MARKET_OVERVIEW_WIDGET_CONFIG}
                                height={600}
                            />
                        </div>

                        <div className="lg:col-span-2 rounded-xl border border-gray-800 bg-gray-900 overflow-hidden">
                            <div className="p-4 border-b border-gray-800">
                                <h2 className="text-lg font-semibold text-gray-100">Stock Heatmap</h2>
                            </div>
                            <TradingViewWidget
                                scriptUrl={`${API_CONFIG.TRADINGVIEW_WIDGET_BASE_URL}${WIDGET_TYPES.STOCK_HEATMAP}`}
                                config={HEATMAP_WIDGET_CONFIG}
                                height={600}
                            />
                        </div>
                    </div>

                    <div className="rounded-xl border border-gray-800 bg-gray-900 overflow-hidden">
                        <div className="p-4 border-b border-gray-800">
                            <h2 className="text-lg font-semibold text-gray-100">Market Quotes</h2>
                        </div>
                        <TradingViewWidget
                            scriptUrl={`${API_CONFIG.TRADINGVIEW_WIDGET_BASE_URL}${WIDGET_TYPES.MARKET_QUOTES}`}
                            config={MARKET_DATA_WIDGET_CONFIG}
                            height={600}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
