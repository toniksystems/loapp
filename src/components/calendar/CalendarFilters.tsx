import { ChevronDown } from 'lucide-react';

const CalendarFilters = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h3 className="text-xl font-medium text-nimasa-dark-text mb-6">Filters</h3>
      
      <div className="space-y-6">
        <div>
          <label className="block text-lg font-bold text-gray-700 mb-2.5">Leave Type</label>
          <div className="relative">
            <select className="w-full appearance-none bg-input-bg border border-gray-400 rounded-xl py-3 px-6 text-lg focus:outline-none focus:ring-2 focus:ring-nimasa-blue">
              <option>All Leave Types</option>
            </select>
            <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 h-6 w-6 text-gray-400 pointer-events-none" />
          </div>
        </div>

        <div>
          <label className="block text-lg font-bold text-gray-700 mb-2.5">Status</label>
          <div className="relative">
            <select className="w-full appearance-none bg-input-bg border border-gray-400 rounded-xl py-3 px-6 text-lg focus:outline-none focus:ring-2 focus:ring-nimasa-blue">
              <option>Approved Only</option>
            </select>
            <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 h-6 w-6 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-6">
        <button className="w-full bg-nimasa-blue text-white font-bold py-3 rounded-full text-xl shadow-lg hover:bg-blue-700 transition-colors">
          Apply Filters
        </button>
        <button className="w-full bg-white border border-gray-400 text-gray-800 font-bold py-3 rounded-full text-xl shadow-md hover:bg-gray-100 transition-colors">
          Reset
        </button>
      </div>
    </div>
  );
};

export default CalendarFilters;
