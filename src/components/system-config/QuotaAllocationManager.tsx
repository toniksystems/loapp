import { QuotaConfig } from '../../types';

const quotaData: QuotaConfig[] = [
  {
    id: '1',
    role: 'Executive Management',
    annualQuota: '45 Days',
    sickQuota: '21 Days',
    casualQuota: '10 Days',
  },
  {
    id: '2',
    role: 'Senior Staff',
    annualQuota: '30 Days',
    sickQuota: '14 Days',
    casualQuota: '7 Days',
  },
  {
    id: '3',
    role: 'Junior Staff',
    annualQuota: '21 Days',
    sickQuota: '10 Days',
    casualQuota: '5 Days',
  },
];

const QuotaAllocationManager = () => {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-medium text-nimasa-dark-text mb-8">Configure Leave Quotas</h2>
      <div className="overflow-x-auto">
        <div className="min-w-[1000px]">
          {/* Header */}
          <div className="grid grid-cols-12 gap-4 px-4 pb-4 text-xl font-medium text-nimasa-dark-text">
            <div className="col-span-3">ROLE</div>
            <div className="col-span-2">ANNUAL QUOTA</div>
            <div className="col-span-2">SICK QUOTA</div>
            <div className="col-span-2">CASUAL QUOTA</div>
            <div className="col-span-3 text-center">ACTION</div>
          </div>

          {/* Body */}
          <div className="divide-y divide-gray-100">
            {quotaData.map((quota) => (
              <div key={quota.id} className="grid grid-cols-12 gap-4 items-center py-4 px-4">
                <div className="col-span-3 font-medium text-base text-nimasa-dark-text">{quota.role}</div>
                <div className="col-span-2 font-medium text-base text-nimasa-dark-text">{quota.annualQuota}</div>
                <div className="col-span-2 font-medium text-base text-nimasa-dark-text">{quota.sickQuota}</div>
                <div className="col-span-2 font-medium text-base text-nimasa-dark-text">{quota.casualQuota}</div>
                <div className="col-span-3 flex items-center justify-center gap-4">
                  <button className="text-nimasa-blue font-medium text-base hover:underline">Edit</button>
                  <button className="text-nimasa-red font-medium text-base hover:underline">Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuotaAllocationManager;
