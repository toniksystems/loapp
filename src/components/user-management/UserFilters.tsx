import { Search, ChevronDown, Filter, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

const UserFilters = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="flex flex-col lg:flex-row items-center gap-6 mb-6">
        <div className="relative w-full lg:flex-1">
          <input
            type="text"
            placeholder="Search by name, employee ID, email, or department"
            className="w-full bg-white border border-gray-300 rounded-lg py-3 px-14 text-lg focus:outline-none focus:ring-2 focus:ring-nimasa-blue"
          />
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-6 w-6 text-gray-400" />
        </div>
        <Link
          to="/add-new-staff"
          className="w-full lg:w-auto bg-nimasa-blue text-white font-bold py-3 px-6 rounded-lg text-lg flex items-center justify-center gap-3 shadow-lg hover:bg-blue-700 transition-colors"
        >
          <Plus size={22} />
          <span>Add New Staff</span>
        </Link>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-5">
        <div className="relative w-full sm:w-auto">
          <select className="w-full sm:w-44 appearance-none bg-white border border-gray-300 rounded-lg py-3 px-5 text-lg focus:outline-none focus:ring-2 focus:ring-nimasa-blue">
            <option>All Roles</option>
          </select>
          <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 h-6 w-6 text-gray-400 pointer-events-none" />
        </div>
        <div className="relative w-full sm:w-auto">
          <select className="w-full sm:w-44 appearance-none bg-white border border-gray-300 rounded-lg py-3 px-5 text-lg focus:outline-none focus:ring-2 focus:ring-nimasa-blue">
            <option>All Status</option>
          </select>
          <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 h-6 w-6 text-gray-400 pointer-events-none" />
        </div>
        <div className="relative w-full sm:w-auto">
          <select className="w-full sm:w-52 appearance-none bg-white border border-gray-300 rounded-lg py-3 px-5 text-lg focus:outline-none focus:ring-2 focus:ring-nimasa-blue">
            <option>All Departments</option>
          </select>
          <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 h-6 w-6 text-gray-400 pointer-events-none" />
        </div>
        <button className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white border border-gray-300 rounded-lg py-3 px-5 text-lg text-nimasa-dark-text font-medium hover:bg-gray-50 transition-colors">
          <Filter size={20} />
          <span>Advanced Filter</span>
        </button>
      </div>
    </div>
  );
};

export default UserFilters;
