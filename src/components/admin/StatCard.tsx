import React from 'react';

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, title, value }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center justify-center gap-2 text-center h-28">
        <h3 className="text-sm font-medium text-nimasa-dark-text">{title}</h3>
        <div className="flex items-center gap-3">
            {icon}
            <p className="text-xl font-bold text-nimasa-dark-text">{value}</p>
        </div>
    </div>
  );
};

export default StatCard;
