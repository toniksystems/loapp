import { Plus, Upload } from 'lucide-react';
import { Link } from 'react-router-dom';

const StaffOnboarding = () => {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-8 h-full">
      <h3 className="text-3xl font-medium text-nimasa-dark-text mb-4">Staff Onboarding and Imports</h3>
      <p className="text-base text-gray-600 mb-8">
        Quickly manage large staff data via bulk operations.
      </p>
      <div className="flex flex-col gap-4">
        <Link
          to="/add-new-staff"
          className="w-full bg-nimasa-blue text-white font-bold py-4 rounded-2xl text-lg flex items-center justify-center gap-2 shadow-lg hover:bg-blue-700 transition-colors"
        >
          <Plus size={24} />
          <span>Add New Staff</span>
        </Link>
        <Link
          to="/bulk-upload"
          className="w-full bg-nimasa-green text-white font-bold py-4 rounded-2xl text-lg flex items-center justify-center gap-2 shadow-lg hover:bg-green-700 transition-colors"
        >
          <Upload size={24} />
          <span>Bulk Upload Staff</span>
        </Link>
      </div>
    </div>
  );
};

export default StaffOnboarding;
