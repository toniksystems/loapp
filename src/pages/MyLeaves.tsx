import Layout from '../components/Layout';
import LeaveDetailHeader from '../components/leaves/LeaveDetailHeader';
import LeaveHistorySummary from '../components/leaves/LeaveHistorySummary';

const MyLeaves = () => {
  return (
    <Layout>
      <h1 className="text-lg md:text-xl font-bold text-nimasa-dark-text mb-4">Leave Detail and History</h1>
      <LeaveDetailHeader />
      <div className="mt-4">
        <LeaveHistorySummary />
      </div>
    </Layout>
  );
};

export default MyLeaves;
