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
      <h2 className="text-2xl md:text-3xl font-medium text-nimasa-dark-text mb-8">Define System Roles and Permission</h2>
      <div className="overflow-x-auto">
        <div className="min-w-[1000px]">
          {/* Header */}
          <div className="grid grid-cols-12 gap-4 px-4 pb-4 text-xl font-medium text-nimasa-dark-text">
            <div className="col-span-2">ROLE</div>
            <div className="col-span-3">LEAVE APPROVAL (LEVEL)</div>
            <div className="col-span-2">SYSTEM CONFIG</div>
            <div className="col-span-3">OVERRIDE CAPABILITY</div>
            <div className="col-span-2 text-center">ACTION</div>
          </div>

          {/* Body */}
          <div className="divide-y divide-gray-100">
            {roleData.map((role) => (
              <div key={role.id} className="grid grid-cols-12 gap-4 items-center py-4 px-4">
                <div className="col-span-2 font-medium text-base text-nimasa-dark-text">{role.role}</div>
                <div className="col-span-3 font-medium text-base text-nimasa-dark-text">{role.leaveApprovalLevel}</div>
                <div className="col-span-2 font-medium text-base text-nimasa-dark-text">{role.systemConfig}</div>
                <div className="col-span-3 font-medium text-base text-nimasa-dark-text">{role.overrideCapability}</div>
                <div className="col-span-2 flex items-center justify-center gap-4">
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

export default RoleManagementManager;
