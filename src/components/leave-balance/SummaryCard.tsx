import React from 'react';

interface SummaryCardProps {
  title: string;
  value: string;
  subtitle: string;
  bgColor: string;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ title, value, subtitle, bgColor }) => {
  return (
    <div className={`${bgColor} text-white rounded-2xl p-4 flex flex-col justify-between h-32 shadow-lg`}>
      <div>
        <h3 className="text-base font-medium">{title}</h3>
      </div>
      <div className="text-center">
        <p className="text-3xl font-bold">{value}</p>
        <p className="text-sm">{subtitle}</p>
      </div>
    </div>
  );
};

export default SummaryCard;
