import { AllRequest } from '../../types';
import AllStatusBadge from './AllStatusBadge';

interface AllRequestsListItemProps {
  request: AllRequest;
}

const AllRequestsListItem = ({ request }: AllRequestsListItemProps) => {
  const { employee, leave, status, statusDetail, requested, actioned } = request;

  return (
    <div className="grid grid-cols-12 gap-4 items-center py-4 px-4">
      {/* Employee Name and ID */}
      <div className="col-span-3 flex items-center gap-3">
        <img src={employee.avatarUrl} alt={employee.name} className="h-14 w-14 rounded-full" />
        <div>
          <p className="font-medium text-lg text-nimasa-dark-text">{employee.name}</p>
          <p className="text-base text-gray-600">{employee.employeeId}</p>
        </div>
      </div>

      {/* Leave Type and Duration */}
      <div className="col-span-2">
        <div className="flex items-center gap-2">
          <span className={`h-3 w-3 rounded-full ${leave.color}`}></span>
          <p className="font-medium text-lg text-nimasa-dark-text">{leave.type}</p>
        </div>
        <p className="text-base text-gray-600 mt-1 ml-5">{leave.duration}</p>
      </div>

      {/* Status and Details */}
      <div className="col-span-3">
        <AllStatusBadge status={status} />
        <p className="text-sm text-gray-500 mt-1">{statusDetail}</p>
      </div>

      {/* Requested Date/Days */}
      <div className="col-span-2">
        <p className="font-medium text-base text-nimasa-dark-text">{requested.date}</p>
        <p className="text-base text-gray-600">{requested.days}</p>
      </div>

      {/* Actioned By/Date */}
      <div className="col-span-2">
        <p className="font-medium text-base text-nimasa-dark-text">{actioned.date}</p>
        <p className="text-base text-gray-600">{actioned.by}</p>
      </div>
    </div>
  );
};

export default AllRequestsListItem;
