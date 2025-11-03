import Layout from '../components/Layout';
import SummaryCard from '../components/leave-balance/SummaryCard';
import LeaveBreakdownChart from '../components/leave-balance/LeaveBreakdownChart';
import LeaveTypeCard from '../components/leave-balance/LeaveTypeCard';
import PolicyReminderCard from '../components/leave-balance/PolicyReminderCard';
import { Plane, Briefcase, Bed } from 'lucide-react';

const LeaveBalance = () => {
  return (
    <Layout>
      <h1 className="text-xl md:text-2xl font-bold text-nimasa-dark-text mb-6">Leave Balance</h1>

      <div className="bg-white rounded-2xl shadow-lg p-4 md:p-5">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <SummaryCard title="Total Leave Days" value="45" subtitle="Annual Allocation" bgColor="bg-nimasa-light-blue" />
          <SummaryCard title="Days Used" value="15" subtitle="Across All Types" bgColor="bg-nimasa-yellow" />
          <SummaryCard title="Days Available" value="30" subtitle="Ready to Use" bgColor="bg-nimasa-green" />
          <LeaveBreakdownChart />
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div className="flex flex-col gap-6">
            <LeaveTypeCard
                icon={<Plane size={28} />}
                title="Annual Leave"
                allocation="Annual Allocation: 21 days"
                progress={38}
                daysUsed={8}
                pending={0}
                daysAvailable={13}
            />
            <LeaveTypeCard
                icon={<Bed size={28} />}
                title="Sick Leave"
                allocation="Annual Allocation: 12 days"
                progress={17}
                daysUsed={2}
                pending={0}
                daysAvailable={10}
            />
        </div>
        <div className="flex flex-col gap-6">
            <LeaveTypeCard
                icon={<Briefcase size={28} />}
                title="Casual Leave"
                allocation="Annual Allocation: 12 days"
                progress={0}
                daysUsed={0}
                pending={0}
                daysAvailable={12}
            />
            <PolicyReminderCard />
        </div>
      </div>
    </Layout>
  );
};

export default LeaveBalance;
