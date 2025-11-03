import React from 'react';
import { Clock, CheckCircle2, XCircle } from 'lucide-react';

type Status = 'Pending' | 'Approved' | 'Rejected' | 'N/A';

interface StatusBadgeProps {
  status: Status;
}

const ApplicationStatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  if (status === 'N/A') {
    return <span className="text-xs text-gray-500 px-4">{status}</span>;
  }

  const config = {
    Pending: {
      bgColor: 'bg-nimasa-yellow',
      icon: <Clock size={12} />,
      text: 'Pending',
    },
    Approved: {
      bgColor: 'bg-nimasa-green',
      icon: <CheckCircle2 size={12} />,
      text: 'Approved',
    },
    Rejected: {
      bgColor: 'bg-nimasa-red',
      icon: <XCircle size={12} />,
      text: 'Rejected',
    },
  };

  const { bgColor, icon, text } = config[status];

  return (
    <div className={`flex items-center justify-center gap-1 py-0.5 px-2 rounded-full text-white text-xs font-medium ${bgColor} w-20`}>
      {icon}
      <span>{text}</span>
    </div>
  );
};

export default ApplicationStatusBadge;
