import { ChevronDown } from 'lucide-react';

interface Leave {
  employeeName: string;
  leaveColor: string;
}

interface CalendarDay {
  date: number | null;
  isWeekend: boolean;
  leaves: Leave[];
}

const calendarData: CalendarDay[] = [
  { date: null, isWeekend: false, leaves: [] }, // Sun
  { date: null, isWeekend: false, leaves: [] }, // Mon
  { date: null, isWeekend: false, leaves: [] }, // Tue
  { date: 1, isWeekend: false, leaves: [] },
  { date: 2, isWeekend: false, leaves: [{ employeeName: 'Aisha Lawal', leaveColor: 'bg-nimasa-blue' }] },
  { date: 3, isWeekend: false, leaves: [{ employeeName: 'Aisha Lawal', leaveColor: 'bg-nimasa-blue' }] },
  { date: 4, isWeekend: true, leaves: [] },
  { date: 5, isWeekend: true, leaves: [] },
  { date: 6, isWeekend: false, leaves: [] },
  { date: 7, isWeekend: false, leaves: [{ employeeName: 'Jane Mbaku', leaveColor: 'bg-nimasa-gold' }] },
  { date: 8, isWeekend: false, leaves: [{ employeeName: 'Jane Mbaku', leaveColor: 'bg-nimasa-gold' }] },
  { date: 9, isWeekend: false, leaves: [] },
  { date: 10, isWeekend: false, leaves: [] },
  { date: 11, isWeekend: true, leaves: [] },
  { date: 12, isWeekend: true, leaves: [] },
  { date: 13, isWeekend: false, leaves: [{ employeeName: 'Sanusi Kadri', leaveColor: 'bg-nimasa-blue' }] },
  { date: 14, isWeekend: false, leaves: [{ employeeName: 'Sanusi Kadri', leaveColor: 'bg-nimasa-blue' }] },
  { date: 15, isWeekend: false, leaves: [{ employeeName: 'Sanusi Kadri', leaveColor: 'bg-nimasa-blue' }, { employeeName: 'Akin Adebola', leaveColor: 'bg-nimasa-green' }] },
  { date: 16, isWeekend: false, leaves: [{ employeeName: 'Akin Adebola', leaveColor: 'bg-nimasa-green' }] },
  { date: 17, isWeekend: false, leaves: [{ employeeName: 'Akin Adebola', leaveColor: 'bg-nimasa-green' }] },
  { date: 18, isWeekend: true, leaves: [] },
  { date: 19, isWeekend: true, leaves: [] },
  { date: 20, isWeekend: false, leaves: [{ employeeName: 'Akin Adebola', leaveColor: 'bg-nimasa-green' }] },
  { date: 21, isWeekend: false, leaves: [{ employeeName: 'Akin Adebola', leaveColor: 'bg-nimasa-green' }] },
  { date: 22, isWeekend: false, leaves: [{ employeeName: 'Akin Adebola', leaveColor: 'bg-nimasa-green' }] },
  { date: 23, isWeekend: false, leaves: [{ employeeName: 'Akin Adebola', leaveColor: 'bg-nimasa-green' }] },
  { date: 24, isWeekend: false, leaves: [{ employeeName: 'Akin Adebola', leaveColor: 'bg-nimasa-green' }] },
  { date: 25, isWeekend: true, leaves: [] },
  { date: 26, isWeekend: true, leaves: [] },
  { date: 27, isWeekend: false, leaves: [] },
  { date: 28, isWeekend: false, leaves: [{ employeeName: 'Uche Okafor', leaveColor: 'bg-nimasa-sky-blue' }] },
  { date: 29, isWeekend: false, leaves: [{ employeeName: 'Uche Okafor', leaveColor: 'bg-nimasa-sky-blue' }] },
  { date: 30, isWeekend: false, leaves: [{ employeeName: 'Uche Okafor', leaveColor: 'bg-nimasa-sky-blue' }] },
  { date: 31, isWeekend: false, leaves: [] },
];

const TeamCalendarView = () => {
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
        {calendarData.map((day, index) => (
          <div
            key={index}
            className={`h-44 border border-gray-200 rounded-lg p-2 ${day.isWeekend ? 'bg-gray-100' : 'bg-white'}`}
          >
            <p className="text-lg font-bold text-right">{day.date}</p>
            <div className="mt-1 space-y-1">
              {day.leaves.map((leave, leaveIndex) => (
                <div key={leaveIndex} className="flex items-center gap-1.5">
                  <div className={`w-2 h-2 rounded-full ${leave.leaveColor}`}></div>
                  <p className="text-xs font-medium text-nimasa-dark-text truncate">{leave.employeeName}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamCalendarView;
