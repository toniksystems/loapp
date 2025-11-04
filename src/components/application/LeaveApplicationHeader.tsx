import React from 'react';

interface LeaveProgressProps {
  label: string;
  used: number;
  total: number;
}

const LeaveProgressBar: React.FC<LeaveProgressProps> = ({ label, used, total }) => {
  const percentage = total > 0 ? (used / total) * 100 : 0;
  return (
    <div>
      <div className="flex justify-between items-center mb-2.5">
        <span className="text-xl font-ubuntu text-nimasa-dark-text">{label}</span>
        <span className="text-xl font-ubuntu text-nimasa-dark-text">{`${used}/${total}`}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-4">
        <div
          className="bg-nimasa-green h-4 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

const LeaveApplicationHeader = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h3 className="text-2xl font-medium text-nimasa-dark-text mb-10">Akin Adebola</h3>
      <div className="space-y-8">
        <LeaveProgressBar label="Annual Leave" used={9} total={21} />
        <LeaveProgressBar label="Casual Leave" used={3} total={12} />
        <LeaveProgressBar label="Sick Leave" used={3} total={12} />
      </div>
    </div>
  );
};

export default LeaveApplicationHeader;
