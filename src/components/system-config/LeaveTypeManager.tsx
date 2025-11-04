import { Plus } from 'lucide-react';
import LeaveTypeTable from './LeaveTypeTable';

const LeaveTypeManager = () => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
        <h2 className="text-lg font-semibold text-nimasa-dark-text">Manage Available Leave Types</h2>
        <button className="bg-nimasa-blue text-white font-bold py-2 px-4 rounded-lg text-sm flex items-center justify-center gap-2 shadow-lg hover:bg-blue-700 transition-colors">
          <Plus size={18} />
          <span>Add New Leave Type</span>
        </button>
      </div>
      <LeaveTypeTable />
    </div>
  );
};

export default LeaveTypeManager;
