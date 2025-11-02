interface DonutChartProps {
  percentageLeft: number;
  text: string;
}

const LeaveDonutChart: React.FC<DonutChartProps> = ({ percentageLeft, text }) => {
  const percentageUsed = 100 - percentageLeft;
  const gradient = `conic-gradient(#FFC107 ${percentageUsed}%, #009650 0 ${percentageUsed}%)`;

  return (
    <div className="flex flex-col items-center gap-4">
      <h3 className="text-2xl font-medium text-nimasa-dark-text">{text}</h3>
      <div
        className="relative w-48 h-48 rounded-full flex items-center justify-center"
        style={{ background: gradient }}
      >
        <div className="absolute w-[124px] h-[124px] bg-white rounded-full flex flex-col items-center justify-center">
          <span className="text-4xl font-bold text-nimasa-dark-text">{percentageLeft}%</span>
          <span className="text-xl font-medium text-nimasa-dark-text">Left</span>
        </div>
      </div>
    </div>
  );
};

export default LeaveDonutChart;
