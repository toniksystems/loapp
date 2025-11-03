import CalendarView from './CalendarView';
import CalendarFilters from './CalendarFilters';
import Legend from './Legend';
import UpcomingLeaves from './UpcomingLeaves';

const MyCalendarView = () => {
  return (
    <>
      <h1 className="text-base md:text-lg font-bold text-nimasa-dark-text mb-4">My Calendar</h1>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 items-start">
        <div className="xl:col-span-2 flex flex-col gap-5">
          <CalendarView />
          <UpcomingLeaves />
        </div>
        <div className="flex flex-col gap-5">
          <CalendarFilters />
          <Legend />
        </div>
      </div>
    </>
  );
};

export default MyCalendarView;
