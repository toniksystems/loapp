import { ChevronLeft, ChevronRight } from 'lucide-react';

const ApprovalsPagination = () => {
    return (
      <div className="flex flex-col sm:flex-row justify-between items-center mt-4 text-nimasa-dark-text">
        <p className="text-xs mb-2 sm:mb-0">Showing 1 to 7 of 28 Total Requests</p>
        <div className="flex items-center gap-1">
          <button className="h-7 w-7 flex items-center justify-center rounded border border-gray-300 hover:bg-gray-100 transition-colors">
            <ChevronLeft size={16} />
          </button>
          <button className="h-7 w-7 flex items-center justify-center rounded border border-nimasa-sky-blue bg-nimasa-sky-blue text-white font-bold text-xs">1</button>
          <button className="h-7 w-7 flex items-center justify-center rounded border border-gray-300 hover:bg-gray-100 font-medium text-xs transition-colors">2</button>
          <button className="h-7 w-7 flex items-center justify-center rounded border border-gray-300 hover:bg-gray-100 font-medium text-xs transition-colors">3</button>
          <button className="h-7 w-7 flex items-center justify-center rounded border border-gray-300 hover:bg-gray-100 font-medium text-xs transition-colors">4</button>
          <button className="h-7 w-7 flex items-center justify-center rounded border border-gray-300 hover:bg-gray-100 transition-colors">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    );
};
export default ApprovalsPagination;
