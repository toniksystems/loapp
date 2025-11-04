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
          className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium transition-colors duration-200 relative ${
            activeTab === tab
              ? 'text-nimasa-blue'
              : 'text-gray-600 hover:text-nimasa-blue'
          }`}
        >
          {tab}
          {activeTab === tab && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-nimasa-blue rounded-t-full"></span>
          )}
        </button>
      ))}
    </div>
  );
};

export default ApprovalTabs;
