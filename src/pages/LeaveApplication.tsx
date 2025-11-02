import Layout from '../components/Layout';
import LeaveApplicationHeader from '../components/application/LeaveApplicationHeader';
import ApprovalProcess from '../components/application/ApprovalProcess';
import LeaveEntitlement from '../components/application/LeaveEntitlement';
import LeaveApplicationForm from '../components/application/LeaveApplicationForm';

const LeaveApplication = () => {
  return (
    <Layout>
      <h1 className="text-3xl md:text-5xl font-bold text-nimasa-dark-text mb-8">
        Leave and Out of Office Application
      </h1>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 items-start">
        <div className="xl:col-span-1 flex flex-col gap-8">
          <LeaveApplicationHeader />
          <ApprovalProcess />
          <LeaveEntitlement />
        </div>
        <div className="xl:col-span-2">
          <LeaveApplicationForm />
        </div>
      </div>
    </Layout>
  );
};

export default LeaveApplication;
