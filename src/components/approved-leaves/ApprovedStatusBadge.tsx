interface ApprovedStatusBadgeProps {
  status: 'Approved';
}

const ApprovedStatusBadge: React.FC<ApprovedStatusBadgeProps> = ({ status }) => {
  return (
    <div className="bg-nimasa-green text-white font-medium py-2 px-6 rounded-full text-base">
      {status}
    </div>
  );
};

export default ApprovedStatusBadge;
