import AdminLayout from '../components/admin/AdminLayout';
import AddNewStaffForm from '../components/admin/AddNewStaffForm';

const AddNewStaff = () => {
  return (
    <AdminLayout>
      <h1 className="text-2xl md:text-3xl font-bold text-nimasa-dark-text">Add New Staff</h1>
      <AddNewStaffForm />
    </AdminLayout>
  );
};

export default AddNewStaff;
