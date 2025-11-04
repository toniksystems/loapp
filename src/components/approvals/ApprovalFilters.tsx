import { Filter, Search, ChevronDown } from 'lucide-react';

const ApprovalFilters = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-4 mb-6">
      <div className="flex items-center gap-2.5 text-nimasa-dark-text font-medium text-base">
        <Filter size={18} />
        <span>Filter By</span>
      </div>
      <div className="relative w-full lg:w-auto">
        <select className="w-full lg:w-40 appearance-none bg-input-bg border border-gray-300 rounded-full py-2 px-5 text-base focus:outline-none focus:ring-2 focus:ring-nimasa-blue">
          <option>All Status</option>
          <option>Pending</option>
          <option>Approved</option>
          <option>Rejected</option>
        </select>
        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
      </div>
      <div className="relative w-full lg:w-auto">
        <select className="w-full lg:w-40 appearance-none bg-input-bg border border-gray-300 rounded-full py-2 px-5 text-base focus:outline-none focus:ring-2 focus:ring-nimasa-blue">
          <option>Leave Type</option>
          <option>Annual</option>
          <option>Casual</option>
          <option>Sick</option>
        </select>
        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
      </div>
      <div className="relative w-full lg:flex-1 max-w-lg ml-auto">
        <input
          type="text"
          placeholder="Search by Employee Name or ID"
          className="w-full bg-input-bg border border-gray-300 rounded-full py-2 pl-10 pr-5 text-base focus:outline-none focus:ring-2 focus:ring-nimasa-blue"
        />
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
      </div>
    </div>
  );
};

export default ApprovalFilters;
