import React from 'react';

interface UserStatCardProps {
  title: string;
  value: string;
}

const UserStatCard: React.FC<UserStatCardProps> = ({ title, value }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center justify-center gap-1 text-center h-24">
      <h3 className="text-sm font-medium text-nimasa-dark-text">{title}</h3>
      <p className="text-2xl font-bold text-nimasa-dark-text">{value}</p>
    </div>
  );
};

export default UserStatCard;
