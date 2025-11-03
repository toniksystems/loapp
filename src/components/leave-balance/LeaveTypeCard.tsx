import React from 'react';

interface InfoBoxProps {
  value: number;
  label: string;
}

const InfoBox: React.FC<InfoBoxProps> = ({ value, label }) => (
  <div className="border border-gray-300 rounded-lg p-2 text-center bg-white">
    <p className="text-lg font-bold text-nimasa-dark-text">{value}</p>
    <p className="text-xs text-gray-600">{label}</p>
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
    <div className="bg-white rounded-2xl shadow-lg p-4">
      <div className="flex items-center gap-3">
        <div className="text-nimasa-dark-text">{icon}</div>
        <div>
          <h3 className="text-base font-medium text-nimasa-dark-text">{title}</h3>
          <p className="text-xs text-gray-500">{allocation}</p>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex justify-between items-center mb-1">
          <span className="text-xs font-medium text-nimasa-dark-text">Usage Progress</span>
          <span className="text-xs font-bold text-nimasa-dark-text">{progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-nimasa-green h-2.5 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-3">
        <InfoBox value={daysUsed} label="Days Used" />
        <InfoBox value={pending} label="Pending" />
        <InfoBox value={daysAvailable} label="Available" />
      </div>
    </div>
  );
};

export default LeaveTypeCard;
