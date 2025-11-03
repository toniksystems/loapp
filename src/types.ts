export interface LeaveApprovalRequest {
    id: string;
    employee: {
      name: string;
      avatarUrl: string;
      title: string;
    };
    leave: {
      type: 'Annual Leave' | 'Out-of-Office' | 'Sick Leave' | 'Casual Leave' | 'Maternity Leave' | 'Paternity Leave';
      color: string;
      duration: string;
      days: string;
    };
    impact: {
      risk: 'High' | 'Medium' | 'Low';
      description: string;
    };
  }

export interface ApprovedRequest {
  id: string;
  employee: {
    name:string;
    avatarUrl: string;
    employeeId: string;
  };
  leave: {
    type: 'Annual Leave' | 'Out-of-Office' | 'Paternity Leave' | 'Sick Leave' | 'Casual Leave';
    color: string;
    duration: string;
  };
  approver: {
    name: string;
    date: string;
  };
  status: 'Approved';
}

export interface RejectedRequest {
  id: string;
  employee: {
    name: string;
    avatarUrl: string;
    employeeId: string;
  };
  leave: {
    type: 'Out-of-Office' | 'Paternity Leave' | 'Sick Leave' | 'Casual Leave' | 'Annual Leave';
    color: string;
    duration: string;
  };
  rejection: {
    reason: string;
    detail: string;
  };
  rejectedDate: string;
  status: 'Rejected';
}

export interface AllRequest {
  id: string;
  employee: {
    name: string;
    avatarUrl: string;
    employeeId: string;
  };
  leave: {
    type: 'Sick Leave' | 'Paternity Leave' | 'Casual Leave' | 'Annual Leave' | 'Out-of-Office';
    color: string;
    duration: string;
  };
  status: 'Pending' | 'Approved' | 'Rejected' | 'Cancelled';
  statusDetail: string;
  requested: {
    date: string;
    days: string;
  };
  actioned: {
    by: string;
    date: string;
  };
}

export interface TeamCalendarLeave {
  employeeName: string;
  avatarUrl: string;
  leaveType: string;
  leaveColor: string;
}

export interface TeamCalendarDay {
  date: number | null;
  isWeekend: boolean;
  leaves: TeamCalendarLeave[];
}

export interface AuditLogEntry {
  timestamp: string;
  user: string;
  actionType: string;
  description: string;
}

export interface LeaveTypeConfig {
  id: string;
  name: string;
  defaultDays: string;
  policyRule: string;
}

export interface QuotaConfig {
  id: string;
  role: string;
  annualQuota: string;
  sickQuota: string;
  casualQuota: string;
}

export interface RoleConfig {
  id: string;
  role: string;
  leaveApprovalLevel: string;
  systemConfig: string;
  overrideCapability: 'Yes' | 'No';
}

export interface ManagedUser {
  id: string;
  name: string;
  employeeId: string;
  avatarUrl: string;
  role: 'Manager' | 'Employee' | 'Admin';
  department: string;
  status: 'Active' | 'Inactive';
  lastActive: string;
}

export interface FullApplication {
  id: string;
  employee: {
    name: string;
    employeeId: string;
    avatarUrl: string;
  };
  leaveType: string;
  dates: string;
  hodStatus: 'Pending' | 'Approved' | 'Rejected';
  hrStatus: 'Pending' | 'Approved' | 'Rejected' | 'N/A';
}

export interface FullAuditLog {
  logId: string;
  timestamp: string;
  userId: string;
  actionType: string;
  details: string;
}
