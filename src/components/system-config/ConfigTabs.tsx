import React from 'react';

type ConfigTab = 'leave-type' | 'quota-allocation' | 'role-management';

const tabs: { key: ConfigTab; name: string }[] = [
  { key: 'leave-type', name: 'Leave Type' },
  { key: 'quota-allocation', name: 'Quota Allocation' },
  { key: 'role-management', name: 'Role Management' },
];

interface ConfigTabsProps {
  activeTab: ConfigTab;
  setActiveTab: (tab: ConfigTab) => void;
}

const ConfigTabs: React.FC<ConfigTabsProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex items-center border-b border-gray-200">
      {tabs.map(tab => (
        <button
          key={tab.key}
          onClick={() => setActiveTab(tab.key)}
          className={`px-4 sm:px-5 py-2 text-sm sm:text-base font-medium transition-colors duration-200 relative ${
            activeTab === tab.key
              ? 'text-nimasa-blue'
              : 'text-gray-600 hover:text-nimasa-blue'
          }`}
        >
          {tab.name}
          {activeTab === tab.key && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-nimasa-blue rounded-t-full"></span>
          )}
        </button>
      ))}
    </div>
  );
};

export default ConfigTabs;
