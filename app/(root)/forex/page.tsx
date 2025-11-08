import ForexHeatmap from '@/components/widgets/ForexHeatmap';
import ForexCrossRates from '@/components/widgets/ForexCrossRates';
import ForexScreener from '@/components/widgets/ForexScreener';

export default function ForexPage() {
    return (
        <div className="min-h-screen p-6 md:p-8">
            <div className="max-w-7xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-100 mb-2">Forex Market</h1>
                    <p className="text-gray-400">Foreign exchange market data and currency pairs analysis</p>
                </div>

                <div className="space-y-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-100 mb-4">Forex Heatmap</h2>
                            <div className="bg-gray-800 rounded-lg overflow-hidden">
                                <ForexHeatmap />
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-100 mb-4">Cross Rates</h2>
                            <div className="bg-gray-800 rounded-lg overflow-hidden">
                                <ForexCrossRates />
                            </div>
                        </section>
                    </div>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-100 mb-4">Forex Screener</h2>
                        <div className="bg-gray-800 rounded-lg overflow-hidden">
                            <ForexScreener />
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
