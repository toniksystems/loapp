import Layout from '../components/Layout';
import LeaveHistoryFilters from '../components/history/LeaveHistoryFilters';
import LeaveHistoryTable from '../components/history/LeaveHistoryTable';
import Pagination from '../components/history/Pagination';

const LeaveHistory = () => {
  return (
    <Layout>
      <h1 className="text-lg md:text-xl font-bold text-nimasa-dark-text mb-4">Leave History</h1>
      <div className="bg-white rounded-2xl shadow-lg p-4 md:p-5">
        <LeaveHistoryFilters />
        <LeaveHistoryTable />
        <Pagination />
      </div>
    </Layout>
  );
};

export default LeaveHistory;
