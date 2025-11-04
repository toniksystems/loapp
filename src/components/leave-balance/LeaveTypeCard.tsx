import React from 'react';

interface InfoBoxProps {
  value: number;
  label: string;
}

const InfoBox: React.FC<InfoBoxProps> = ({ value, label }) => (
  <div className="border border-gray-300 rounded-lg p-4 text-center bg-white">
    <p className="text-3xl font-bold text-nimasa-dark-text">{value}</p>
    <p className="text-lg text-gray-600">{label}</p>
  </div>
);


interface LeaveTypeCardProps {
  icon: React.ReactNode;
  title: string;
  allocation: string;
  progress: number;
  daysUsed: number;
  pending: number;
  daysAvailable: number;
}

const LeaveTypeCard: React.FC<LeaveTypeCardProps> = ({ icon, title, allocation, progress, daysUsed, pending, daysAvailable }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="flex items-center gap-6">
        <div className="text-nimasa-dark-text">{icon}</div>
        <div>
          <h3 className="text-2xl font-medium text-nimasa-dark-text">{title}</h3>
          <p className="text-lg text-gray-500">{allocation}</p>
        </div>
      </div>

      <div className="mt-8">
        <div className="flex justify-between items-center mb-2.5">
          <span className="text-lg font-medium text-nimasa-dark-text">Usage Progress</span>
          <span className="text-lg font-bold text-nimasa-dark-text">{progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div
            className="bg-nimasa-green h-4 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-3 gap-6">
        <InfoBox value={daysUsed} label="Days Used" />
        <InfoBox value={pending} label="Pending" />
        <InfoBox value={daysAvailable} label="Available" />
      </div>
    </div>
  );
};

export default LeaveTypeCard;
