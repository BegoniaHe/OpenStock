'use client';

import { useState } from 'react';
import StockScreener from '@/components/widgets/StockScreener';
import ForexScreener from '@/components/widgets/ForexScreener';
import CryptoScreener from '@/components/widgets/CryptoScreener';

type ScreenerTab = 'stocks' | 'forex' | 'crypto';

export default function ScreenerPage() {
    const [activeTab, setActiveTab] = useState<ScreenerTab>('stocks');

    return (
        <div className="min-h-screen p-6 md:p-8">
            <div className="max-w-7xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-100 mb-2">Market Screener</h1>
                    <p className="text-gray-400">Filter and discover stocks, forex, and cryptocurrencies based on your criteria</p>
                </div>

                <div className="mb-6">
                    <div className="flex gap-2 border-b border-gray-700">
                        <button
                            onClick={() => setActiveTab('stocks')}
                            className={`px-6 py-3 font-medium transition-colors ${
                                activeTab === 'stocks'
                                    ? 'text-yellow-400 border-b-2 border-yellow-400'
                                    : 'text-gray-400 hover:text-gray-300'
                            }`}
                        >
                            Stocks
                        </button>
                        <button
                            onClick={() => setActiveTab('forex')}
                            className={`px-6 py-3 font-medium transition-colors ${
                                activeTab === 'forex'
                                    ? 'text-yellow-400 border-b-2 border-yellow-400'
                                    : 'text-gray-400 hover:text-gray-300'
                            }`}
                        >
                            Forex
                        </button>
                        <button
                            onClick={() => setActiveTab('crypto')}
                            className={`px-6 py-3 font-medium transition-colors ${
                                activeTab === 'crypto'
                                    ? 'text-yellow-400 border-b-2 border-yellow-400'
                                    : 'text-gray-400 hover:text-gray-300'
                            }`}
                        >
                            Crypto
                        </button>
                    </div>
                </div>

                <div className="bg-gray-800 rounded-lg overflow-hidden">
                    {activeTab === 'stocks' && <StockScreener />}
                    {activeTab === 'forex' && <ForexScreener />}
                    {activeTab === 'crypto' && <CryptoScreener />}
                </div>
            </div>
        </div>
    );
}
