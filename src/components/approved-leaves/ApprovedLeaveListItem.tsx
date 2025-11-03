import { ApprovedRequest } from '../../types';
import ApprovedStatusBadge from './ApprovedStatusBadge';

interface ApprovedLeaveListItemProps {
  request: ApprovedRequest;
}

const ApprovedLeaveListItem = ({ request }: ApprovedLeaveListItemProps) => {
  const { employee, leave, approver, status } = request;

  return (
    <div className="grid grid-cols-12 gap-4 items-center py-3 px-4">
      {/* Employee Name and ID */}
      <div className="col-span-3 flex items-center gap-3">
        <img src={employee.avatarUrl} alt={employee.name} className="h-12 w-12 rounded-full" />
        <div>
          <p className="font-medium text-base text-nimasa-dark-text">{employee.name}</p>
          <p className="text-sm text-gray-600">{employee.employeeId}</p>
        </div>
      </div>

      {/* Leave Type */}
      <div className="col-span-2 flex items-center gap-2">
        <span className={`h-2.5 w-2.5 rounded-full ${leave.color}`}></span>
        <p className="font-medium text-base text-nimasa-dark-text">{leave.type}</p>
      </div>

      {/* Duration */}
      <div className="col-span-2">
        <p className="font-medium text-sm text-nimasa-dark-text">{leave.duration}</p>
      </div>

      {/* Approved By/Date */}
      <div className="col-span-3">
        <p className="font-medium text-sm text-nimasa-dark-text">{approver.name}</p>
        <p className="text-sm text-gray-600">{approver.date}</p>
      </div>

      {/* Status */}
      <div className="col-span-2 flex items-center justify-center">
        <ApprovedStatusBadge status={status} />
      </div>
    </div>
  );
};

export default ApprovedLeaveListItem;
