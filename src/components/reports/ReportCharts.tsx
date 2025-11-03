import ReactECharts from 'echarts-for-react';

const LegendItem = ({ color, label, value }: { color: string, label: string, value: string }) => (
    <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
            <div className={`h-5 w-5 rounded-full ${color}`}></div>
            <span className="text-lg font-medium text-nimasa-dark-text">{label}</span>
        </div>
        <span className="text-lg font-medium text-nimasa-dark-text">{value}</span>
    </div>
);

const ReportCharts = () => {
    const lineChartOption = {
        tooltip: {
            trigger: 'axis'
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '10%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
            axisLine: { show: true },
            axisTick: { show: false },
            axisLabel: { color: '#333' }
        },
        yAxis: {
            type: 'value',
            min: 0,
            max: 32,
            interval: 8,
            axisLabel: { color: '#333' },
            splitLine: {
                lineStyle: {
                    type: 'dashed'
                }
            }
        },
        series: [
            {
                name: 'Leave Days',
                type: 'line',
                smooth: true,
                data: [5, 12, 20, 10, 5, 5, 30, 5, 4, 2],
                lineStyle: { color: '#1F52DA', width: 3 },
                itemStyle: { color: '#1F52DA' },
            }
        ]
    };

    const donutChartOption = {
        tooltip: {
            trigger: 'item'
        },
        title: {
            text: '186',
            subtext: 'Total Days',
            left: 'center',
            top: 'center',
            textStyle: {
                fontSize: 48,
                fontWeight: 'bold',
                color: '#333333'
            },
            subtextStyle: {
                fontSize: 24,
                color: '#333333'
            }
        },
        series: [
            {
                name: 'Leave Type Breakdown',
                type: 'pie',
                radius: ['70%', '90%'],
                avoidLabelOverlap: false,
                label: { show: false },
                labelLine: { show: false },
                data: [
                    { value: 126, name: 'Annual Leave' },
                    { value: 28, name: 'Casual Leave' },
                    { value: 18, name: 'Sick Leave' },
                    { value: 14, name: 'Out of Office' }
                ],
                color: ['#009650', '#249EFF', '#EAB308', '#1F52DA']
            }
        ]
    };
    
    const legendData = [
        { color: 'bg-nimasa-green', label: 'Annual Leave', value: '126 days (68%)' },
        { color: 'bg-nimasa-sky-blue', label: 'Casual Leave', value: '28 days (15%)' },
        { color: 'bg-nimasa-gold', label: 'Sick Leave', value: '18 days (10%)' },
        { color: 'bg-nimasa-blue', label: 'Out of Office', value: '14 days (7%)' },
    ];

    return (
        <div className="bg-white rounded-3xl shadow-lg p-8 mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
                <div className="lg:col-span-3">
                    <h3 className="text-2xl md:text-3xl font-medium text-nimasa-dark-text">Departmental Leave Utilization</h3>
                    <p className="text-lg text-gray-600 mb-4">Monthly breakdown of leave days (Jan - Oct 2025)</p>
                    <ReactECharts option={lineChartOption} style={{ height: '350px' }} />
                </div>
                <div className="lg:col-span-2 flex flex-col items-center">
                    <h3 className="text-2xl md:text-3xl font-medium text-nimasa-dark-text mb-4">Leave Type Breakdown</h3>
                    <div className="relative w-full" style={{height: '250px'}}>
                        <ReactECharts option={donutChartOption} style={{ height: '100%' }} />
                    </div>
                    <div className="w-full mt-6 space-y-3">
                        {legendData.map(item => (
                            <LegendItem key={item.label} color={item.color} label={item.label} value={item.value} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReportCharts;
