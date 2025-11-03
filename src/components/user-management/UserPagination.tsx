import { ChevronLeft, ChevronRight } from 'lucide-react';

const UserPagination = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mt-5 text-nimasa-dark-text">
      <p className="text-sm mb-4 sm:mb-0">Showing 1 to 8 of 2589 users</p>
      <div className="flex items-center gap-1.5">
        <button className="h-8 w-8 flex items-center justify-center rounded border border-gray-300 hover:bg-gray-100 transition-colors">
          <ChevronLeft size={18} />
        </button>
        <button className="h-8 w-8 flex items-center justify-center rounded border border-nimasa-sky-blue bg-nimasa-sky-blue text-white font-bold text-sm">1</button>
        <button className="h-8 w-8 flex items-center justify-center rounded border border-gray-300 hover:bg-gray-100 font-medium text-sm transition-colors">2</button>
        <button className="h-8 w-8 flex items-center justify-center rounded border border-gray-300 hover:bg-gray-100 font-medium text-sm transition-colors">3</button>
        <button className="h-8 w-8 flex items-center justify-center rounded border border-gray-300 hover:bg-gray-100 font-medium text-sm transition-colors">4</button>
        <button className="h-8 w-8 flex items-center justify-center rounded border border-gray-300 hover:bg-gray-100 transition-colors">
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default UserPagination;
