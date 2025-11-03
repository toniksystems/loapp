import React from 'react';
import { FullApplication } from '../../types';
import ApplicationStatusBadge from './ApplicationStatusBadge';

interface AllApplicationsListItemProps {
  application: FullApplication;
}

const AllApplicationsListItem: React.FC<AllApplicationsListItemProps> = ({ application }) => {
  const { employee, leaveType, dates, hodStatus, hrStatus } = application;

  return (
    <div className="grid grid-cols-12 gap-4 items-center py-4 px-4">
      <div className="col-span-1 flex items-center">
        <input type="checkbox" className="h-5 w-5 rounded border-gray-400" />
      </div>
      <div className="col-span-3 flex items-center gap-3">
        <img src={employee.avatarUrl} alt={employee.name} className="h-14 w-14 rounded-full" />
        <div>
          <p className="font-medium text-base text-nimasa-dark-text">{employee.name}</p>
          <p className="text-sm text-gray-600">{employee.employeeId}</p>
        </div>
      </div>
      <div className="col-span-2 text-base text-gray-700">{leaveType}</div>
      <div className="col-span-2 text-base text-gray-700">{dates}</div>
      <div className="col-span-2">
        <ApplicationStatusBadge status={hodStatus} />
      </div>
      <div className="col-span-2">
        <ApplicationStatusBadge status={hrStatus} />
      </div>
    </div>
  );
};

export default AllApplicationsListItem;
