import { Calendar, ChevronDown, Upload } from 'lucide-react';

const LeaveApplicationForm = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-5">
      <h2 className="text-lg font-medium text-nimasa-dark-text mb-6">Leave Application Form</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        <div>
          <label className="block text-base font-medium text-nimasa-dark-text mb-1.5">Type of Leave</label>
          <div className="relative">
            <select className="w-full appearance-none bg-white border border-gray-400 rounded-lg py-2.5 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-nimasa-blue">
              <option>Select Leave Type</option>
              <option>Annual Leave</option>
              <option>Casual Leave</option>
              <option>Sick Leave</option>
              <option>Maternity Leave</option>
              <option>Study Leave</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
          </div>
        </div>
        <div>
          <label className="block text-base font-medium text-nimasa-dark-text mb-1.5">&nbsp;</label>
          <div className="relative">
            <select className="w-full appearance-none bg-white border border-gray-400 rounded-lg py-2.5 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-nimasa-blue">
              <option>Out of Office</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        <div>
          <label className="block text-base font-medium text-nimasa-dark-text mb-1.5">Start Date *</label>
          <div className="relative">
            <input
              type="text"
              defaultValue="October 15th, 2025"
              className="w-full bg-white border border-gray-400 rounded-lg py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-nimasa-blue"
            />
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-600" />
          </div>
        </div>
        <div>
          <label className="block text-base font-medium text-nimasa-dark-text mb-1.5">End Date *</label>
          <div className="relative">
            <input
              type="text"
              defaultValue="October 24th, 2025"
              className="w-full bg-white border border-gray-400 rounded-lg py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-nimasa-blue"
            />
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-600" />
          </div>
        </div>
      </div>

      <div className="mb-5">
        <label className="block text-base font-medium text-nimasa-dark-text mb-1.5">Reason for Leave *</label>
        <textarea
          rows={3}
          defaultValue="Annual leave for rest and personal time."
          className="w-full bg-white border border-gray-400 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-nimasa-blue"
          maxLength={500}
        ></textarea>
        <p className="text-right text-xs text-gray-500 mt-1.5">80/500 Characters</p>
      </div>

      <div className="mb-5">
        <label className="block text-base font-medium text-nimasa-dark-text mb-1.5">Auto Reply Message</label>
        <textarea
          rows={4}
          defaultValue="I am currently on annual leave and out of the office from Wednesday, October 15th through Friday, October 24th. I will have limited access to email during this period and will not be able to respond until my return on Monday, October 27th. For urgent matters that require immediate attention, please contact my designated cover: Wale Adeyemo Email: wale.a@nimasa.gov.ng"
          className="w-full bg-white border border-gray-400 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-nimasa-blue"
           maxLength={500}
        ></textarea>
        <p className="text-right text-xs text-gray-500 mt-1.5">320/500 Characters</p>
      </div>
      
      <div className="border-2 border-dashed border-gray-400 rounded-lg p-6 flex flex-col items-center justify-center text-center mb-5 cursor-pointer hover:bg-gray-50 transition-colors">
        <Upload size={24} className="text-gray-500 mb-2" />
        <p className="text-base text-gray-700">Attach Supporting Documents (Optional)</p>
        <p className="text-sm text-gray-500">PDF, JPG, PNG (Max 10MB each)</p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
        <button className="w-full sm:w-auto bg-white border border-gray-800 text-gray-800 font-bold py-2.5 px-8 rounded-full text-lg shadow-md hover:bg-gray-100 transition-colors">
          Save as Draft
        </button>
        <button className="w-full sm:w-auto bg-nimasa-blue text-white font-bold py-2.5 px-10 rounded-full text-lg shadow-lg hover:bg-blue-700 transition-colors">
          Submit
        </button>
      </div>
    </div>
  );
};

export default LeaveApplicationForm;
