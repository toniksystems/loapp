import Layout from '../components/Layout';
import LeaveHistoryFilters from '../components/history/LeaveHistoryFilters';
import LeaveHistoryTable from '../components/history/LeaveHistoryTable';
import Pagination from '../components/history/Pagination';

const LeaveHistory = () => {
  return (
    <Layout>
      <h1 className="text-3xl md:text-5xl font-bold text-nimasa-dark-text mb-8">Leave History</h1>
      <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8">
        <LeaveHistoryFilters />
        <LeaveHistoryTable />
        <Pagination />
      </div>
    </Layout>
  );
};

export default LeaveHistory;
