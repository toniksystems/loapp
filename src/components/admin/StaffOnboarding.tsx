import { Plus, Upload } from 'lucide-react';
import { Link } from 'react-router-dom';

const StaffOnboarding = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 h-full">
      <h3 className="text-base font-semibold text-nimasa-dark-text mb-1.5">Staff Onboarding</h3>
      <p className="text-xs text-gray-600 mb-3">
        Quickly manage staff data via bulk operations.
      </p>
      <div className="flex flex-col gap-2.5">
        <Link
          to="/add-new-staff"
          className="w-full bg-nimasa-blue text-white font-bold py-2 rounded-lg text-sm flex items-center justify-center gap-2 shadow-lg hover:bg-blue-700 transition-colors"
        >
          <Plus size={16} />
          <span>Add New Staff</span>
        </Link>
        <Link
          to="/bulk-upload"
          className="w-full bg-nimasa-green text-white font-bold py-2 rounded-lg text-sm flex items-center justify-center gap-2 shadow-lg hover:bg-green-700 transition-colors"
        >
          <Upload size={16} />
          <span>Bulk Upload Staff</span>
        </Link>
      </div>
    </div>
  );
};

export default StaffOnboarding;
