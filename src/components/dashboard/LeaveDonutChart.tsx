interface DonutChartProps {
  percentageLeft: number;
  text: string;
}

const LeaveDonutChart: React.FC<DonutChartProps> = ({ percentageLeft, text }) => {
  const percentageUsed = 100 - percentageLeft;
  const gradient = `conic-gradient(#FFC107 ${percentageUsed}%, #009650 0 ${percentageUsed}%)`;

  return (
    <div className="flex flex-col items-center gap-2">
      <h3 className="text-base font-medium text-nimasa-dark-text">{text}</h3>
      <div
        className="relative w-24 h-24 rounded-full flex items-center justify-center"
        style={{ background: gradient }}
      >
        <div className="absolute w-20 h-20 bg-white rounded-full flex flex-col items-center justify-center">
          <span className="text-xl font-bold text-nimasa-dark-text">{percentageLeft}%</span>
          <span className="text-sm font-medium text-nimasa-dark-text">Left</span>
        </div>
      </div>
    </div>
  );
};

export default LeaveDonutChart;
