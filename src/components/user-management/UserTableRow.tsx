import React from 'react';
import { ManagedUser } from '../../types';
import { RotateCcw, XCircle } from 'lucide-react';

interface UserTableRowProps {
  user: ManagedUser;
}

const StatusIndicator: React.FC<{ status: 'Active' | 'Inactive' }> = ({ status }) => (
  <div className="flex items-center gap-2">
    <span className={`h-2.5 w-2.5 rounded-full ${status === 'Active' ? 'bg-nimasa-green' : 'bg-nimasa-gold'}`}></span>
    <span className="text-sm text-nimasa-dark-text">{status}</span>
  </div>
);

const UserTableRow: React.FC<UserTableRowProps> = ({ user }) => {
  return (
    <div className="grid grid-cols-12 gap-4 items-center py-3 px-4">
      <div className="col-span-1 flex items-center">
        <input type="checkbox" className="h-4 w-4" />
      </div>
      <div className="col-span-3 flex items-center gap-3">
        <img src={user.avatarUrl} alt={user.name} className="h-10 w-10 rounded-full" />
        <div>
          <p className="font-medium text-sm text-nimasa-dark-text">{user.name}</p>
          <p className="text-xs text-gray-600">{user.employeeId}</p>
        </div>
      </div>
      <div className="col-span-1 text-sm text-gray-700">{user.role}</div>
      <div className="col-span-2 text-sm text-gray-700">{user.department}</div>
      <div className="col-span-1">
        <StatusIndicator status={user.status} />
      </div>
      <div className="col-span-2 text-sm text-gray-700">{user.lastActive}</div>
      <div className="col-span-2 flex items-center gap-3">
        <button className="flex items-center gap-1.5 text-nimasa-blue text-xs font-medium hover:underline">
          <RotateCcw size={14} />
          Reset Password
        </button>
        <button className="flex items-center gap-1.5 text-nimasa-red text-xs font-medium hover:underline">
          <XCircle size={14} />
          Deactivate
        </button>
      </div>
    </div>
  );
};

export default UserTableRow;
