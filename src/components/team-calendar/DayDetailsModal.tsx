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
        className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-nimasa-red transition-colors"
        >
          <X size={28} />
        </button>
        
        <h2 className="text-3xl font-bold text-nimasa-dark-text text-center mb-6">
          Staff on Leave - Oct {dayData.date}, 2025
        </h2>
        
        <div className="space-y-5 max-h-[60vh] overflow-y-auto pr-2">
          {dayData.leaves.map((leave, index) => (
            <div key={index} className="flex items-center gap-4 p-3 bg-gray-100 rounded-2xl">
              <img src={leave.avatarUrl} alt={leave.employeeName} className="h-16 w-16 rounded-full" />
              <div>
                <p className="text-xl font-bold text-nimasa-dark-text">{leave.employeeName}</p>
                <div className="flex items-center gap-2 mt-1">
                  <div className={`w-3 h-3 rounded-full ${leave.leaveColor}`}></div>
                  <p className="text-base text-gray-700">{leave.leaveType}</p>
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
