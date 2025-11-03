interface RejectedStatusBadgeProps {
  status: 'Rejected';
}

const RejectedStatusBadge: React.FC<RejectedStatusBadgeProps> = ({ status }) => {
  return (
    <div className="bg-nimasa-orange text-white font-medium py-1.5 px-5 rounded-full text-sm">
      {status}
    </div>
  );
};

export default RejectedStatusBadge;
