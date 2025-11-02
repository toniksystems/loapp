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
    name: string;
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
