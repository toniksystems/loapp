const LeaveBreakdownChart = () => {
    const percentageUsed = 34; // 15 out of 45 days
    const gradient = `conic-gradient(#FFC107 ${percentageUsed}%, #009650 0 ${100 - percentageUsed}%)`;
  
    return (
      <div className="bg-white text-nimasa-dark-text rounded-2xl p-8 flex flex-col items-center justify-center h-48 shadow-lg border border-gray-100">
        <h3 className="text-2xl font-medium mb-6">Leave Breakdown</h3>
        <div className="flex items-center gap-8">
            <div
                className="relative w-28 h-28 rounded-full flex items-center justify-center"
                style={{ background: gradient }}
            >
                <div className="absolute w-24 h-24 bg-white rounded-full"></div>
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3.5">
                    <span className="h-4 w-4 rounded-full bg-nimasa-yellow"></span>
                    <span className="text-xl font-medium">Days Used</span>
                </div>
                <div className="flex items-center gap-3.5">
                    <span className="h-4 w-4 rounded-full bg-nimasa-green"></span>
                    <span className="text-xl font-medium">Days Available</span>
                </div>
            </div>
        </div>
      </div>
    );
  };
  
  export default LeaveBreakdownChart;
