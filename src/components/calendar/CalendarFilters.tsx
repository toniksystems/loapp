import { ChevronDown } from 'lucide-react';

const CalendarFilters = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-4">
      <h3 className="text-base font-medium text-nimasa-dark-text mb-4">Filters</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">Leave Type</label>
          <div className="relative">
            <select className="w-full appearance-none bg-input-bg border border-gray-400 rounded-xl py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-nimasa-blue">
              <option>All Leave Types</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">Status</label>
          <div className="relative">
            <select className="w-full appearance-none bg-input-bg border border-gray-400 rounded-xl py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-nimasa-blue">
              <option>Approved Only</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-4">
        <button className="w-full bg-nimasa-blue text-white font-bold py-2 rounded-full text-base shadow-lg hover:bg-blue-700 transition-colors">
          Apply Filters
        </button>
        <button className="w-full bg-white border border-gray-400 text-gray-800 font-bold py-2 rounded-full text-base shadow-md hover:bg-gray-100 transition-colors">
          Reset
        </button>
      </div>
    </div>
  );
};

export default CalendarFilters;
