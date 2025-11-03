import StatusBadge from './StatusBadge';

const leaveHistoryData = [
    { id: 'REQ-2025-0142', type: 'Annual', dates: 'Oct 7 - Oct 17, 2025', days: '10', status: 'Pending' },
    { id: 'REQ-2025-0107', type: 'Casual', dates: 'Feb 10 - Feb 12, 2025', days: '02', status: 'Approved' },
    { id: 'REQ-2025-0170', type: 'Sick', dates: 'Mar 10 - Mar 13, 2025', days: '03', status: 'Approved' },
    { id: 'REQ-2025-0220', type: 'Annual', dates: 'April 10 - April 24, 2025', days: '14', status: 'Rejected' },
    { id: 'REQ-2025-0212', type: 'Paternity', dates: 'Sept 10 - Sept 20, 2025', days: '10', status: 'Approved' },
    { id: 'REQ-2025-0223', type: 'Casual', dates: 'Oct 10 - Oct 12, 2025', days: '02', status: 'Approved' },
    { id: 'REQ-2024-1234', type: 'Sick', dates: 'Dec 10 - Dec 17, 2024', days: '07', status: 'Rejected' },
    { id: 'REQ-2024-0243', type: 'Annual', dates: 'Nov 10 - Nov 24, 2024', days: '14', status: 'Approved' },
    { id: 'REQ-2024-3111', type: 'Casual', dates: 'Oct 10 - Oct 14, 2024', days: '04', status: 'Approved' },
    { id: 'REQ-2024-2112', type: 'Annual', dates: 'Sept 10 - Sept 23, 2024', days: '12', status: 'Pending' },
];

const LeaveHistoryTable = () => {
    return (
      <div className="overflow-x-auto">
        <div className="min-w-[800px]">
          <div className="grid grid-cols-12 gap-4 bg-table-header-gray/60 rounded-t-lg px-4 py-2 text-nimasa-dark-text font-bold text-xs">
            <div className="col-span-2">Request ID</div>
            <div className="col-span-2">Leave Type</div>
            <div className="col-span-3">Dates</div>
            <div className="col-span-1 text-center">Days</div>
            <div className="col-span-2 text-center">Status</div>
            <div className="col-span-2 text-center">Action</div>
          </div>
          <div className="bg-input-bg/70">
            {leaveHistoryData.map((item, index) => (
              <div key={index} className="grid grid-cols-12 gap-4 items-center px-4 py-2 text-nimasa-dark-text text-xs border-b border-white last:border-b-0">
                <div className="col-span-2">{item.id}</div>
                <div className="col-span-2">{item.type}</div>
                <div className="col-span-3">{item.dates}</div>
                <div className="col-span-1 text-center">{item.days}</div>
                <div className="col-span-2 flex justify-center">
                  <StatusBadge status={item.status as 'Pending' | 'Approved' | 'Rejected'} />
                </div>
                <div className="col-span-2 text-center font-medium text-nimasa-dark-text cursor-pointer hover:underline">
                  View Details
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default LeaveHistoryTable;
