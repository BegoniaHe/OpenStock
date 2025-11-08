import NewsSummary from "@/components/NewsSummary";
import TradingViewWidget from "@/components/TradingViewWidget";
import { TOP_STORIES_WIDGET_CONFIG } from "@/lib/constants";
import { API_CONFIG, WIDGET_TYPES } from "@/lib/config";

export default function NewsPage() {
    return (
        <div className="min-h-screen p-6 md:p-8">
            <div className="max-w-7xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-100 mb-2">Market News</h1>
                    <p className="text-gray-400">Stay updated with the latest market developments and financial news</p>
                </div>

                <div className="grid gap-8 lg:grid-cols-3">
                    <div className="lg:col-span-2">
                        <NewsSummary />
                    </div>

                    <div className="lg:col-span-1">
                        <div className="rounded-xl border border-gray-800 bg-gray-900 overflow-hidden">
                            <div className="p-4 border-b border-gray-800">
                                <h2 className="text-lg font-semibold text-gray-100">Timeline</h2>
                            </div>
                            <TradingViewWidget
                                scriptUrl={`${API_CONFIG.TRADINGVIEW_WIDGET_BASE_URL}${WIDGET_TYPES.TIMELINE}`}
                                config={TOP_STORIES_WIDGET_CONFIG}
                                height={800}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
