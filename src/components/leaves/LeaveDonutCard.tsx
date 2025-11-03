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
    <div className="bg-white rounded-2xl shadow-lg p-3 flex flex-col items-center justify-around text-center h-full min-h-[160px]">
      <h3 className="text-sm font-medium text-nimasa-dark-text">{title}</h3>
      <div
        className="relative w-20 h-20 rounded-full flex items-center justify-center"
        style={{ background: gradient }}
      >
        <div className="absolute w-16 h-16 bg-white rounded-full flex flex-col items-center justify-center p-1">
          <span className="text-base sm:text-lg font-bold text-nimasa-dark-text">{daysLeft} Days</span>
          <span className="text-xs sm:text-sm font-medium text-nimasa-dark-text">Left</span>
        </div>
      </div>
    </div>
  );
};

export default LeaveDonutCard;
