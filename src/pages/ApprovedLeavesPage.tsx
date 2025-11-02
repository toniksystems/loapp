import Layout from '../components/Layout';
import ApprovalTabs from '../components/approvals/ApprovalTabs';
import ApprovalFilters from '../components/approvals/ApprovalFilters';
import ApprovedLeaveList from '../components/approved-leaves/ApprovedLeaveList';
import ApprovedPagination from '../components/approved-leaves/ApprovedPagination';

const ApprovedLeavesPage = () => {
  return (
    <Layout>
      <h1 className="text-3xl md:text-5xl font-bold text-nimasa-dark-text mb-8">Leave Approval</h1>
      <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
            <ApprovalTabs initialTab="Approved" />
        </div>
        <ApprovalFilters />
        <ApprovedLeaveList />
        <ApprovedPagination />
      </div>
    </Layout>
  );
};

export default ApprovedLeavesPage;
