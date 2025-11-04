interface LegendItemProps {
  color: string;
  label: string;
}

const LegendItem: React.FC<LegendItemProps> = ({ color, label }) => (
  <div className="flex items-center gap-3">
    <div className={`h-4 w-4 rounded-full ${color}`}></div>
    <span className="text-sm font-medium text-nimasa-dark-text">{label}</span>
  </div>
);

const Legend = () => {
  const legendItems = [
    { color: 'bg-nimasa-sky-blue', label: 'Casual Leave' },
    { color: 'bg-nimasa-gold', label: 'Sick Leave' },
    { color: 'bg-nimasa-blue', label: 'Out of Office' },
    { color: 'bg-nimasa-green', label: 'Annual Leave' },
    { color: 'bg-[#8A38F5]', label: 'Maternity/Paternity Leave' },
    { color: 'bg-table-header-gray', label: 'Weekends' },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-4">
      <h3 className="text-base font-medium text-nimasa-dark-text mb-4">Legend</h3>
      <div className="space-y-3">
        {legendItems.map((item, index) => (
          <LegendItem key={index} color={item.color} label={item.label} />
        ))}
      </div>
    </div>
  );
};

export default Legend;
