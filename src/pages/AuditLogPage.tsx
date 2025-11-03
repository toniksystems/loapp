import AdminLayout from '../components/admin/AdminLayout';
import AuditLogFilters from '../components/audit-log/AuditLogFilters';
import AuditLogTable from '../components/audit-log/AuditLogTable';
import { fullAuditLogs } from '../data/fullAuditLogData';

const AuditLogPage = () => {
  return (
    <AdminLayout>
      <h1 className="text-3xl md:text-5xl font-bold text-nimasa-dark-text mb-8">Audit Log</h1>
      <div className="bg-white rounded-3xl shadow-lg p-8">
        <AuditLogFilters />
        <AuditLogTable logs={fullAuditLogs} />
      </div>
    </AdminLayout>
  );
};

export default AuditLogPage;
