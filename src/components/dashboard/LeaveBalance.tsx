import LeaveDonutChart from './LeaveDonutChart';

const leaveData = [
  { type: 'Annual Leave', percentageLeft: 60, daysUsed: 8, daysTotal: 21 },
  { type: 'Casual Leave', percentageLeft: 100, daysUsed: 0, daysTotal: 12 },
  { type: 'Sick Leave', percentageLeft: 90, daysUsed: 2, daysTotal: 12 },
];

const LeaveBalance = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="flex flex-col sm:flex-row justify-between items-start mb-8 gap-5">
        <h2 className="text-2xl font-medium text-nimasa-dark-text">Leave Balance</h2>
        <div className="flex gap-8 text-lg font-medium">
            <div className="flex items-center gap-3">
                <span className="h-4 w-4 rounded-full bg-nimasa-green"></span>
                <span>Days Available</span>
            </div>
            <div className="flex items-center gap-3">
                <span className="h-4 w-4 rounded-full bg-nimasa-yellow"></span>
                <span>Days Used</span>
            </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {leaveData.map((leave, index) => (
          <div key={index} className="flex flex-col items-center gap-6">
            <LeaveDonutChart percentageLeft={leave.percentageLeft} text={leave.type} />
            <div className="bg-nimasa-light-blue text-white w-full text-center rounded-xl p-5">
              <p className="text-4xl font-bold">{`${leave.daysUsed}/${leave.daysTotal}`}</p>
              <p className="text-lg mt-1">{`${leave.daysTotal - leave.daysUsed} days remaining`}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaveBalance;
