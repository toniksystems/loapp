import { Plane, Check } from 'lucide-react';

const UpcomingLeaves = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-4">
      <h3 className="text-base font-medium text-nimasa-dark-text mb-4">Upcoming Leaves</h3>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="bg-gray-100 p-2 rounded-full">
            <Plane size={24} className="text-nimasa-dark-text" />
          </div>
          <div>
            <p className="text-base font-bold text-nimasa-dark-text">Annual Leave</p>
            <p className="text-sm text-gray-600">October 15 - 24, 2025</p>
          </div>
          <div className="h-3 w-3 rounded-full bg-nimasa-green ml-2 hidden sm:block"></div>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-nimasa-green text-white flex items-center gap-2 px-3 py-1 rounded-lg">
            <Check size={16} />
            <span className="font-bold text-xs">Approved</span>
          </div>
          <p className="text-lg font-bold text-nimasa-dark-text text-right">8 Days</p>
        </div>
      </div>
    </div>
  );
};

export default UpcomingLeaves;
