import { ManagedUser } from '../../types';
import UserTableRow from './UserTableRow';
import UserPagination from './UserPagination';

interface UserTableProps {
  users: ManagedUser[];
}

const UserTable: React.FC<UserTableProps> = ({ users }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="overflow-x-auto">
        <div className="min-w-[1200px]">
          {/* Header */}
          <div className="grid grid-cols-12 gap-5 px-5 pb-5 text-base font-medium text-gray-500 uppercase">
            <div className="col-span-1 flex items-center">
              <input type="checkbox" className="h-5 w-5" />
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
