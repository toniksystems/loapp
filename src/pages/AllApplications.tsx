import AdminLayout from '../components/admin/AdminLayout';
import AllApplicationsList from '../components/all-applications/AllApplicationsList';

const AllApplications = () => {
  return (
    <AdminLayout>
      <h1 className="text-xl md:text-2xl font-bold text-nimasa-dark-text mb-6">All Leave Applications</h1>
      <AllApplicationsList />
    </AdminLayout>
  );
};

export default AllApplications;
