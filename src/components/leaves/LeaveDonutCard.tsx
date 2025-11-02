import React from 'react';

interface DonutCardProps {
  title: string;
  daysLeft: number;
  totalDays: number;
}

const LeaveDonutCard: React.FC<DonutCardProps> = ({ title, daysLeft, totalDays }) => {
  const daysUsed = totalDays - daysLeft;
  const percentageUsed = totalDays > 0 ? (daysUsed / totalDays) * 100 : 0;
  const gradient = `conic-gradient(#FFC107 ${percentageUsed}%, #009650 0 ${100 - percentageUsed}%)`;

  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 flex flex-col items-center justify-around text-center h-full min-h-[300px]">
      <h3 className="text-2xl font-medium text-nimasa-dark-text">{title}</h3>
      <div
        className="relative w-40 h-40 sm:w-44 sm:h-44 rounded-full flex items-center justify-center"
        style={{ background: gradient }}
      >
        <div className="absolute w-[125px] h-[125px] sm:w-[145px] sm:h-[145px] bg-white rounded-full flex flex-col items-center justify-center p-2">
          <span className="text-3xl sm:text-4xl font-bold text-nimasa-dark-text">{daysLeft} Days</span>
          <span className="text-xl sm:text-2xl font-medium text-nimasa-dark-text">Left</span>
        </div>
      </div>
    </div>
  );
};

export default LeaveDonutCard;
