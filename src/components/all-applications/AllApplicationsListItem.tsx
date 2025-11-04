import React from 'react';
import { FullApplication } from '../../types';
import ApplicationStatusBadge from './ApplicationStatusBadge';

interface AllApplicationsListItemProps {
  application: FullApplication;
}

const AllApplicationsListItem: React.FC<AllApplicationsListItemProps> = ({ application }) => {
  const { employee, leaveType, dates, hodStatus, hrStatus } = application;

  return (
    <div className="grid grid-cols-12 gap-5 items-center py-3 px-5">
      <div className="col-span-1 flex items-center">
        <input type="checkbox" className="h-5 w-5 rounded border-gray-400" />
      </div>
      <div className="col-span-3 flex items-center gap-5">
        <img src={employee.avatarUrl} alt={employee.name} className="h-12 w-12 rounded-full" />
        <div>
          <p className="font-medium text-lg text-nimasa-dark-text">{employee.name}</p>
          <p className="text-base text-gray-600">{employee.employeeId}</p>
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
