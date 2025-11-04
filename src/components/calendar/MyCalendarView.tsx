import CalendarView from './CalendarView';
import CalendarFilters from './CalendarFilters';
import Legend from './Legend';
import UpcomingLeaves from './UpcomingLeaves';

const MyCalendarView = () => {
  return (
    <>
      <h1 className="text-xl md:text-2xl font-bold text-nimasa-dark-text mb-6">My Calendar</h1>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 items-start">
        <div className="xl:col-span-2 flex flex-col gap-8">
          <CalendarView />
          <UpcomingLeaves />
        </div>
        <div className="flex flex-col gap-8">
          <CalendarFilters />
          <Legend />
        </div>
      </div>
    </>
  );
};

export default MyCalendarView;
