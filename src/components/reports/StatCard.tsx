import React from 'react';

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, title, value }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center gap-3 text-center">
        <div className="flex items-center gap-3">
            {icon}
            <h3 className="text-xl font-medium text-nimasa-dark-text">{title}</h3>
        </div>
        <p className="text-5xl font-bold text-nimasa-dark-text mt-2">{value}</p>
    </div>
  );
};

export default StatCard;
