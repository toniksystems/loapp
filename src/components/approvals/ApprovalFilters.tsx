import { Filter, Search, ChevronDown } from 'lucide-react';

const ApprovalFilters = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-2.5 mb-4">
      <div className="flex items-center gap-1.5 text-nimasa-dark-text font-medium text-xs">
        <Filter size={14} />
        <span>Filter By</span>
      </div>
      <div className="relative w-full lg:w-auto">
        <select className="w-full lg:w-32 appearance-none bg-input-bg border border-gray-300 rounded-full py-1 px-3 text-xs focus:outline-none focus:ring-2 focus:ring-nimasa-blue">
          <option>All Status</option>
          <option>Pending</option>
          <option>Approved</option>
          <option>Rejected</option>
        </select>
        <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-gray-400 pointer-events-none" />
      </div>
      <div className="relative w-full lg:w-auto">
        <select className="w-full lg:w-32 appearance-none bg-input-bg border border-gray-300 rounded-full py-1 px-3 text-xs focus:outline-none focus:ring-2 focus:ring-nimasa-blue">
          <option>Leave Type</option>
          <option>Annual</option>
          <option>Casual</option>
          <option>Sick</option>
        </select>
        <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-gray-400 pointer-events-none" />
      </div>
      <div className="relative w-full lg:flex-1 max-w-sm ml-auto">
        <input
          type="text"
          placeholder="Search by Employee Name or ID"
          className="w-full bg-input-bg border border-gray-300 rounded-full py-1 pl-8 pr-3 text-xs focus:outline-none focus:ring-2 focus:ring-nimasa-blue"
        />
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-gray-400" />
      </div>
    </div>
  );
};

export default ApprovalFilters;
