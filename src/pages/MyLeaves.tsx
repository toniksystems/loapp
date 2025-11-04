import Layout from '../components/Layout';
import LeaveDetailHeader from '../components/leaves/LeaveDetailHeader';
import LeaveHistorySummary from '../components/leaves/LeaveHistorySummary';

const MyLeaves = () => {
  return (
    <Layout>
      <h1 className="text-xl md:text-2xl font-bold text-nimasa-dark-text mb-6">Leave Detail and History</h1>
      <LeaveDetailHeader />
      <div className="mt-6">
        <LeaveHistorySummary />
      </div>
    </Layout>
  );
};

export default MyLeaves;
