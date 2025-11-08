import EconomicCalendar from '@/components/widgets/EconomicCalendar';

export default function CalendarPage() {
    return (
        <div className="min-h-screen p-6 md:p-8">
            <div className="max-w-7xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-100 mb-2">Economic Calendar</h1>
                    <p className="text-gray-400">Track important economic events and market-moving announcements</p>
                </div>

                <div className="bg-gray-800 rounded-lg overflow-hidden">
                    <EconomicCalendar />
                </div>

                <div className="mt-6 p-4 bg-gray-800 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-100 mb-2">Understanding Importance Levels</h3>
                    <div className="space-y-2 text-sm text-gray-400">
                        <p><span className="text-red-400 font-medium">High:</span> Major market impact expected</p>
                        <p><span className="text-yellow-400 font-medium">Medium:</span> Moderate market impact</p>
                        <p><span className="text-gray-400 font-medium">Low:</span> Minor market impact</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
