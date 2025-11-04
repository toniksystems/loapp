const teamOnLeave = [
    {
        name: 'Aisha Bello',
        avatar: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/e62d/4420/8c3dcea9d18b79ddcf082e41a79a9ac4?Expires=1762732800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=EsePk94fwmV8vY98eC8eCKlpzvNtLowXbDIjVfJHe74Mp1T~jUWCBUkM1-kSa2yiLUJJgItaFqxGtPBU8U4cPmKJQpzf0cT3spoQRzAVFkJxWMzjQxVGbXcZ9Dizx8XtARf9eXRyNaRFBNB45p8ztWO5-FYGmQyLNWhH2MNqR35xR-U~tMgNYCellK0iJfUwISX~6oDpbMMbylnX4OEsVO7Lc~jVqVvLSf0SzeOQKHKZhDwZP1EBTX105fr99tUvhkcBQxynMMkT1k2O~r2AWBPlIBdrXJjqJ1lB~BUOmhwWtJWuXkb8SvYnaR~1ZhuTfmbyGHQ-lAcVIV-JwQTNoQ__',
        leaveType: 'Maternity Leave',
        returnDate: 'Returns Dec 15, 2025',
    },
    {
        name: 'John Doe',
        avatar: 'https://i.pravatar.cc/150?u=john',
        leaveType: 'Annual Leave',
        returnDate: 'Returns Nov 05, 2025',
    },
    {
        name: 'Jane Smith',
        avatar: 'https://i.pravatar.cc/150?u=jane',
        leaveType: 'Sick Leave',
        returnDate: 'Returns Oct 29, 2025',
    },
];

const TeamOnLeave = () => {
    return (
        <div className="bg-white rounded-2xl shadow-md p-6 h-full">
            <h2 className="text-xl font-medium text-nimasa-dark-text mb-6">Team on Leave</h2>
            <div className="space-y-5">
                {teamOnLeave.map((member, index) => (
                    <div key={index} className="flex items-center gap-4">
                        <img src={member.avatar} alt={member.name} className="h-12 w-12 rounded-full" />
                        <div>
                            <p className="font-bold text-base text-nimasa-dark-text">{member.name}</p>
                            <p className="text-sm text-gray-600">{member.leaveType}</p>
                            <p className="text-sm text-nimasa-red font-medium">{member.returnDate}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeamOnLeave;
