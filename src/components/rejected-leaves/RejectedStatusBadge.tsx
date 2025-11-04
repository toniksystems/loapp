interface RejectedStatusBadgeProps {
  status: 'Rejected';
}

const RejectedStatusBadge: React.FC<RejectedStatusBadgeProps> = ({ status }) => {
  return (
    <div className="bg-nimasa-orange text-white font-medium py-1 px-4 rounded-full text-xs">
      {status}
    </div>
  );
};

export default RejectedStatusBadge;
