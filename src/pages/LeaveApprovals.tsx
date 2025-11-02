import Layout from '../components/Layout';
import ApprovalTabs from '../components/approvals/ApprovalTabs';
import ApprovalFilters from '../components/approvals/ApprovalFilters';
import ApprovalList from '../components/approvals/ApprovalList';
import ApprovalsPagination from '../components/approvals/ApprovalsPagination';

const LeaveApprovals = () => {
  return (
    <Layout>
      <h1 className="text-3xl md:text-5xl font-bold text-nimasa-dark-text mb-8">Leave Approval</h1>
      <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
            <ApprovalTabs />
        </div>
        <ApprovalFilters />
        <ApprovalList />
        <ApprovalsPagination />
      </div>
    </Layout>
  );
};

export default LeaveApprovals;
