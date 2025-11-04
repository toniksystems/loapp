import { Calendar, ChevronDown, FileText, FileSpreadsheet } from 'lucide-react';

const AuditLogFilters = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-4 mb-6">
      <div className="relative">
        <input
          type="text"
          placeholder="dd/mm/yyyy"
          className="w-full lg:w-40 bg-white border border-[#2A4269] rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-nimasa-blue"
        />
        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
      </div>
      <div className="relative">
        <input
          type="text"
          placeholder="dd/mm/yyyy"
          className="w-full lg:w-40 bg-white border border-[#2A4269] rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-nimasa-blue"
        />
        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
      </div>
      <div className="relative">
        <select className="w-full lg:w-40 appearance-none bg-white border border-[#2A4269] rounded-lg py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-nimasa-blue">
          <option>All Users</option>
        </select>
        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 pointer-events-none" />
      </div>
      <div className="flex-grow flex flex-col sm:flex-row justify-end gap-4">
        <button className="flex items-center justify-center gap-2 bg-[#DC2626] text-white font-medium py-2 px-4 rounded-lg text-sm shadow-md hover:bg-red-700 transition-colors">
          <FileText size={18} />
          <span>Export to PDF</span>
        </button>
        <button className="flex items-center justify-center gap-2 bg-[#16A34A] text-white font-medium py-2 px-4 rounded-lg text-sm shadow-md hover:bg-green-700 transition-colors">
          <FileSpreadsheet size={18} />
          <span>Export to Excel</span>
        </button>
      </div>
    </div>
  );
};

export default AuditLogFilters;
