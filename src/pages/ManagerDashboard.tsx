import Layout from '../components/Layout';
import ManagerWelcome from '../components/manager/ManagerWelcome';
import TeamLeaveStats from '../components/manager/TeamLeaveStats';
import PendingApprovals from '../components/manager/PendingApprovals';
import TeamOnLeave from '../components/manager/TeamOnLeave';

const ManagerDashboard = () => {
  return (
    <Layout>
      <ManagerWelcome />
      <div className="mt-6">
        <TeamLeaveStats />
      </div>
      <div className="mt-6 grid grid-cols-1 xl:grid-cols-3 gap-6 items-start">
        <div className="xl:col-span-2">
          <PendingApprovals />
        </div>
        <div className="xl:col-span-1">
          <TeamOnLeave />
        </div>
      </div>
    </Layout>
  );
};

export default ManagerDashboard;
