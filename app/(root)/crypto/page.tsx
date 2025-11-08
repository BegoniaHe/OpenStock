import CryptoHeatmap from '@/components/widgets/CryptoHeatmap';
import CryptoScreener from '@/components/widgets/CryptoScreener';

export default function CryptoPage() {
    return (
        <div className="min-h-screen p-6 md:p-8">
            <div className="max-w-7xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-100 mb-2">Cryptocurrency Market</h1>
                    <p className="text-gray-400">Real-time cryptocurrency market data and analysis</p>
                </div>

                <div className="space-y-6">
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-100 mb-4">Crypto Heatmap</h2>
                        <div className="bg-gray-800 rounded-lg overflow-hidden">
                            <CryptoHeatmap />
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-100 mb-4">Crypto Screener</h2>
                        <div className="bg-gray-800 rounded-lg overflow-hidden">
                            <CryptoScreener />
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
