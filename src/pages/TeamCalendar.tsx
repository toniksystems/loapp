import Layout from '../components/Layout';
import CalendarTabs from '../components/team-calendar/CalendarTabs';
import TeamCalendarView from '../components/team-calendar/TeamCalendarView';
import TeamLegend from '../components/team-calendar/TeamLegend';
import TeamCalendarFilters from '../components/team-calendar/TeamCalendarFilters';
import StaffOnLeave from '../components/team-calendar/StaffOnLeave';

const TeamCalendar = () => {
  return (
    <Layout>
      <h1 className="text-3xl md:text-5xl font-bold text-nimasa-dark-text mb-8">Calendar</h1>
      <CalendarTabs />
      <div className="mt-8">
        <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8">
          <TeamCalendarView />
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <TeamLegend />
            <TeamCalendarFilters />
            <StaffOnLeave />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TeamCalendar;
