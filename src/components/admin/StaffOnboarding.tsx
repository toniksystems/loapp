import { Plus, Upload } from 'lucide-react';
import { Link } from 'react-router-dom';

const StaffOnboarding = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 h-full">
      <h3 className="text-xl font-semibold text-nimasa-dark-text mb-2.5">Staff Onboarding</h3>
      <p className="text-base text-gray-600 mb-5">
        Quickly manage staff data via bulk operations.
      </p>
      <div className="flex flex-col gap-4">
        <Link
          to="/add-new-staff"
          className="w-full bg-nimasa-blue text-white font-bold py-3 rounded-xl text-lg flex items-center justify-center gap-3 shadow-lg hover:bg-blue-700 transition-colors"
        >
          <Plus size={20} />
          <span>Add New Staff</span>
        </Link>
        <Link
          to="/bulk-upload"
          className="w-full bg-nimasa-green text-white font-bold py-3 rounded-xl text-lg flex items-center justify-center gap-3 shadow-lg hover:bg-green-700 transition-colors"
        >
          <Upload size={20} />
          <span>Bulk Upload Staff</span>
        </Link>
      </div>
    </div>
  );
};

export default StaffOnboarding;
