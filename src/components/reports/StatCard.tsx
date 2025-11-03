import React from 'react';

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, title, value }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-5 flex flex-col items-center justify-center gap-2 text-center">
        <div className="flex items-center gap-2">
            {icon}
            <h3 className="text-lg font-medium text-nimasa-dark-text">{title}</h3>
        </div>
        <p className="text-4xl font-bold text-nimasa-dark-text mt-1">{value}</p>
    </div>
  );
};

export default StatCard;
