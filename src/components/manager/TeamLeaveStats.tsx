import { Briefcase, Clock, CheckCircle } from 'lucide-react';

const StatCard = ({ icon, value, label, color }: { icon: React.ReactNode, value: string, label: string, color: string }) => (
    <div className={`bg-white rounded-xl shadow-md p-3.5 flex items-center gap-3.5 border-l-4 ${color}`}>
        {icon}
        <div>
            <p className="text-xl font-bold text-nimasa-dark-text">{value}</p>
            <p className="text-xs text-gray-600">{label}</p>
        </div>
    </div>
);

const TeamLeaveStats = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <StatCard
                icon={<Briefcase size={28} className="text-nimasa-blue" />}
                value="03"
                label="Team on Leave Today"
                color="border-nimasa-blue"
            />
            <StatCard
                icon={<Clock size={28} className="text-nimasa-gold" />}
                value="05"
                label="Pending Requests"
                color="border-nimasa-gold"
            />
            <StatCard
                icon={<CheckCircle size={28} className="text-nimasa-green" />}
                value="12"
                label="Approved This Month"
                color="border-nimasa-green"
            />
        </div>
    );
};

export default TeamLeaveStats;
