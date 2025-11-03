import { FullAuditLog } from '../../types';

interface AuditLogTableProps {
  logs: FullAuditLog[];
}

const AuditLogTable: React.FC<AuditLogTableProps> = ({ logs }) => {
  return (
    <div className="overflow-x-auto">
      <div className="min-w-[1200px]">
        {/* Header */}
        <div className="grid grid-cols-12 gap-4 px-4 pb-4 text-lg font-bold text-nimasa-dark-text">
          <div className="col-span-2">LOG ID</div>
          <div className="col-span-2">TIMESTAMP</div>
          <div className="col-span-2">USER ID</div>
          <div className="col-span-2">ACTION TYPE</div>
          <div className="col-span-4">DETAILS</div>
        </div>
        {/* Body */}
        <div className="divide-y divide-gray-100">
          {logs.map((log) => (
            <div key={log.logId} className="grid grid-cols-12 gap-4 items-start py-4 px-4 text-base text-gray-700">
              <div className="col-span-2 font-medium">{log.logId}</div>
              <div className="col-span-2">{log.timestamp}</div>
              <div className="col-span-2">{log.userId}</div>
              <div className="col-span-2">{log.actionType}</div>
              <div className="col-span-4">{log.details}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuditLogTable;
