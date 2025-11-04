import { LeaveApprovalRequest } from '../../types';
import RiskBadge from './RiskBadge';

interface ApprovalListItemProps {
  request: LeaveApprovalRequest;
}

const ApprovalListItem = ({ request }: ApprovalListItemProps) => {
  const { employee, leave, impact } = request;

  return (
    <div className="grid grid-cols-12 gap-3 items-center py-2 px-3">
      {/* Employee Name */}
      <div className="col-span-3 flex items-center gap-2">
        <img src={employee.avatarUrl} alt={employee.name} className="h-8 w-8 rounded-full" />
        <div>
          <p className="font-medium text-xs text-nimasa-dark-text">{employee.name}</p>
          <p className="text-[11px] text-gray-600">{employee.title}</p>
        </div>
      </div>

      {/* Leave Type */}
      <div className="col-span-2 flex items-center gap-1.5">
        <span className={`h-1.5 w-1.5 rounded-full ${leave.color}`}></span>
        <p className="font-medium text-xs text-nimasa-dark-text">{leave.type}</p>
      </div>

      {/* Duration */}
      <div className="col-span-2">
        <p className="font-medium text-[11px] text-nimasa-dark-text">{leave.duration}</p>
        <p className="text-[11px] text-gray-600">{leave.days}</p>
      </div>

      {/* Team Impact */}
      <div className="col-span-3 flex flex-col gap-0.5">
        <RiskBadge risk={impact.risk} />
        <p className="text-[11px] text-gray-600">{impact.description}</p>
      </div>

      {/* Actions */}
      <div className="col-span-2 flex items-center justify-center gap-1.5">
        <button className="bg-nimasa-green text-white font-bold py-0.5 px-2 rounded-full text-[10px] hover:bg-green-700 transition-colors">
          Approve
        </button>
        <button className="bg-nimasa-red text-white font-bold py-0.5 px-2 rounded-full text-[10px] hover:bg-red-700 transition-colors">
          Reject
        </button>
      </div>
    </div>
  );
};

export default ApprovalListItem;
