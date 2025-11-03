import { FullAuditLog } from '../types';

export const fullAuditLogs: FullAuditLog[] = [
  {
    logId: 'LOG-2301',
    timestamp: '2025-10-15 09:30:15',
    userId: 'Admin User',
    actionType: 'Leave_Override',
    details: 'For NMS1045 (Sick Leave): Status changed from Rejected to Approved.',
  },
  {
    logId: 'LOG-2300',
    timestamp: '2025-10-15 09:10:45',
    userId: 'HR User',
    actionType: 'Policy_Create',
    details: 'New leave type added: Training and Certification (3 days).',
  },
  {
    logId: 'LOG-2299',
    timestamp: '2025-10-14 08:20:55',
    userId: 'HR User',
    actionType: 'Bulk_Upload',
    details: 'Uploaded 15 new staff records via Excel tempate',
  },
  {
    logId: 'LOG-2298',
    timestamp: '2025-10-05 10:30:25',
    userId: 'Manager',
    actionType: 'Approval',
    details: 'Rejected Annual Leave for NMS1012 (Reason: Conflict of duties)',
  },
  {
    logId: 'LOG-2297',
    timestamp: '2025-09-25 09:30:35',
    userId: 'Admin User',
    actionType: 'Quota_Update',
    details: 'Updated Senior Staff Annual Quota from 25 to 30 days.',
  },
];
