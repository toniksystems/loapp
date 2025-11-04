import { ChevronLeft, ChevronRight } from 'lucide-react';

const Pagination = () => {
    return (
      <div className="flex flex-col sm:flex-row justify-between items-center mt-8 text-nimasa-dark-text">
        <p className="text-xl mb-5 sm:mb-0">Showing 1 to 11 of 48 Total Requests</p>
        <div className="flex items-center gap-3">
          <button className="h-12 w-12 flex items-center justify-center rounded border border-gray-300 hover:bg-gray-100 transition-colors">
            <ChevronLeft size={24} />
          </button>
          <button className="h-12 w-12 flex items-center justify-center rounded border border-nimasa-sky-blue bg-nimasa-sky-blue text-white font-bold text-xl">1</button>
          <button className="h-12 w-12 flex items-center justify-center rounded border border-gray-300 hover:bg-gray-100 font-medium text-xl transition-colors">2</button>
          <button className="h-12 w-12 flex items-center justify-center rounded border border-gray-300 hover:bg-gray-100 font-medium text-xl transition-colors">3</button>
          <button className="h-12 w-12 flex items-center justify-center rounded border border-gray-300 hover:bg-gray-100 font-medium text-xl transition-colors">4</button>
          <button className="h-12 w-12 flex items-center justify-center rounded border border-gray-300 hover:bg-gray-100 transition-colors">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    );
};
export default Pagination;
