interface ApprovedStatusBadgeProps {
  status: 'Approved';
}

const ApprovedStatusBadge: React.FC<ApprovedStatusBadgeProps> = ({ status }) => {
  return (
    <div className="bg-nimasa-green text-white font-medium py-1.5 px-5 rounded-full text-sm">
      {status}
    </div>
  );
};

export default ApprovedStatusBadge;
