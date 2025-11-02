interface RejectedStatusBadgeProps {
  status: 'Rejected';
}

const RejectedStatusBadge: React.FC<RejectedStatusBadgeProps> = ({ status }) => {
  return (
    <div className="bg-nimasa-orange text-white font-medium py-2 px-6 rounded-full text-base">
      {status}
    </div>
  );
};

export default RejectedStatusBadge;
