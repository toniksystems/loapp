import Layout from '../components/Layout';
import LeaveDetailHeader from '../components/leaves/LeaveDetailHeader';
import LeaveHistorySummary from '../components/leaves/LeaveHistorySummary';

const MyLeaves = () => {
  return (
    <Layout>
      <h1 className="text-3xl md:text-4xl font-bold text-nimasa-dark-text mb-10">Leave Detail and History</h1>
      <LeaveDetailHeader />
      <div className="mt-10">
        <LeaveHistorySummary />
      </div>
    </Layout>
  );
};

export default MyLeaves;
