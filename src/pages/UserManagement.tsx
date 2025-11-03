import AdminLayout from '../components/admin/AdminLayout';
import UserStatCard from '../components/user-management/UserStatCard';
import UserFilters from '../components/user-management/UserFilters';
import UserTable from '../components/user-management/UserTable';
import { users } from '../data/userData';

const UserManagement = () => {
  return (
    <AdminLayout>
      <h1 className="text-lg md:text-xl font-bold text-nimasa-dark-text mb-6">User Management</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <UserStatCard title="Total User" value="2,589" />
        <UserStatCard title="Active" value="2,276" />
        <UserStatCard title="Manager" value="268" />
        <UserStatCard title="Admin/HR" value="45" />
      </div>

      <UserFilters />

      <div className="mt-6">
        <UserTable users={users} />
      </div>
    </AdminLayout>
  );
};

export default UserManagement;
