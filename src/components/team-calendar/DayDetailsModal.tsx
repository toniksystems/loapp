import { X } from 'lucide-react';
import { TeamCalendarDay } from '../../types';

interface DayDetailsModalProps {
  dayData: TeamCalendarDay | null;
  onClose: () => void;
}

const DayDetailsModal = ({ dayData, onClose }: DayDetailsModalProps) => {
  if (!dayData || !dayData.date) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-xl shadow-2xl p-4 w-full max-w-xs relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-nimasa-red transition-colors"
        >
          <X size={20} />
        </button>
        
        <h2 className="text-base font-bold text-nimasa-dark-text text-center mb-3">
          Staff on Leave - Oct {dayData.date}, 2025
        </h2>
        
        <div className="space-y-2.5 max-h-[50vh] overflow-y-auto pr-1">
          {dayData.leaves.map((leave, index) => (
            <div key={index} className="flex items-center gap-2.5 p-2 bg-gray-100 rounded-md">
              <img src={leave.avatarUrl} alt={leave.employeeName} className="h-9 w-9 rounded-full" />
              <div>
                <p className="text-sm font-bold text-nimasa-dark-text">{leave.employeeName}</p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <div className={`w-2 h-2 rounded-full ${leave.leaveColor}`}></div>
                  <p className="text-xs text-gray-700">{leave.leaveType}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DayDetailsModal;
