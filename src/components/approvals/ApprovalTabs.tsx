import React from 'react';

const tabs = ['Pending', 'Approved', 'Rejected', 'All Request'];

interface ApprovalTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const ApprovalTabs: React.FC<ApprovalTabsProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex items-center border-b border-gray-200">
      {tabs.map(tab => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-5 sm:px-6 py-2.5 text-base sm:text-lg font-medium transition-colors duration-200 relative ${
            activeTab === tab
              ? 'text-nimasa-blue'
              : 'text-gray-600 hover:text-nimasa-blue'
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
