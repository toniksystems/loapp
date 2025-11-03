import AdminLayout from '../components/admin/AdminLayout';
import { Download } from 'lucide-react';

const BulkUpload = () => {
  return (
    <AdminLayout>
      <h1 className="text-lg md:text-xl font-bold text-nimasa-dark-text mb-6">Bulk Upload Staff</h1>
      <div className="bg-white rounded-2xl shadow-lg p-4 md:p-5">
        <h2 className="text-base font-medium text-nimasa-dark-text mb-2">Please follow these steps to upload staff data</h2>
        
        <div className="text-sm text-gray-700 space-y-1.5 mb-6 ml-4">
            <p>1. <span className="font-bold">Download</span> and fill in the Official Template below</p>
            <p>2. <span className="font-bold">Prepare</span> your data, ensuring all mandatory fields are complete</p>
            <p>3. <span className="font-bold">Upload</span> the file (.csv or .xlsx) and click Validate</p>
        </div>

        <div className="flex justify-center my-6">
          <button className="bg-nimasa-green text-white font-bold py-2 px-5 rounded-xl text-base flex items-center justify-center gap-2 shadow-lg hover:bg-green-700 transition-colors">
            <Download size={18} />
            <span>Download Official Template</span>
          </button>
        </div>

        <div className="border-2 border-dashed border-gray-300 rounded-xl bg-gray-50 p-8 flex flex-col items-center justify-center text-center mb-6">
          <p className="text-base font-medium text-nimasa-dark-text mb-2">Drag & Drop File Here</p>
          <p className="text-sm text-gray-500 mb-4">OR</p>
          <button className="bg-white border border-gray-500 text-gray-800 font-medium py-2 px-6 rounded-lg text-base shadow-sm hover:bg-gray-100 transition-colors">
            Browse Here
          </button>
        </div>

        <div className="flex justify-center">
          <button className="bg-nimasa-blue text-white font-bold py-2 px-10 rounded-xl text-base shadow-lg hover:bg-blue-700 transition-colors">
            Upload and Validate
          </button>
        </div>
      </div>
    </AdminLayout>
  );
};

export default BulkUpload;
