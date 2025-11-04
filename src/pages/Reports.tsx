import Layout from '../components/Layout';
import StatCard from '../components/reports/StatCard';
import ReportFilters from '../components/reports/ReportFilters';
import ReportCharts from '../components/reports/ReportCharts';
import { Users2, CheckCircle2, CalendarDays } from 'lucide-react';

const Reports = () => {
  return (
    <Layout>
      <h1 className="text-3xl md:text-4xl font-bold text-nimasa-dark-text mb-8">Departmental Report</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        <StatCard icon={<Users2 size={36} className="text-nimasa-dark-text" />} title="Department Staff" value="15" />
        <StatCard icon={<CheckCircle2 size={36} className="text-nimasa-green" />} title="Approved Request" value="5" />
        <StatCard icon={<CalendarDays size={36} className="text-nimasa-dark-text" />} title="Leave Days Used" value="18" />
      </div>
      <ReportFilters />
      <div className="mt-8">
        <ReportCharts />
      </div>
    </Layout>
  );
};

export default Reports;
