import React from 'react';

interface UserStatCardProps {
  title: string;
  value: string;
}

const UserStatCard: React.FC<UserStatCardProps> = ({ title, value }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center gap-2.5 text-center h-32">
      <h3 className="text-lg font-medium text-nimasa-dark-text">{title}</h3>
      <p className="text-4xl font-bold text-nimasa-dark-text">{value}</p>
    </div>
  );
};

export default UserStatCard;
