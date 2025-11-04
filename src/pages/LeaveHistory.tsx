import Layout from '../components/Layout';
import LeaveHistoryFilters from '../components/history/LeaveHistoryFilters';
import LeaveHistoryTable from '../components/history/LeaveHistoryTable';
import Pagination from '../components/history/Pagination';

const LeaveHistory = () => {
  return (
    <Layout>
      <h1 className="text-xl md:text-2xl font-bold text-nimasa-dark-text mb-6">Leave History</h1>
      <div className="bg-white rounded-2xl shadow-lg p-5 md:p-6">
        <LeaveHistoryFilters />
        <LeaveHistoryTable />
        <Pagination />
      </div>
    </Layout>
  );
};

export default LeaveHistory;
