import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '../components/Layout';
import CalendarTabs from '../components/calendar/CalendarTabs';
import MyCalendarView from '../components/calendar/MyCalendarView';
import TeamCalendarViewWrapper from '../components/calendar/TeamCalendarViewWrapper';

type TabType = 'my' | 'team';

interface CalendarPageProps {
  defaultTab: TabType;
}

const CalendarPage = ({ defaultTab }: CalendarPageProps) => {
  const [activeTab, setActiveTab] = useState<TabType>(defaultTab);
  const location = useLocation();

  useEffect(() => {
    // This effect ensures that if the user navigates via the sidebar,
    // the component updates to show the correct tab.
    if (location.pathname === '/calendar') {
      setActiveTab('my');
    } else if (location.pathname === '/team-calendar') {
      setActiveTab('team');
    }
  }, [location.pathname]);

  return (
    <Layout>
      <CalendarTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="mt-10">
        {activeTab === 'my' ? <MyCalendarView /> : <TeamCalendarViewWrapper />}
      </div>
    </Layout>
  );
};

export default CalendarPage;
