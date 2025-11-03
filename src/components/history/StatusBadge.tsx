import { Clock, CheckCircle2, XCircle } from 'lucide-react';

type Status = 'Pending' | 'Approved' | 'Rejected';

interface StatusBadgeProps {
  status: Status;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const config = {
    Pending: {
      bgColor: 'bg-nimasa-yellow',
      icon: <Clock size={12} className="text-white" />,
    },
    Approved: {
      bgColor: 'bg-nimasa-green',
      icon: <CheckCircle2 size={12} className="text-white" />,
    },
    Rejected: {
      bgColor: 'bg-nimasa-red',
      icon: <XCircle size={12} className="text-white" />,
    },
  };

  const { bgColor, icon } = config[status];

  return (
    <div className={`flex items-center justify-center gap-1 px-2 py-0.5 rounded-full text-white text-xs font-medium ${bgColor} w-20`}>
      {icon}
      <span>{status}</span>
    </div>
  );
};

export default StatusBadge;
