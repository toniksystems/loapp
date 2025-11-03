import React from 'react';

const EntitlementItem = ({ type, duration }: { type: string; duration: string }) => (
  <div className="flex justify-between items-center py-1.5">
    <p className="font-bold text-nimasa-dark-text text-sm">{type}</p>
    <p className="text-gray-700 text-sm">{duration}</p>
  </div>
);

const LeaveEntitlement = () => {
  const entitlements = [
    { type: 'Annual Leave', duration: '21 days/year' },
    { type: 'Casual Leave', duration: '12 days/year' },
    { type: 'Maternity Leave', duration: '90 days' },
    { type: 'Sick Leave', duration: '12 days/year' },
    { type: 'Out of Office', duration: 'As required' },
    { type: 'Study Leave', duration: 'As approved' },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-4">
      <h3 className="text-base font-medium text-nimasa-dark-text mb-3 text-center">
        Leave Types and Entitlement
      </h3>
      <div className="divide-y divide-gray-200">
        {entitlements.map((item, index) => (
          <EntitlementItem key={index} type={item.type} duration={item.duration} />
        ))}
      </div>
    </div>
  );
};

export default LeaveEntitlement;
