import { AlertCircle } from 'lucide-react';

const PolicyReminderCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-4">
      <div className="flex items-start gap-3 mb-3">
        <AlertCircle size={24} className="text-nimasa-dark-text flex-shrink-0 mt-0.5" />
        <div>
          <h3 className="text-base font-medium text-nimasa-dark-text">Leave Policy Reminder</h3>
          <p className="text-sm text-gray-600 mt-1">
            Remember to plan your annual leave in advance. Unused leave days may not carry over to next year.
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button className="bg-nimasa-blue text-white font-bold py-2 px-8 rounded-full text-base shadow-lg hover:bg-blue-700 transition-colors">
          View Leave Policy
        </button>
      </div>
    </div>
  );
};

export default PolicyReminderCard;
