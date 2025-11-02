interface StatusBadgeProps {
  status: 'Pending' | 'Approved' | 'Rejected' | 'Cancelled';
}

const AllStatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const config = {
    Pending: {
      bgColor: 'bg-nimasa-gold',
      text: 'Pending',
    },
    Approved: {
      bgColor: 'bg-nimasa-green',
      text: 'Approved',
    },
    Rejected: {
      bgColor: 'bg-nimasa-orange',
      text: 'Rejected',
    },
    Cancelled: {
      bgColor: 'bg-nimasa-orange',
      text: 'Cancelled',
    },
  };

  const { bgColor, text } = config[status];

  return (
    <div className={`inline-block text-white font-medium py-2 px-6 rounded-full text-base ${bgColor}`}>
      {text}
    </div>
  );
};

export default AllStatusBadge;
