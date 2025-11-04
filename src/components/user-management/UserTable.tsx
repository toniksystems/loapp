import { ManagedUser } from '../../types';
import UserTableRow from './UserTableRow';
import UserPagination from './UserPagination';

interface UserTableProps {
  users: ManagedUser[];
}

const UserTable: React.FC<UserTableProps> = ({ users }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-5">
      <div className="overflow-x-auto">
        <div className="min-w-[1100px]">
          {/* Header */}
          <div className="grid grid-cols-12 gap-4 px-4 pb-4 text-sm font-medium text-gray-500 uppercase">
            <div className="col-span-1 flex items-center">
              <input type="checkbox" className="h-4 w-4" />
            </div>
            <div className="col-span-3">Employee Name and ID</div>
            <div className="col-span-1">Role</div>
            <div className="col-span-2">Department</div>
            <div className="col-span-1">Status</div>
            <div className="col-span-2">Last Active</div>
            <div className="col-span-2">Action</div>
          </div>

          {/* Body */}
          <div className="divide-y divide-gray-100">
            {users.map((user) => (
              <UserTableRow key={user.id} user={user} />
            ))}
          </div>
        </div>
      </div>
      <UserPagination />
    </div>
  );
};

export default UserTable;
