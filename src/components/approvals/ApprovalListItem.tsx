import { LeaveApprovalRequest } from '../../types';
import RiskBadge from './RiskBadge';

interface ApprovalListItemProps {
  request: LeaveApprovalRequest;
}

const ApprovalListItem = ({ request }: ApprovalListItemProps) => {
  const { employee, leave, impact } = request;

  return (
    <div className="grid grid-cols-12 gap-4 items-center py-4 px-4">
      {/* Employee Name */}
      <div className="col-span-3 flex items-center gap-3">
        <img src={employee.avatarUrl} alt={employee.name} className="h-14 w-14 rounded-full" />
        <div>
          <p className="font-medium text-lg text-nimasa-dark-text">{employee.name}</p>
          <p className="text-base text-gray-600">{employee.title}</p>
        </div>
      </div>

      {/* Leave Type */}
      <div className="col-span-2 flex items-center gap-2">
        <span className={`h-3 w-3 rounded-full ${leave.color}`}></span>
        <p className="font-medium text-lg text-nimasa-dark-text">{leave.type}</p>
      </div>

      {/* Duration */}
      <div className="col-span-2">
        <p className="font-medium text-base text-nimasa-dark-text">{leave.duration}</p>
        <p className="text-base text-gray-600">{leave.days}</p>
      </div>

      {/* Team Impact */}
      <div className="col-span-3 flex flex-col gap-1">
        <RiskBadge risk={impact.risk} />
        <p className="text-sm text-gray-600">{impact.description}</p>
      </div>

      {/* Actions */}
      <div className="col-span-2 flex items-center justify-center gap-2">
        <button className="bg-nimasa-green text-white font-bold py-3 px-6 rounded-full text-base hover:bg-green-700 transition-colors">
          Approve
        </button>
        <button className="bg-nimasa-red text-white font-bold py-3 px-6 rounded-full text-base hover:bg-red-700 transition-colors">
          Reject
        </button>
      </div>
    </div>
  );
};

export default ApprovalListItem;
