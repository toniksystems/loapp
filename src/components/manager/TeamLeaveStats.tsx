import { Briefcase, Clock, CheckCircle } from 'lucide-react';

const StatCard = ({ icon, value, label, color }: { icon: React.ReactNode, value: string, label: string, color: string }) => (
    <div className={`bg-white rounded-3xl shadow-md p-6 flex items-center gap-6 border-l-8 ${color}`}>
        {icon}
        <div>
            <p className="text-5xl font-bold text-nimasa-dark-text">{value}</p>
            <p className="text-xl text-gray-600">{label}</p>
        </div>
    </div>
);

const TeamLeaveStats = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatCard
                icon={<Briefcase size={60} className="text-nimasa-blue" />}
                value="03"
                label="Team on Leave Today"
                color="border-nimasa-blue"
            />
            <StatCard
                icon={<Clock size={60} className="text-nimasa-gold" />}
                value="05"
                label="Pending Requests"
                color="border-nimasa-gold"
            />
            <StatCard
                icon={<CheckCircle size={60} className="text-nimasa-green" />}
                value="12"
                label="Approved This Month"
                color="border-nimasa-green"
            />
        </div>
    );
};

export default TeamLeaveStats;
