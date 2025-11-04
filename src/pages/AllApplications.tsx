import AdminLayout from '../components/admin/AdminLayout';
import AllApplicationsList from '../components/all-applications/AllApplicationsList';

const AllApplications = () => {
  return (
    <AdminLayout>
      <h1 className="text-2xl md:text-3xl font-bold text-nimasa-dark-text mb-10">All Leave Applications</h1>
      <AllApplicationsList />
    </AdminLayout>
  );
};

export default AllApplications;
