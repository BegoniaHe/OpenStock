import DashboardCard from "@/components/DashboardCard";
import TickerTape from "@/components/widgets/TickerTape";
import Hotlists from "@/components/widgets/Hotlists";
import { Newspaper, TrendingUp, BarChart3, Bell } from "lucide-react";

const Home = () => {
    return (
        <div className="min-h-screen p-6 md:p-8">
            <div className="max-w-7xl mx-auto">
                <div className="mb-8 -mx-6 md:-mx-8">
                    <TickerTape />
                </div>

                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
                        Welcome to OpenStock
                    </h1>
                    <p className="text-lg text-gray-400 max-w-2xl">
                        Your open-source platform for tracking markets, analyzing trends, and making informed investment decisions.
                    </p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="rounded-xl border border-gray-800 bg-gray-900 p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-400 mb-1">Market Status</p>
                                <p className="text-2xl font-bold text-green-400">Open</p>
                            </div>
                            <div className="w-12 h-12 rounded-full bg-green-400/10 flex items-center justify-center">
                                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                            </div>
                        </div>
                    </div>

                    <div className="rounded-xl border border-gray-800 bg-gray-900 p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-400 mb-1">Watchlist Items</p>
                                <p className="text-2xl font-bold text-gray-100">-</p>
                            </div>
                            <TrendingUp className="w-8 h-8 text-yellow-400" />
                        </div>
                    </div>

                    <div className="rounded-xl border border-gray-800 bg-gray-900 p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-400 mb-1">Active Alerts</p>
                                <p className="text-2xl font-bold text-gray-100">-</p>
                            </div>
                            <Bell className="w-8 h-8 text-yellow-400" />
                        </div>
                    </div>
                </div>

                {/* Main Navigation Cards */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-100 mb-6">Explore</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <DashboardCard
                            title="Market News"
                            description="Stay updated with AI-powered daily market news summaries and latest financial headlines."
                            href="/news"
                            icon={Newspaper}
                            iconColor="text-blue-400"
                        />
                        
                        <DashboardCard
                            title="Market Overview"
                            description="Analyze real-time market data, heatmaps, and comprehensive market insights."
                            href="/market"
                            icon={BarChart3}
                            iconColor="text-green-400"
                        />
                        
                        <DashboardCard
                            title="Stock Screener"
                            description="Filter and discover stocks, forex, and cryptocurrencies based on your criteria."
                            href="/screener"
                            icon={TrendingUp}
                            iconColor="text-yellow-400"
                        />
                    </div>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-100 mb-6">Market Hotlists</h2>
                    <div className="bg-gray-800 rounded-lg overflow-hidden">
                        <Hotlists />
                    </div>
                </div>

                {/* Getting Started */}
                <div className="rounded-xl border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-800 p-8">
                    <h2 className="text-2xl font-bold text-gray-100 mb-4">Getting Started</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div>
                            <div className="w-10 h-10 rounded-full bg-yellow-400/10 flex items-center justify-center mb-3">
                                <span className="text-yellow-400 font-bold">1</span>
                            </div>
                            <h3 className="font-semibold text-gray-200 mb-2">Search Stocks</h3>
                            <p className="text-sm text-gray-400">Use the search feature to find and explore stocks you are interested in.</p>
                        </div>
                        
                        <div>
                            <div className="w-10 h-10 rounded-full bg-yellow-400/10 flex items-center justify-center mb-3">
                                <span className="text-yellow-400 font-bold">2</span>
                            </div>
                            <h3 className="font-semibold text-gray-200 mb-2">Build Watchlist</h3>
                            <p className="text-sm text-gray-400">Add stocks to your watchlist to track their performance over time.</p>
                        </div>
                        
                        <div>
                            <div className="w-10 h-10 rounded-full bg-yellow-400/10 flex items-center justify-center mb-3">
                                <span className="text-yellow-400 font-bold">3</span>
                            </div>
                            <h3 className="font-semibold text-gray-200 mb-2">Stay Informed</h3>
                            <p className="text-sm text-gray-400">Get daily news summaries and market insights powered by AI.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;