import CalendarView from './CalendarView';
import CalendarFilters from './CalendarFilters';
import Legend from './Legend';
import UpcomingLeaves from './UpcomingLeaves';

const MyCalendarView = () => {
  return (
    <>
      <h1 className="text-2xl md:text-3xl font-bold text-nimasa-dark-text mb-8">My Calendar</h1>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-10 items-start">
        <div className="xl:col-span-2 flex flex-col gap-10">
          <CalendarView />
          <UpcomingLeaves />
        </div>
        <div className="flex flex-col gap-10">
          <CalendarFilters />
          <Legend />
        </div>
      </div>
    </>
  );
};

export default MyCalendarView;
