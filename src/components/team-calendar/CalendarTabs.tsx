import { NavLink } from 'react-router-dom';

const CalendarTabs = () => {
  const tabs = [
    { name: 'Team Calendar', path: '/team-calendar' },
    { name: 'My Calendar', path: '/calendar' },
  ];

  return (
    <div className="flex items-center border-b border-gray-200">
      {tabs.map(tab => (
        <NavLink
          key={tab.name}
          to={tab.path}
          end
          className={({ isActive }) =>
            `px-4 sm:px-6 py-3 text-lg sm:text-xl font-medium transition-colors duration-200 relative ${
              isActive
                ? 'text-nimasa-blue'
                : 'text-gray-500 hover:text-nimasa-blue'
            }`
          }
        >
          {({ isActive }) => (
            <>
              {tab.name}
              {isActive && (
                <span className="absolute bottom-0 left-0 right-0 h-1 bg-nimasa-blue rounded-t-full"></span>
              )}
            </>
          )}
        </NavLink>
      ))}
    </div>
  );
};

export default CalendarTabs;
