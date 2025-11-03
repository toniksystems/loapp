import { useState } from 'react';
import Layout from '../components/Layout';
import CalendarTabs from '../components/team-calendar/CalendarTabs';
import TeamCalendarView from '../components/team-calendar/TeamCalendarView';
import TeamLegend from '../components/team-calendar/TeamLegend';
import TeamCalendarFilters from '../components/team-calendar/TeamCalendarFilters';
import StaffOnLeave from '../components/team-calendar/StaffOnLeave';
import DayDetailsModal from '../components/team-calendar/DayDetailsModal';
import { TeamCalendarDay } from '../types';

const TeamCalendar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState<TeamCalendarDay | null>(null);

  const handleDayClick = (dayData: TeamCalendarDay) => {
    if (dayData.leaves.length > 0) {
      setSelectedDay(dayData);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedDay(null);
  };

  return (
    <Layout>
      <h1 className="text-3xl md:text-5xl font-bold text-nimasa-dark-text mb-8">Calendar</h1>
      <CalendarTabs />
      <div className="mt-8">
        <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8">
          <TeamCalendarView onDayClick={handleDayClick} />
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <TeamLegend />
            <TeamCalendarFilters />
            <StaffOnLeave />
          </div>
        </div>
      </div>
      {isModalOpen && <DayDetailsModal dayData={selectedDay} onClose={handleCloseModal} />}
    </Layout>
  );
};

export default TeamCalendar;
