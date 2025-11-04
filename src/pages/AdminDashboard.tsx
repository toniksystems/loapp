import AdminLayout from '../components/admin/AdminLayout';
import StatCard from '../components/admin/StatCard';
import ApprovalFunnel from '../components/admin/ApprovalFunnel';
import StaffOnboarding from '../components/admin/StaffOnboarding';
import AuditLog from '../components/admin/AuditLog';
import { Users2, Building2, UserX, Plane } from 'lucide-react';

const AdminDashboard = () => {
  return (
    <AdminLayout>
      <h1 className="text-2xl md:text-3xl font-bold text-nimasa-dark-text mb-10">Administrator Dashboard</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
        <StatCard icon={<Users2 size={36} className="text-nimasa-dark-text" />} title="Total Employees" value="2,589" />
        <StatCard icon={<Building2 size={36} className="text-nimasa-dark-text" />} title="In Office" value="2,375" />
        <StatCard icon={<UserX size={36} className="text-nimasa-dark-text" />} title="Out of Office" value="146" />
        <StatCard icon={<Plane size={36} className="text-nimasa-dark-text" />} title="On Leave" value="68" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-10 items-start">
        <div className="lg:col-span-2">
            <ApprovalFunnel />
        </div>
        <div>
            <StaffOnboarding />
        </div>
      </div>

      <div className="mb-10">
        <AuditLog />
      </div>

    </AdminLayout>
  );
};

export default AdminDashboard;
