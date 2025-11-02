import { useState } from 'react';

const tabs = ['Pending', 'Approved', 'Rejected', 'All Request'];

interface ApprovalTabsProps {
  initialTab?: string;
}

const ApprovalTabs = ({ initialTab = 'Pending' }: ApprovalTabsProps) => {
  const [activeTab, setActiveTab] = useState(initialTab);

  return (
    <div className="flex items-center border-b border-gray-200">
      {tabs.map(tab => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-4 sm:px-6 py-3 text-lg sm:text-xl font-medium transition-colors duration-200 relative ${
            activeTab === tab
              ? 'text-nimasa-blue'
              : 'text-gray-500 hover:text-nimasa-blue'
          }`}
        >
          {tab}
          {activeTab === tab && (
            <span className="absolute bottom-0 left-0 right-0 h-1 bg-nimasa-blue rounded-t-full"></span>
          )}
        </button>
      ))}
    </div>
  );
};

export default ApprovalTabs;
