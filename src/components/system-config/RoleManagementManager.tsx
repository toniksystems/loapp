import { RoleConfig } from '../../types';

const roleData: RoleConfig[] = [
  {
    id: '1',
    role: 'Staff',
    leaveApprovalLevel: 'None',
    systemConfig: 'View Only',
    overrideCapability: 'No',
  },
  {
    id: '2',
    role: 'Head of Unit',
    leaveApprovalLevel: 'Level 1',
    systemConfig: 'View Only',
    overrideCapability: 'No',
  },
  {
    id: '3',
    role: 'HR/Admin',
    leaveApprovalLevel: 'Level 2',
    systemConfig: 'Full',
    overrideCapability: 'Yes',
  },
];

const RoleManagementManager = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-nimasa-dark-text mb-8">Define System Roles and Permission</h2>
      <div className="overflow-x-auto">
        <div className="min-w-[1000px]">
          {/* Header */}
          <div className="grid grid-cols-12 gap-5 px-5 pb-5 text-base font-medium text-gray-500 uppercase">
            <div className="col-span-2">Role</div>
            <div className="col-span-3">Leave Approval (Level)</div>
            <div className="col-span-2">System Config</div>
            <div className="col-span-3">Override Capability</div>
            <div className="col-span-2 text-center">Action</div>
          </div>

          {/* Body */}
          <div className="divide-y divide-gray-100">
            {roleData.map((role) => (
              <div key={role.id} className="grid grid-cols-12 gap-5 items-center py-5 px-5">
                <div className="col-span-2 font-medium text-lg text-nimasa-dark-text">{role.role}</div>
                <div className="col-span-3 font-medium text-lg text-nimasa-dark-text">{role.leaveApprovalLevel}</div>
                <div className="col-span-2 font-medium text-lg text-nimasa-dark-text">{role.systemConfig}</div>
                <div className="col-span-3 font-medium text-lg text-nimasa-dark-text">{role.overrideCapability}</div>
                <div className="col-span-2 flex items-center justify-center gap-6">
                  <button className="text-nimasa-blue font-medium text-lg hover:underline">Edit</button>
                  <button className="text-nimasa-red font-medium text-lg hover:underline">Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleManagementManager;
