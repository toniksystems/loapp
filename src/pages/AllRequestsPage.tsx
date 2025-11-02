import Layout from '../components/Layout';
import ApprovalTabs from '../components/approvals/ApprovalTabs';
import ApprovalFilters from '../components/approvals/ApprovalFilters';
import AllRequestsList from '../components/all-requests/AllRequestsList';
import AllRequestsPagination from '../components/all-requests/AllRequestsPagination';

const AllRequestsPage = () => {
  return (
    <Layout>
      <h1 className="text-3xl md:text-5xl font-bold text-nimasa-dark-text mb-8">Leave Approval</h1>
      <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
            <ApprovalTabs initialTab="All Request" />
        </div>
        <ApprovalFilters />
        <AllRequestsList />
        <AllRequestsPagination />
      </div>
    </Layout>
  );
};

export default AllRequestsPage;
