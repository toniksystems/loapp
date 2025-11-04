import { AlertCircle } from 'lucide-react';

const PolicyReminderCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-5">
      <div className="flex items-start gap-4 mb-4">
        <AlertCircle size={28} className="text-nimasa-dark-text flex-shrink-0 mt-0.5" />
        <div>
          <h3 className="text-lg font-medium text-nimasa-dark-text">Leave Policy Reminder</h3>
          <p className="text-base text-gray-600 mt-1.5">
            Remember to plan your annual leave in advance. Unused leave days may not carry over to next year.
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <button className="bg-nimasa-blue text-white font-bold py-2.5 px-10 rounded-full text-lg shadow-lg hover:bg-blue-700 transition-colors">
          View Leave Policy
        </button>
      </div>
    </div>
  );
};

export default PolicyReminderCard;
