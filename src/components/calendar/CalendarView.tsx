import { ChevronDown } from 'lucide-react';

const CalendarView = () => {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  // Hardcoded days for October 2025 for demonstration
  const calendarDays = [
    ...Array(3).fill({ day: null, type: 'empty' }), // Corrected offset for Wednesday start
    { day: 1, type: 'normal' }, { day: 2, type: 'normal' }, { day: 3, type: 'normal' }, { day: 4, type: 'weekend' },
    { day: 5, type: 'weekend' }, { day: 6, type: 'normal' }, { day: 7, type: 'normal' }, { day: 8, type: 'normal' }, { day: 9, type: 'normal' }, { day: 10, type: 'normal' }, { day: 11, type: 'weekend' },
    { day: 12, type: 'weekend' }, { day: 13, type: 'normal' }, { day: 14, type: 'normal' }, { day: 15, type: 'annual' }, { day: 16, type: 'annual' }, { day: 17, type: 'annual' }, { day: 18, type: 'weekend' },
    { day: 19, type: 'weekend' }, { day: 20, type: 'annual' }, { day: 21, type: 'annual' }, { day: 22, type: 'annual' }, { day: 23, type: 'annual' }, { day: 24, type: 'annual' }, { day: 25, type: 'weekend' },
    { day: 26, type: 'weekend' }, { day: 27, type: 'normal' }, { day: 28, type: 'normal' }, { day: 29, type: 'normal' }, { day: 30, type: 'normal' }, { day: 31, type: 'normal' },
    ...Array(1).fill({ day: null, type: 'empty' }),
  ];

  const getDayClass = (type: string) => {
    switch (type) {
      case 'weekend':
        return 'bg-gray-200 text-nimasa-dark-text';
      case 'annual':
        return 'bg-nimasa-green text-white';
      case 'empty':
        return 'bg-transparent';
      default:
        return 'bg-white text-nimasa-dark-text';
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-4">
      <div className="flex items-center justify-center gap-4 md:gap-6 mb-4">
        <div className="flex items-center gap-2 cursor-pointer">
          <h2 className="text-lg md:text-xl font-bold text-nimasa-dark-text">October</h2>
          <ChevronDown size={20} className="text-nimasa-dark-text" />
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <h2 className="text-lg md:text-xl font-bold text-nimasa-dark-text">2025</h2>
          <ChevronDown size={20} className="text-nimasa-dark-text" />
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2 text-center text-sm font-medium text-gray-500 mb-3">
        {daysOfWeek.map(day => <div key={day}>{day}</div>)}
      </div>

      <div className="grid grid-cols-7 gap-2">
        {calendarDays.map((item, index) => (
          <div
            key={index}
            className={`h-10 w-full flex items-center justify-center rounded-full text-sm font-medium ${getDayClass(item.type)}`}
          >
            {item.day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;
