import React from 'react';

const tabs = [
  { name: 'My Calendar', key: 'my' },
  { name: 'Team Calendar', key: 'team' },
];

interface CalendarTabsProps {
  activeTab: 'my' | 'team';
  setActiveTab: (tab: 'my' | 'team') => void;
}

const CalendarTabs: React.FC<CalendarTabsProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex items-center border-b border-gray-200">
      {tabs.map(tab => (
        <button
          key={tab.key}
          onClick={() => setActiveTab(tab.key as 'my' | 'team')}
          className={`px-6 sm:px-8 py-3 text-lg sm:text-xl font-medium transition-colors duration-200 relative ${
            activeTab === tab.key
              ? 'text-nimasa-blue'
              : 'text-gray-600 hover:text-nimasa-blue'
          }`}
        >
          {tab.name}
          {activeTab === tab.key && (
            <span className="absolute bottom-0 left-0 right-0 h-1.5 bg-nimasa-blue rounded-t-full"></span>
          )}
        </button>
      ))}
    </div>
  );
};

export default CalendarTabs;
