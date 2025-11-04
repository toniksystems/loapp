import Layout from '../components/Layout';
import WelcomeBanner from '../components/dashboard/WelcomeBanner';
import LeaveBalance from '../components/dashboard/LeaveBalance';
import MyRequests from '../components/dashboard/MyRequests';
import TeamLeaveUpdates from '../components/dashboard/TeamLeaveUpdates';

const Dashboard = () => {
  return (
    <Layout>
      <WelcomeBanner />
      <div className="mt-6">
        <LeaveBalance />
      </div>
      <div className="mt-6 flex flex-col sm:flex-row gap-5">
        <button className="w-full bg-nimasa-blue text-white font-bold py-2.5 rounded-xl text-base shadow-lg hover:bg-blue-700 transition-colors">
          Apply for Leave
        </button>
        <button className="w-full bg-nimasa-blue text-white font-bold py-2.5 rounded-xl text-base shadow-lg hover:bg-blue-700 transition-colors">
          View Calendar
        </button>
      </div>
      <div className="mt-6 grid grid-cols-1 xl:grid-cols-2 gap-6">
        <MyRequests />
        <TeamLeaveUpdates />
      </div>
    </Layout>
  );
};

export default Dashboard;
