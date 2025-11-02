import { AlertCircle } from 'lucide-react';

const PolicyReminderCard = () => {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">
      <div className="flex items-start gap-4 mb-4">
        <AlertCircle size={40} className="text-nimasa-dark-text flex-shrink-0 mt-1" />
        <div>
          <h3 className="text-2xl font-medium text-nimasa-dark-text">Leave Policy Reminder</h3>
          <p className="text-base text-gray-600 mt-2">
            Remember to plan your annual leave in advance. Unused leave days may not carry over to next year.
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <button className="bg-nimasa-blue text-white font-bold py-4 px-12 rounded-full text-lg shadow-lg hover:bg-blue-700 transition-colors">
          View Leave Policy
        </button>
      </div>
    </div>
  );
};

export default PolicyReminderCard;
