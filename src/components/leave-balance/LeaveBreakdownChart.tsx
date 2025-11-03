const LeaveBreakdownChart = () => {
    const percentageUsed = 34; // 15 out of 45 days
    const gradient = `conic-gradient(#FFC107 ${percentageUsed}%, #009650 0 ${100 - percentageUsed}%)`;
  
    return (
      <div className="bg-white text-nimasa-dark-text rounded-2xl p-4 flex flex-col items-center justify-center h-32 shadow-lg border border-gray-100">
        <h3 className="text-base font-medium mb-3">Leave Breakdown</h3>
        <div className="flex items-center gap-4">
            <div
                className="relative w-16 h-16 rounded-full flex items-center justify-center"
                style={{ background: gradient }}
            >
                <div className="absolute w-12 h-12 bg-white rounded-full"></div>
            </div>
            <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-nimasa-yellow"></span>
                    <span className="text-sm font-medium">Days Used</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-nimasa-green"></span>
                    <span className="text-sm font-medium">Days Available</span>
                </div>
            </div>
        </div>
      </div>
    );
  };
  
  export default LeaveBreakdownChart;
