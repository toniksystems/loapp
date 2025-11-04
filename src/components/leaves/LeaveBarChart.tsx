import React from 'react';

const LeaveBarChart = () => {
    const chartData = [
        { label: 'Annual\nLeave', value: 10, color: 'bg-nimasa-green' },
        { label: 'Casual\nLeave', value: 6, color: 'bg-nimasa-sky-blue' },
        { label: 'Out of\nOffice', value: 8, color: 'bg-nimasa-blue' },
        { label: 'Sick\nLeave', value: 3, color: 'bg-nimasa-gold' },
    ];
    const maxValue = 10;

    return (
        <div className="w-full h-full flex items-end pl-6 pr-2">
            <div className="h-full flex flex-col justify-between text-right text-nimasa-dark-text font-medium pb-8 -ml-6 text-sm">
                <span>{maxValue}</span>
                <span>{maxValue / 2}</span>
                <span className="mb-[-6px]">0</span>
            </div>
            <div className="w-full h-full grid grid-cols-4 items-end gap-6 sm:gap-8 border-l-2 border-b-2 border-gray-300 pl-4 sm:pl-5">
                {chartData.map((item, index) => (
                    <div key={index} className="flex flex-col items-center gap-1.5 h-full justify-end">
                        <div
                            className={`${item.color} w-full rounded-t-md transition-all duration-500 hover:opacity-90`}
                            style={{ height: `${(item.value / maxValue) * 100}%` }}
                        ></div>
                        <span className="text-center text-nimasa-dark-text font-medium whitespace-pre-line text-sm">
                            {item.label}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LeaveBarChart;
