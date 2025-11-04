import { RejectedRequest } from '../../types';
import RejectedStatusBadge from './RejectedStatusBadge';

interface RejectedLeaveListItemProps {
  request: RejectedRequest;
}

const RejectedLeaveListItem = ({ request }: RejectedLeaveListItemProps) => {
  const { employee, leave, rejection, rejectedDate, status } = request;

  return (
    <div className="grid grid-cols-12 gap-4 items-center py-2.5 px-3">
      {/* Employee Name and ID */}
      <div className="col-span-3 flex items-center gap-2.5">
        <img src={employee.avatarUrl} alt={employee.name} className="h-10 w-10 rounded-full" />
        <div>
          <p className="font-medium text-sm text-nimasa-dark-text">{employee.name}</p>
          <p className="text-xs text-gray-600">{employee.employeeId}</p>
        </div>
      </div>

      {/* Leave Type and Duration */}
      <div className="col-span-2">
        <div className="flex items-center gap-2">
          <span className={`h-2 w-2 rounded-full ${leave.color}`}></span>
          <p className="font-medium text-sm text-nimasa-dark-text">{leave.type}</p>
        </div>
        <p className="text-xs text-gray-600 mt-0.5 ml-4">{leave.duration}</p>
      </div>

      {/* Rejection Reason */}
      <div className="col-span-3">
        <p className="font-medium text-xs text-nimasa-dark-text">{rejection.reason}</p>
        <p className="text-[11px] text-gray-500">{rejection.detail}</p>
      </div>

      {/* Rejected Date */}
      <div className="col-span-2">
        <p className="font-medium text-xs text-nimasa-dark-text">{rejectedDate}</p>
      </div>

      {/* Status */}
      <div className="col-span-2 flex items-center justify-center">
        <RejectedStatusBadge status={status} />
      </div>
    </div>
  );
};

export default RejectedLeaveListItem;
