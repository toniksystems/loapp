import React from 'react';
import { Clock, CheckCircle2, XCircle } from 'lucide-react';

type Status = 'Pending' | 'Approved' | 'Rejected' | 'N/A';

interface StatusBadgeProps {
  status: Status;
}

const ApplicationStatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  if (status === 'N/A') {
    return <span className="text-base text-gray-500 px-5">{status}</span>;
  }

  const config = {
    Pending: {
      bgColor: 'bg-nimasa-yellow',
      icon: <Clock size={16} />,
      text: 'Pending',
    },
    Approved: {
      bgColor: 'bg-nimasa-green',
      icon: <CheckCircle2 size={16} />,
      text: 'Approved',
    },
    Rejected: {
      bgColor: 'bg-nimasa-red',
      icon: <XCircle size={16} />,
      text: 'Rejected',
    },
  };

  const { bgColor, icon, text } = config[status];

  return (
    <div className={`flex items-center justify-center gap-2 py-1.5 px-3 rounded-full text-white text-base font-medium ${bgColor} w-28`}>
      {icon}
      <span>{text}</span>
    </div>
  );
};

export default ApplicationStatusBadge;
