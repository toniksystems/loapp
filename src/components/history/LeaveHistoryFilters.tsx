import { Search, ChevronDown } from 'lucide-react';

const LeaveHistoryFilters = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4 mb-8">
      <div className="relative w-full md:w-auto md:flex-1 max-w-md">
        <input
          type="text"
          placeholder="Search by ID, Status, Date,"
          className="w-full bg-input-bg border border-gray-300 rounded-full py-3 pl-12 pr-4 text-lg focus:outline-none focus:ring-2 focus:ring-nimasa-blue"
        />
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-gray-400" />
      </div>
      <div className="relative w-full md:w-52">
        <select className="w-full appearance-none bg-input-bg border border-gray-300 rounded-full py-3 px-6 text-lg focus:outline-none focus:ring-2 focus:ring-nimasa-blue">
          <option>All Types</option>
          <option>Annual</option>
          <option>Casual</option>
          <option>Sick</option>
          <option>Paternity</option>
        </select>
        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-6 w-6 text-gray-400 pointer-events-none" />
      </div>
      <div className="relative w-full md:w-52">
        <select className="w-full appearance-none bg-input-bg border border-gray-300 rounded-full py-3 px-6 text-lg focus:outline-none focus:ring-2 focus:ring-nimasa-blue">
          <option>All Status</option>
          <option>Pending</option>
          <option>Approved</option>
          <option>Rejected</option>
        </select>
        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-6 w-6 text-gray-400 pointer-events-none" />
      </div>
    </div>
  );
};
export default LeaveHistoryFilters;
