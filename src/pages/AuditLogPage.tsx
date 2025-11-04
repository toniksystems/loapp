import AdminLayout from '../components/admin/AdminLayout';
import AuditLogFilters from '../components/audit-log/AuditLogFilters';
import AuditLogTable from '../components/audit-log/AuditLogTable';
import { fullAuditLogs } from '../data/fullAuditLogData';

const AuditLogPage = () => {
  return (
    <AdminLayout>
      <h1 className="text-xl md:text-2xl font-bold text-nimasa-dark-text mb-6">Audit Log</h1>
      <div className="bg-white rounded-2xl shadow-lg p-5">
        <AuditLogFilters />
        <AuditLogTable logs={fullAuditLogs} />
      </div>
    </AdminLayout>
  );
};

export default AuditLogPage;
