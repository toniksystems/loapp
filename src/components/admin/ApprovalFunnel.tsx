const funnelData = [
  { label: 'Submitted by Staff', value: '520' },
  { label: 'Pending Manager Approval', value: '180' },
  { label: 'Pending HR Approval', value: '87' },
  { label: 'Approved/Completed', value: '267' },
];

const ApprovalFunnel = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-5 h-full">
      <h3 className="text-lg font-semibold text-nimasa-dark-text mb-4">Approval Funnel (Last 7 Days)</h3>
      <div className="space-y-3">
        {funnelData.map((item, index) => (
          <div key={index} className="flex justify-between items-center pb-3 border-b border-gray-100 last:border-b-0">
            <span className="text-base text-nimasa-dark-text">{item.label}</span>
            <span className="text-lg font-bold text-nimasa-dark-text">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApprovalFunnel;
