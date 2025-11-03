import { useState } from 'react';
import Layout from '../components/Layout';
import ApprovalTabs from '../components/approvals/ApprovalTabs';
import ApprovalFilters from '../components/approvals/ApprovalFilters';

// Import all list and pagination components
import ApprovalList from '../components/approvals/ApprovalList';
import ApprovalsPagination from '../components/approvals/ApprovalsPagination';
import ApprovedLeaveList from '../components/approved-leaves/ApprovedLeaveList';
import ApprovedPagination from '../components/approved-leaves/ApprovedPagination';
import RejectedLeaveList from '../components/rejected-leaves/RejectedLeaveList';
import RejectedPagination from '../components/rejected-leaves/RejectedPagination';
import AllRequestsList from '../components/all-requests/AllRequestsList';
import AllRequestsPagination from '../components/all-requests/AllRequestsPagination';

const LeaveApprovals = () => {
  const [activeTab, setActiveTab] = useState('Pending');

  const renderContent = () => {
    switch (activeTab) {
      case 'Pending':
        return (
          <>
            <ApprovalList />
            <ApprovalsPagination />
          </>
        );
      case 'Approved':
        return (
          <>
            <ApprovedLeaveList />
            <ApprovedPagination />
          </>
        );
      case 'Rejected':
        return (
          <>
            <RejectedLeaveList />
            <RejectedPagination />
          </>
        );
      case 'All Request':
        return (
          <>
            <AllRequestsList />
            <AllRequestsPagination />
          </>
        );
      default:
        return (
          <>
            <ApprovalList />
            <ApprovalsPagination />
          </>
        );
    }
  };

  return (
    <Layout>
      <h1 className="text-lg md:text-xl font-bold text-nimasa-dark-text mb-4">Leave Approval</h1>
      <div className="bg-white rounded-2xl shadow-lg p-4 md:p-5">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
            <ApprovalTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
        <ApprovalFilters />
        {renderContent()}
      </div>
    </Layout>
  );
};

export default LeaveApprovals;
