import AdminLayout from '../components/admin/AdminLayout';
import { Download } from 'lucide-react';

const BulkUpload = () => {
  return (
    <AdminLayout>
      <h1 className="text-3xl md:text-5xl font-bold text-nimasa-dark-text mb-8">Bulk Upload Staff</h1>
      <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
        <h2 className="text-2xl font-medium text-nimasa-dark-text mb-4">Please follow these steps to upload staff data</h2>
        
        <div className="text-lg text-gray-700 space-y-2 mb-8 ml-6">
            <p>1. <span className="font-bold">Download</span> and fill in the Official Template below</p>
            <p>2. <span className="font-bold">Prepare</span> your data, ensuring all mandatory fields are complete</p>
            <p>3. <span className="font-bold">Upload</span> the file (.csv or .xlsx) and click Validate</p>
        </div>

        <div className="flex justify-center my-12">
          <button className="bg-nimasa-green text-white font-bold py-4 px-8 rounded-2xl text-lg flex items-center justify-center gap-3 shadow-lg hover:bg-green-700 transition-colors">
            <Download size={24} />
            <span>Download Official Template</span>
          </button>
        </div>

        <div className="border-2 border-dashed border-gray-300 rounded-2xl bg-gray-50 p-16 flex flex-col items-center justify-center text-center mb-12">
          <p className="text-2xl font-medium text-nimasa-dark-text mb-2">Drag & Drop File Here</p>
          <p className="text-lg text-gray-500 mb-4">OR</p>
          <button className="bg-white border border-gray-500 text-gray-800 font-medium py-2 px-8 rounded-lg text-lg shadow-sm hover:bg-gray-100 transition-colors">
            Browse Here
          </button>
        </div>

        <div className="flex justify-center">
          <button className="bg-nimasa-blue text-white font-bold py-4 px-16 rounded-2xl text-lg shadow-lg hover:bg-blue-700 transition-colors">
            Upload and Validate
          </button>
        </div>
      </div>
    </AdminLayout>
  );
};

export default BulkUpload;
