import Layout from '../components/Layout';
import LeaveDetailHeader from '../components/leaves/LeaveDetailHeader';
import LeaveHistorySummary from '../components/leaves/LeaveHistorySummary';

const MyLeaves = () => {
  return (
    <Layout>
      <h1 className="text-3xl md:text-5xl font-bold text-nimasa-dark-text mb-8">Leave Detail and History</h1>
      <LeaveDetailHeader />
      <LeaveHistorySummary />
    </Layout>
  );
};

export default MyLeaves;
