import React from 'react';

interface UserStatCardProps {
  title: string;
  value: string;
}

const UserStatCard: React.FC<UserStatCardProps> = ({ title, value }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center justify-center gap-2 text-center h-28">
      <h3 className="text-base font-medium text-nimasa-dark-text">{title}</h3>
      <p className="text-3xl font-bold text-nimasa-dark-text">{value}</p>
    </div>
  );
};

export default UserStatCard;
