import { Calendar, ChevronDown, FileText, FileSpreadsheet } from 'lucide-react';

const AuditLogFilters = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-5 mb-10">
      <div className="relative">
        <input
          type="text"
          placeholder="dd/mm/yyyy"
          className="w-full lg:w-48 bg-white border border-[#2A4269] rounded-lg py-3 pl-12 pr-5 text-lg focus:outline-none focus:ring-2 focus:ring-nimasa-blue"
        />
        <Calendar className="absolute left-5 top-1/2 -translate-y-1/2 h-6 w-6 text-gray-500" />
      </div>
      <div className="relative">
        <input
          type="text"
          placeholder="dd/mm/yyyy"
          className="w-full lg:w-48 bg-white border border-[#2A4269] rounded-lg py-3 pl-12 pr-5 text-lg focus:outline-none focus:ring-2 focus:ring-nimasa-blue"
        />
        <Calendar className="absolute left-5 top-1/2 -translate-y-1/2 h-6 w-6 text-gray-500" />
      </div>
      <div className="relative">
        <select className="w-full lg:w-48 appearance-none bg-white border border-[#2A4269] rounded-lg py-3 px-5 text-lg focus:outline-none focus:ring-2 focus:ring-nimasa-blue">
          <option>All Users</option>
        </select>
        <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 h-6 w-6 text-gray-500 pointer-events-none" />
      </div>
      <div className="flex-grow flex flex-col sm:flex-row justify-end gap-5">
        <button className="flex items-center justify-center gap-3 bg-[#DC2626] text-white font-medium py-3 px-6 rounded-lg text-lg shadow-md hover:bg-red-700 transition-colors">
          <FileText size={20} />
          <span>Export to PDF</span>
        </button>
        <button className="flex items-center justify-center gap-3 bg-[#16A34A] text-white font-medium py-3 px-6 rounded-lg text-lg shadow-md hover:bg-green-700 transition-colors">
          <FileSpreadsheet size={20} />
          <span>Export to Excel</span>
        </button>
      </div>
    </div>
  );
};

export default AuditLogFilters;
