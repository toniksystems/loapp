import Layout from '../components/Layout';
import LeaveHistoryFilters from '../components/history/LeaveHistoryFilters';
import LeaveHistoryTable from '../components/history/LeaveHistoryTable';
import Pagination from '../components/history/Pagination';

const LeaveHistory = () => {
  return (
    <Layout>
      <h1 className="text-3xl md:text-4xl font-bold text-nimasa-dark-text mb-10">Leave History</h1>
      <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
        <LeaveHistoryFilters />
        <LeaveHistoryTable />
        <Pagination />
      </div>
    </Layout>
  );
};

export default LeaveHistory;
