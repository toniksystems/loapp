interface LegendItemProps {
  color: string;
  label: string;
}

const LegendItem: React.FC<LegendItemProps> = ({ color, label }) => (
  <div className="flex items-center gap-3">
    <div className={`h-5 w-5 rounded-full ${color}`}></div>
    <span className="text-lg font-medium text-nimasa-dark-text">{label}</span>
  </div>
);

const TeamLegend = () => {
  const legendItems = [
    { color: 'bg-nimasa-sky-blue', label: 'Casual Leave' },
    { color: 'bg-nimasa-gold', label: 'Sick Leave' },
    { color: 'bg-nimasa-blue', label: 'Out of Office' },
    { color: 'bg-nimasa-green', label: 'Annual Leave' },
    { color: 'bg-maternity-purple', label: 'Maternity/Paternity Leave' },
    { color: 'bg-table-header-gray', label: 'Weekends' },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-md p-6 border border-gray-200">
      <h3 className="text-2xl font-medium text-nimasa-dark-text mb-6">Legend</h3>
      <div className="space-y-4">
        {legendItems.map((item, index) => (
          <LegendItem key={index} color={item.color} label={item.label} />
        ))}
      </div>
    </div>
  );
};

export default TeamLegend;
