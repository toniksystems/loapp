import { FullAuditLog } from '../../types';

interface AuditLogTableProps {
  logs: FullAuditLog[];
}

const AuditLogTable: React.FC<AuditLogTableProps> = ({ logs }) => {
  return (
    <div className="overflow-x-auto">
      <div className="min-w-[900px]">
        {/* Header */}
        <div className="grid grid-cols-12 gap-4 px-4 pb-3 text-sm font-bold text-gray-500 uppercase">
          <div className="col-span-2">Log ID</div>
          <div className="col-span-2">Timestamp</div>
          <div className="col-span-2">User ID</div>
          <div className="col-span-2">Action Type</div>
          <div className="col-span-4">Details</div>
        </div>
        {/* Body */}
        <div className="divide-y divide-gray-100">
          {logs.map((log) => (
            <div key={log.logId} className="grid grid-cols-12 gap-4 items-start py-2.5 px-4 text-xs text-gray-700">
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
