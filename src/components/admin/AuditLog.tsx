import { AuditLogEntry } from '../../types';

const auditLogs: AuditLogEntry[] = [
  { timestamp: '2025-10-15 09:15', user: 'Admin', actionType: 'POLICY_UPDATE', description: 'Updated Annual Leave Quota for Senior Staff to 30 days.' },
  { timestamp: '2025-10-13 08:25', user: 'HR User', actionType: 'DATA_EXPORT', description: 'Exported All Approved Leave Report (Q3)' },
  { timestamp: '2025-10-11 11:15', user: 'Admin', actionType: 'CREATE_USER', description: 'Added new employee: Taiwo Ogunlesi' },
  { timestamp: '2025-10-05 03:20', user: 'Manager', actionType: 'LEAVE_APPROVED', description: 'Approved Annual Leave for Bassey Ikechukwu' },
  { timestamp: '2025-09-29 10:45', user: 'Admin', actionType: 'POLICY_UPDATE', description: 'Updated Sick Leave Quota for Senior Staff to 12 days.' },
  { timestamp: '2025-09-25 02:15', user: 'Admin', actionType: 'CREATE_USER', description: 'Added new employee: Chioma Lawal' },
  { timestamp: '2025-09-20 10:17', user: 'HR User', actionType: 'DATA_EXPORT', description: 'Exported All Leave Request Report (Q3)' },
];

const AuditLog = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-5">
      <h3 className="text-lg font-semibold text-nimasa-dark-text mb-4">Latest System Logs (Audit)</h3>
      <div className="overflow-x-auto">
        <div className="min-w-[900px]">
          {/* Header */}
          <div className="grid grid-cols-10 gap-4 px-4 pb-3 text-sm font-bold text-gray-500 uppercase border-b-2 border-gray-200">
            <div className="col-span-2">Timestamp</div>
            <div className="col-span-1">User</div>
            <div className="col-span-2">Action Type</div>
            <div className="col-span-5">Description</div>
          </div>
          {/* Body */}
          <div className="divide-y divide-gray-100">
            {auditLogs.map((log, index) => (
              <div key={index} className="grid grid-cols-10 gap-4 items-start py-3 px-4 text-sm text-gray-700">
                <div className="col-span-2 font-medium">{log.timestamp}</div>
                <div className="col-span-1">{log.user}</div>
                <div className="col-span-2 font-mono bg-gray-100 px-2 py-1 rounded-md text-xs">{log.actionType}</div>
                <div className="col-span-5">{log.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditLog;
