import { AlertCircle } from 'lucide-react';

const PolicyReminderCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="flex items-start gap-6 mb-6">
        <AlertCircle size={36} className="text-nimasa-dark-text flex-shrink-0 mt-1" />
        <div>
          <h3 className="text-2xl font-medium text-nimasa-dark-text">Leave Policy Reminder</h3>
          <p className="text-xl text-gray-600 mt-2.5">
            Remember to plan your annual leave in advance. Unused leave days may not carry over to next year.
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <button className="bg-nimasa-blue text-white font-bold py-4 px-14 rounded-full text-2xl shadow-lg hover:bg-blue-700 transition-colors">
          View Leave Policy
        </button>
      </div>
    </div>
  );
};

export default PolicyReminderCard;
