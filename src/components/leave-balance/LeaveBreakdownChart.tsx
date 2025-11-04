const LeaveBreakdownChart = () => {
    const percentageUsed = 34; // 15 out of 45 days
    const gradient = `conic-gradient(#FFC107 ${percentageUsed}%, #009650 0 ${100 - percentageUsed}%)`;
  
    return (
      <div className="bg-white text-nimasa-dark-text rounded-2xl p-5 flex flex-col items-center justify-center h-36 shadow-lg border border-gray-100">
        <h3 className="text-lg font-medium mb-4">Leave Breakdown</h3>
        <div className="flex items-center gap-5">
            <div
                className="relative w-20 h-20 rounded-full flex items-center justify-center"
                style={{ background: gradient }}
            >
                <div className="absolute w-16 h-16 bg-white rounded-full"></div>
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-nimasa-yellow"></span>
                    <span className="text-base font-medium">Days Used</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-nimasa-green"></span>
                    <span className="text-base font-medium">Days Available</span>
                </div>
            </div>
        </div>
      </div>
    );
  };
  
  export default LeaveBreakdownChart;
