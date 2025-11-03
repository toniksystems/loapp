import { LeaveTypeConfig } from '../../types';

const leaveTypes: LeaveTypeConfig[] = [
  {
    id: '1',
    name: 'Annual Leave',
    defaultDays: '21 Days',
    policyRule: 'Eligible after 6 months of continuous service',
  },
  {
    id: '2',
    name: 'Casual Leave',
    defaultDays: '5 Days',
    policyRule: 'Cannot be carried over and is forfeited if unused in a calendar year',
  },
  {
    id: '3',
    name: 'Maternity Leave',
    defaultDays: '120 Days',
    policyRule: 'Employees must have had 6 months of continuous service',
  },
  {
    id: '4',
    name: 'Paternity Leave',
    defaultDays: '14 Days',
    policyRule: 'Must be taken within the first 3 weeks of childbirth',
  },
  {
    id: '5',
    name: 'Sick Leave',
    defaultDays: '12 Days',
    policyRule: 'The company reserves the right to request a medical examination by a company-appointed doctor.',
  },
];

const LeaveTypeTable = () => {
  return (
    <div className="overflow-x-auto">
      <div className="min-w-[1000px]">
        {/* Header */}
        <div className="grid grid-cols-12 gap-4 px-4 pb-4 text-xl font-medium text-nimasa-dark-text">
          <div className="col-span-2">TYPE NAME</div>
          <div className="col-span-2">DEFAULT DAYS</div>
          <div className="col-span-6">POLICY RULE</div>
          <div className="col-span-2 text-center">ACTION</div>
        </div>

        {/* Body */}
        <div className="divide-y divide-gray-100">
          {leaveTypes.map((leaveType) => (
            <div key={leaveType.id} className="grid grid-cols-12 gap-4 items-center py-4 px-4">
              <div className="col-span-2 font-medium text-base text-nimasa-dark-text">{leaveType.name}</div>
              <div className="col-span-2 font-medium text-base text-nimasa-dark-text">{leaveType.defaultDays}</div>
              <div className="col-span-6 text-base text-gray-600">{leaveType.policyRule}</div>
              <div className="col-span-2 flex items-center justify-center gap-4">
                <button className="text-nimasa-blue font-medium text-base hover:underline">Edit</button>
                <button className="text-nimasa-red font-medium text-base hover:underline">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeaveTypeTable;
