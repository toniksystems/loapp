import Layout from '../components/Layout';
import CalendarView from '../components/calendar/CalendarView';
import CalendarFilters from '../components/calendar/CalendarFilters';
import Legend from '../components/calendar/Legend';
import UpcomingLeaves from '../components/calendar/UpcomingLeaves';

const CalendarPage = () => {
  return (
    <Layout>
      <h1 className="text-3xl md:text-5xl font-bold text-nimasa-dark-text mb-8">My Calendar</h1>
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
    </Layout>
  );
};

export default CalendarPage;
