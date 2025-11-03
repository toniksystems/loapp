import { Search, ChevronDown, Filter, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

const UserFilters = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-4">
      <div className="flex flex-col lg:flex-row items-center gap-4 mb-4">
        <div className="relative w-full lg:flex-1">
          <input
            type="text"
            placeholder="Search by name, employee ID, email, or department"
            className="w-full bg-white border border-gray-300 rounded-lg py-2 px-10 text-sm focus:outline-none focus:ring-2 focus:ring-nimasa-blue"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        </div>
        <Link
          to="/add-new-staff"
          className="w-full lg:w-auto bg-nimasa-blue text-white font-bold py-2 px-4 rounded-lg text-sm flex items-center justify-center gap-2 shadow-lg hover:bg-blue-700 transition-colors"
        >
          <Plus size={18} />
          <span>Add New Staff</span>
        </Link>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-3">
        <div className="relative w-full sm:w-auto">
          <select className="w-full sm:w-36 appearance-none bg-white border border-gray-300 rounded-lg py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-nimasa-blue">
            <option>All Roles</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
        </div>
        <div className="relative w-full sm:w-auto">
          <select className="w-full sm:w-36 appearance-none bg-white border border-gray-300 rounded-lg py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-nimasa-blue">
            <option>All Status</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
        </div>
        <div className="relative w-full sm:w-auto">
          <select className="w-full sm:w-44 appearance-none bg-white border border-gray-300 rounded-lg py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-nimasa-blue">
            <option>All Departments</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
        </div>
        <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white border border-gray-300 rounded-lg py-2 px-4 text-sm text-nimasa-dark-text font-medium hover:bg-gray-50 transition-colors">
          <Filter size={16} />
          <span>Advanced Filter</span>
        </button>
      </div>
    </div>
  );
};

export default UserFilters;
