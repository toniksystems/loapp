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
        className="bg-white rounded-2xl shadow-2xl p-5 w-full max-w-md relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-nimasa-red transition-colors"
        >
          <X size={24} />
        </button>
        
        <h2 className="text-xl font-bold text-nimasa-dark-text text-center mb-5">
          Staff on Leave - Oct {dayData.date}, 2025
        </h2>
        
        <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
          {dayData.leaves.map((leave, index) => (
            <div key={index} className="flex items-center gap-4 p-3 bg-gray-100 rounded-xl">
              <img src={leave.avatarUrl} alt={leave.employeeName} className="h-12 w-12 rounded-full" />
              <div>
                <p className="text-base font-bold text-nimasa-dark-text">{leave.employeeName}</p>
                <div className="flex items-center gap-2 mt-1">
                  <div className={`w-3 h-3 rounded-full ${leave.leaveColor}`}></div>
                  <p className="text-sm text-gray-700">{leave.leaveType}</p>
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
