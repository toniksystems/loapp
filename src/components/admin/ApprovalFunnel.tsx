const funnelData = [
  { label: 'Submitted by Staff', value: '520' },
  { label: 'Pending Manager Approval', value: '180' },
  { label: 'Pending HR Approval', value: '87' },
  { label: 'Approved/Completed', value: '267' },
];

const ApprovalFunnel = () => {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-8 h-full">
      <h3 className="text-3xl font-medium text-nimasa-dark-text mb-8">Approval Funnel (Last 7 Days)</h3>
      <div className="space-y-6">
        {funnelData.map((item, index) => (
          <div key={index} className="flex justify-between items-center pb-2 border-b border-gray-100 last:border-b-0">
            <span className="text-lg text-nimasa-dark-text">{item.label}</span>
            <span className="text-xl font-bold text-nimasa-dark-text">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApprovalFunnel;
