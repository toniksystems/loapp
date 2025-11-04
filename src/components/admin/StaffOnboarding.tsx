import { Plus, Upload } from 'lucide-react';
import { Link } from 'react-router-dom';

const StaffOnboarding = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-5 h-full">
      <h3 className="text-lg font-semibold text-nimasa-dark-text mb-2">Staff Onboarding</h3>
      <p className="text-sm text-gray-600 mb-4">
        Quickly manage staff data via bulk operations.
      </p>
      <div className="flex flex-col gap-3">
        <Link
          to="/add-new-staff"
          className="w-full bg-nimasa-blue text-white font-bold py-2.5 rounded-lg text-base flex items-center justify-center gap-2 shadow-lg hover:bg-blue-700 transition-colors"
        >
          <Plus size={18} />
          <span>Add New Staff</span>
        </Link>
        <Link
          to="/bulk-upload"
          className="w-full bg-nimasa-green text-white font-bold py-2.5 rounded-lg text-base flex items-center justify-center gap-2 shadow-lg hover:bg-green-700 transition-colors"
        >
          <Upload size={18} />
          <span>Bulk Upload Staff</span>
        </Link>
      </div>
    </div>
  );
};

export default StaffOnboarding;
