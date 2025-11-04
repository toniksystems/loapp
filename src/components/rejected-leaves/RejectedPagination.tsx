import { ChevronLeft, ChevronRight } from 'lucide-react';

const RejectedPagination = () => {
    return (
      <div className="flex flex-col sm:flex-row justify-between items-center mt-8 text-nimasa-dark-text">
        <p className="text-lg mb-4 sm:mb-0">Showing 1 to 5 of 28 Total Requests</p>
        <div className="flex items-center gap-2.5">
          <button className="h-10 w-10 flex items-center justify-center rounded border border-gray-300 hover:bg-gray-100 transition-colors">
            <ChevronLeft size={22} />
          </button>
          <button className="h-10 w-10 flex items-center justify-center rounded border border-nimasa-sky-blue bg-nimasa-sky-blue text-white font-bold text-lg">1</button>
          <button className="h-10 w-10 flex items-center justify-center rounded border border-gray-300 hover:bg-gray-100 font-medium text-lg transition-colors">2</button>
          <button className="h-10 w-10 flex items-center justify-center rounded border border-gray-300 hover:bg-gray-100 font-medium text-lg transition-colors">3</button>
          <button className="h-10 w-10 flex items-center justify-center rounded border border-gray-300 hover:bg-gray-100 font-medium text-lg transition-colors">4</button>
          <button className="h-10 w-10 flex items-center justify-center rounded border border-gray-300 hover:bg-gray-100 transition-colors">
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    );
};
export default RejectedPagination;
