import LeaveSummaryCard from './LeaveSummaryCard';
import LeaveDonutCard from './LeaveDonutCard';

const LeaveDetailHeader = () => {
  return (
    <div>
        <div className="flex flex-col xl:flex-row gap-6 items-stretch">
          <div className="flex-shrink-0 xl:w-auto">
             <LeaveSummaryCard />
          </div>
          <div className="flex-grow grid grid-cols-1 sm:grid-cols-3 gap-6">
            <LeaveDonutCard title="Annual Leave" daysLeft={13} totalDays={21} />
            <LeaveDonutCard title="Casual Leave" daysLeft={12} totalDays={12} />
            <LeaveDonutCard title="Sick Leave" daysLeft={9} totalDays={12} />
          </div>
        </div>
        <div className="flex justify-center items-center gap-6 mt-5">
            <div className="flex items-center gap-2.5">
                <span className="h-3 w-3 rounded-full bg-nimasa-green"></span>
                <span className="text-base font-medium text-nimasa-dark-text">Days Available</span>
            </div>
            <div className="flex items-center gap-2.5">
                <span className="h-3 w-3 rounded-full bg-nimasa-yellow"></span>
                <span className="text-base font-medium text-nimasa-dark-text">Days Used</span>
            </div>
        </div>
    </div>
  );
};

export default LeaveDetailHeader;
