import { Briefcase, Clock, CheckCircle } from 'lucide-react';

const StatCard = ({ icon, value, label, color }: { icon: React.ReactNode, value: string, label: string, color: string }) => (
    <div className={`bg-white rounded-2xl shadow-md p-4 flex items-center gap-4 border-l-8 ${color}`}>
        {icon}
        <div>
            <p className="text-2xl font-bold text-nimasa-dark-text">{value}</p>
            <p className="text-sm text-gray-600">{label}</p>
        </div>
    </div>
);

const TeamLeaveStats = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard
                icon={<Briefcase size={32} className="text-nimasa-blue" />}
                value="03"
                label="Team on Leave Today"
                color="border-nimasa-blue"
            />
            <StatCard
                icon={<Clock size={32} className="text-nimasa-gold" />}
                value="05"
                label="Pending Requests"
                color="border-nimasa-gold"
            />
            <StatCard
                icon={<CheckCircle size={32} className="text-nimasa-green" />}
                value="12"
                label="Approved This Month"
                color="border-nimasa-green"
            />
        </div>
    );
};

export default TeamLeaveStats;
