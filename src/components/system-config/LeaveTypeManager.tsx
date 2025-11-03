import { Plus } from 'lucide-react';
import LeaveTypeTable from './LeaveTypeTable';

const LeaveTypeManager = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl md:text-3xl font-medium text-nimasa-dark-text">Manage Available Leave Types</h2>
        <button className="bg-nimasa-blue text-white font-bold py-3 px-6 rounded-2xl text-lg flex items-center justify-center gap-2 shadow-lg hover:bg-blue-700 transition-colors">
          <Plus size={24} />
          <span>Add New Leave Type</span>
        </button>
      </div>
      <LeaveTypeTable />
    </div>
  );
};

export default LeaveTypeManager;
