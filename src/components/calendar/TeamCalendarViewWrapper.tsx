import { useState } from 'react';
import { TeamCalendarDay } from '../../types';
import DayDetailsModal from '../team-calendar/DayDetailsModal';
import StaffOnLeave from '../team-calendar/StaffOnLeave';
import TeamCalendarFilters from '../team-calendar/TeamCalendarFilters';
import TeamCalendarView from './TeamCalendarView';
import TeamLegend from '../team-calendar/TeamLegend';

const TeamCalendarViewWrapper = () => {
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
    <>
      <h1 className="text-base md:text-lg font-bold text-nimasa-dark-text mb-4">Team Calendar</h1>
      <div className="bg-white rounded-2xl shadow-lg p-4">
        <TeamCalendarView onDayClick={handleDayClick} />
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-5 items-start">
          <TeamLegend />
          <TeamCalendarFilters />
          <StaffOnLeave />
        </div>
      </div>
      {isModalOpen && <DayDetailsModal dayData={selectedDay} onClose={handleCloseModal} />}
    </>
  );
};

export default TeamCalendarViewWrapper;
