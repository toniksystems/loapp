import { ManagedUser } from '../../types';
import UserTableRow from './UserTableRow';
import UserPagination from './UserPagination';

interface UserTableProps {
  users: ManagedUser[];
}

const UserTable: React.FC<UserTableProps> = ({ users }) => {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-8">
      <div className="overflow-x-auto">
        <div className="min-w-[1200px]">
          {/* Header */}
          <div className="grid grid-cols-12 gap-4 px-4 pb-4 text-lg font-medium text-nimasa-dark-text">
            <div className="col-span-1 flex items-center">
              <input type="checkbox" className="h-5 w-5" />
            </div>
            <div className="col-span-3">EMPLOYEE NAME AND ID</div>
            <div className="col-span-1">ROLE</div>
            <div className="col-span-2">DEPARTMENT</div>
            <div className="col-span-1">STATUS</div>
            <div className="col-span-2">LAST ACTIVE</div>
            <div className="col-span-2">ACTION</div>
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
