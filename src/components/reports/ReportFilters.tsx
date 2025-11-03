import { ChevronDown, Calendar } from 'lucide-react';

const ReportFilters = () => {
    return (
        <div className="bg-white rounded-3xl shadow-lg p-8">
            <h3 className="text-2xl md:text-3xl font-medium text-nimasa-dark-text mb-6">Generate Report</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 items-end">
                <div className="lg:col-span-1">
                    <label className="block text-lg font-medium text-nimasa-dark-text mb-2">Report Type</label>
                    <div className="relative">
                        <select defaultValue="Absence Summary" className="w-full appearance-none bg-input-bg border border-gray-300 rounded-2xl py-3 px-4 text-lg focus:outline-none focus:ring-2 focus:ring-nimasa-blue">
                            <option>Absence Summary</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-6 w-6 text-gray-400 pointer-events-none" />
                    </div>
                </div>
                <div className="lg:col-span-1">
                    <label className="block text-lg font-medium text-nimasa-dark-text mb-2">Staff/Unit</label>
                    <div className="relative">
                        <select defaultValue="All Departmental Sta" className="w-full appearance-none bg-input-bg border border-gray-300 rounded-2xl py-3 px-4 text-lg focus:outline-none focus:ring-2 focus:ring-nimasa-blue">
                            <option>All Departmental Sta</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-6 w-6 text-gray-400 pointer-events-none" />
                    </div>
                </div>
                <div className="lg:col-span-1">
                    <label className="block text-lg font-medium text-nimasa-dark-text mb-2">From Date</label>
                    <div className="relative">
                        <input type="text" defaultValue="01/01/2025" className="w-full bg-input-bg border border-gray-300 rounded-2xl py-3 pl-12 pr-4 text-lg focus:outline-none focus:ring-2 focus:ring-nimasa-blue" />
                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-gray-400" />
                    </div>
                </div>
                <div className="lg:col-span-1">
                    <label className="block text-lg font-medium text-nimasa-dark-text mb-2">To Date</label>
                    <div className="relative">
                        <input type="text" defaultValue="31/10/2025" className="w-full bg-input-bg border border-gray-300 rounded-2xl py-3 pl-12 pr-4 text-lg focus:outline-none focus:ring-2 focus:ring-nimasa-blue" />
                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-gray-400" />
                    </div>
                </div>
                <div className="lg:col-span-1">
                    <button className="w-full bg-nimasa-blue text-white font-bold py-3 rounded-2xl text-lg shadow-lg hover:bg-blue-700 transition-colors">Generate Report</button>
                </div>
                <div className="lg:col-span-1">
                    <button className="w-full bg-gray-200 text-gray-800 font-bold py-3 rounded-2xl text-lg shadow-md hover:bg-gray-300 transition-colors">Reset Filter</button>
                </div>
            </div>
        </div>
    );
}

export default ReportFilters;
