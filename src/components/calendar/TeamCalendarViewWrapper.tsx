import { useState } from 'react';
import { TeamCalendarDay } from '../../types';
import DayDetailsModal from './DayDetailsModal';
import StaffOnLeave from './StaffOnLeave';
import TeamCalendarFilters from './TeamCalendarFilters';
import TeamCalendarView from './TeamCalendarView';
import TeamLegend from './TeamLegend';

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
      <h1 className="text-3xl md:text-5xl font-bold text-nimasa-dark-text mb-8">Team Calendar</h1>
      <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8">
        <TeamCalendarView onDayClick={handleDayClick} />
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
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
