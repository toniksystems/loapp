import AdminLayout from '../components/admin/AdminLayout';
import { Download } from 'lucide-react';

const BulkUpload = () => {
  return (
    <AdminLayout>
      <h1 className="text-2xl md:text-3xl font-bold text-nimasa-dark-text mb-10">Bulk Upload Staff</h1>
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <h2 className="text-xl font-medium text-nimasa-dark-text mb-4">Please follow these steps to upload staff data</h2>
        
        <div className="text-lg text-gray-700 space-y-2.5 mb-10 ml-6">
            <p>1. <span className="font-bold">Download</span> and fill in the Official Template below</p>
            <p>2. <span className="font-bold">Prepare</span> your data, ensuring all mandatory fields are complete</p>
            <p>3. <span className="font-bold">Upload</span> the file (.csv or .xlsx) and click Validate</p>
        </div>

        <div className="flex justify-center my-10">
          <button className="bg-nimasa-green text-white font-bold py-3 px-8 rounded-xl text-xl flex items-center justify-center gap-3 shadow-lg hover:bg-green-700 transition-colors">
            <Download size={22} />
            <span>Download Official Template</span>
          </button>
        </div>

        <div className="border-2 border-dashed border-gray-300 rounded-xl bg-gray-50 p-12 flex flex-col items-center justify-center text-center mb-10">
          <p className="text-xl font-medium text-nimasa-dark-text mb-4">Drag & Drop File Here</p>
          <p className="text-lg text-gray-500 mb-6">OR</p>
          <button className="bg-white border border-gray-500 text-gray-800 font-medium py-3 px-10 rounded-lg text-xl shadow-sm hover:bg-gray-100 transition-colors">
            Browse Here
          </button>
        </div>

        <div className="flex justify-center">
          <button className="bg-nimasa-blue text-white font-bold py-3 px-14 rounded-xl text-xl shadow-lg hover:bg-blue-700 transition-colors">
            Upload and Validate
          </button>
        </div>
      </div>
    </AdminLayout>
  );
};

export default BulkUpload;
