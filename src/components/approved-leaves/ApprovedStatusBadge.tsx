interface ApprovedStatusBadgeProps {
  status: 'Approved';
}

const ApprovedStatusBadge: React.FC<ApprovedStatusBadgeProps> = ({ status }) => {
  return (
    <div className="bg-nimasa-green text-white font-medium py-1 px-4 rounded-full text-xs">
      {status}
    </div>
  );
};

export default ApprovedStatusBadge;
