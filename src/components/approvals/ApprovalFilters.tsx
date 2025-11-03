import { Filter, Search, ChevronDown } from 'lucide-react';

const ApprovalFilters = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-3 mb-4">
      <div className="flex items-center gap-2 text-nimasa-dark-text font-medium text-sm">
        <Filter size={16} />
        <span>Filter By</span>
      </div>
      <div className="relative w-full lg:w-auto">
        <select className="w-full lg:w-36 appearance-none bg-input-bg border border-gray-300 rounded-full py-1.5 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-nimasa-blue">
          <option>All Status</option>
          <option>Pending</option>
          <option>Approved</option>
          <option>Rejected</option>
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
      </div>
      <div className="relative w-full lg:w-auto">
        <select className="w-full lg:w-36 appearance-none bg-input-bg border border-gray-300 rounded-full py-1.5 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-nimasa-blue">
          <option>Leave Type</option>
          <option>Annual</option>
          <option>Casual</option>
          <option>Sick</option>
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
      </div>
      <div className="relative w-full lg:flex-1 max-w-md ml-auto">
        <input
          type="text"
          placeholder="Search by Employee Name or ID"
          className="w-full bg-input-bg border border-gray-300 rounded-full py-1.5 pl-9 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-nimasa-blue"
        />
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
      </div>
    </div>
  );
};

export default ApprovalFilters;
