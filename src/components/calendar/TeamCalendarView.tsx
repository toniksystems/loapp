import { ChevronDown } from 'lucide-react';
import { TeamCalendarDay } from '../../types';
import { calendarData } from '../../data/teamCalendarData';

interface TeamCalendarViewProps {
  onDayClick: (dayData: TeamCalendarDay) => void;
}

const TeamCalendarView = ({ onDayClick }: TeamCalendarViewProps) => {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div>
      <div className="flex items-center justify-center gap-4 md:gap-8 mb-8">
        <div className="flex items-center gap-2 cursor-pointer">
          <h2 className="text-3xl md:text-4xl font-bold text-nimasa-dark-text">October</h2>
          <ChevronDown size={28} className="text-nimasa-dark-text" />
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <h2 className="text-3xl md:text-4xl font-bold text-nimasa-dark-text">2025</h2>
          <ChevronDown size={28} className="text-nimasa-dark-text" />
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2 text-center text-lg font-medium text-gray-500 mb-4">
        {daysOfWeek.map(day => <div key={day}>{day}</div>)}
      </div>

      <div className="grid grid-cols-7 gap-2">
        {calendarData.map((day, index) => {
          const isClickable = day.leaves.length > 0;
          const DayComponent = isClickable ? 'button' : 'div';

          return (
            <DayComponent
              key={index}
              onClick={() => isClickable && onDayClick(day)}
              className={`h-44 border border-gray-200 rounded-lg p-2 text-left transition-all duration-200 ${day.isWeekend ? 'bg-gray-100' : 'bg-white'} ${isClickable ? 'cursor-pointer hover:bg-gray-50 hover:shadow-md' : ''}`}
            >
              <p className="text-lg font-bold text-right">{day.date}</p>
              <div className="mt-1 space-y-1">
                {day.leaves.map((leave, leaveIndex) => (
                  <div key={leaveIndex} className="flex items-center gap-1.5">
                    <div className={`w-2 h-2 rounded-full flex-shrink-0 ${leave.leaveColor}`}></div>
                    <p className="text-xs font-medium text-nimasa-dark-text truncate">{leave.employeeName}</p>
                  </div>
                ))}
              </div>
            </DayComponent>
          );
        })}
      </div>
    </div>
  );
};

export default TeamCalendarView;
