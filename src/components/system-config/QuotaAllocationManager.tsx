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
      <h2 className="text-xl font-semibold text-nimasa-dark-text mb-8">Configure Leave Quotas</h2>
      <div className="overflow-x-auto">
        <div className="min-w-[900px]">
          {/* Header */}
          <div className="grid grid-cols-12 gap-5 px-5 pb-5 text-base font-medium text-gray-500 uppercase">
            <div className="col-span-3">Role</div>
            <div className="col-span-2">Annual Quota</div>
            <div className="col-span-2">Sick Quota</div>
            <div className="col-span-2">Casual Quota</div>
            <div className="col-span-3 text-center">Action</div>
          </div>

          {/* Body */}
          <div className="divide-y divide-gray-100">
            {quotaData.map((quota) => (
              <div key={quota.id} className="grid grid-cols-12 gap-5 items-center py-4 px-5">
                <div className="col-span-3 font-medium text-base text-nimasa-dark-text">{quota.role}</div>
                <div className="col-span-2 font-medium text-base text-nimasa-dark-text">{quota.annualQuota}</div>
                <div className="col-span-2 font-medium text-base text-nimasa-dark-text">{quota.sickQuota}</div>
                <div className="col-span-2 font-medium text-base text-nimasa-dark-text">{quota.casualQuota}</div>
                <div className="col-span-3 flex items-center justify-center gap-6">
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
