import AdminLayout from '../components/admin/AdminLayout';
import StatCard from '../components/admin/StatCard';
import ApprovalFunnel from '../components/admin/ApprovalFunnel';
import StaffOnboarding from '../components/admin/StaffOnboarding';
import AuditLog from '../components/admin/AuditLog';
import { Users2, Building2, UserX, Plane } from 'lucide-react';

const AdminDashboard = () => {
  return (
    <AdminLayout>
      <h1 className="text-xl md:text-2xl font-bold text-nimasa-dark-text mb-6">Administrator Dashboard</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatCard icon={<Users2 size={28} className="text-nimasa-dark-text" />} title="Total Employees" value="2,589" />
        <StatCard icon={<Building2 size={28} className="text-nimasa-dark-text" />} title="In Office" value="2,375" />
        <StatCard icon={<UserX size={28} className="text-nimasa-dark-text" />} title="Out of Office" value="146" />
        <StatCard icon={<Plane size={28} className="text-nimasa-dark-text" />} title="On Leave" value="68" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6 items-start">
        <div className="lg:col-span-2">
            <ApprovalFunnel />
        </div>
        <div>
            <StaffOnboarding />
        </div>
      </div>

      <div className="mb-6">
        <AuditLog />
      </div>

    </AdminLayout>
  );
};

export default AdminDashboard;
