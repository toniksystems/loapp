const staffOnLeave = [
    {
        name: 'Jane Mbaku',
        leaveType: 'Sick Leave',
        avatarUrl: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/328d/fead/1a3cbb96dcf03337a6c44f00bfb65cf0?Expires=1762732800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=dNP8jAu8HbfepWrRyoOopLKYdrzhdwHkxhkk4eC0WP-AmJjoR6TkdM~Ufx~k8Dclj1TSC3I5O0Lrsa5zvHv2uv8MRT637isTHRKxPPIk3IIy9ByflIlhy7P1P8N1csobBQqNhzq5BXNPozFLgroEyvE-sNJReSnb~lL4uTMMQqcdSrFgfYhe9Mw9iSpEXgkfzgWUbdEPeo29SicWXWippzwdTov9fXTOq7EwzPooVd4~4wkKOElyvxRNlYgBPQM1XlSYUFPrwnz2976BTOa3CK7kgJKgg1nYfSB9aE~EHwPv3YbSV~J-QKG1yRQp2YtZ4IIce-0XkOevCEXqbm1rGg__',
        leaveColor: 'bg-nimasa-gold'
    },
    {
        name: 'Sanusi Kadri',
        leaveType: 'Out-of-Office',
        avatarUrl: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/785a/eef1/625c5cfe4f04db7185fca9c1f1cf64cd?Expires=1762732800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FQZpPeqiWPhYXSUjhJ6HrShewedn73DbuEqBsOOTgjrWkyLd-86EgaA3MXRmS~6~M5c9ruxP87gtFxmDFRZ3IkpTlxxXsBU010-rdUff7hRE7~rtB7LdYsCTWd-GjXyv3EIlO9thrpiq7fd0HXfwCs69H3qTpV4IbYlQxzyKnGPVrqJ9-NVAnz8T0wGKDoif-ZEO~CmT41AU0hQ9oAzcY8ulopZGyuj7hySn7B4iQ3zMjUMHWG1WKENe1RlFIV-5GgNVOLE5f3f4AYqPTJWNn2VM16~ZtYCCIXr9SB7cLan0A1YH6w6UJc1~pH4x5IOZslUkq8qSXoSifPoMPeIqcw__',
        leaveColor: 'bg-nimasa-blue'
    },
    {
        name: 'Uche Okafor',
        leaveType: 'Casual Leave',
        avatarUrl: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/4964/90e4/805870eea0731647c52a61903243dc58?Expires=1762732800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bXTJFaOwskhTiqxA2cEaidOy0-H-Zipn-eivrv6jUeqRlqYKNZf4U2NmZwhGp1JI6vZ0imme2BRfVAj3741IGtTE48LAKlBHKJ60xhtwk1k-GxMdEcEUHTfbREJ5hZgNeMfDLTOHvZcQ0WAuk6Q6YkWVB-qVt9mIp0cqBI1rn3BrBvJa7WDFH53nMhKTr0n~CptehM~gKwR8qLldIvMIORzvZ4xe~xwdiNDxTSErt5mEwEHJD7yrDUvxLFWFx-g2s24N1orMg4NLvqbw4psz1maFWAnC0Ws~SbAm-8VUfsHhtkN6JVZokrOcwF~wR~iDi1-ShrtCbhYFk3L9RClMIA__',
        leaveColor: 'bg-nimasa-sky-blue'
    },
    {
        name: 'Akin Adebola',
        leaveType: 'Annual Leave',
        avatarUrl: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/e177/7767/d42d3b942aa4a5eb152d05f19a60ebaf?Expires=1762732800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WR319MyvDZrOh9t9pwpvb8n6XVGUpR6v5GJM71x4WXOrE220zEPBlnTGe3Lv3FW43M2IJgnoevK0Csd85d-S43rp2V2ry5gw1LjNMNgDcQzeHTMRfszLTxgfaCrJFepqloW3x6QJmcqLWDexuE0e8UvwFuIhSd5njPQ62SEkiHC5~ZggQIkVaGNkjYDfTjM-o00ualgpbNIOF0vDxmLP7cUWxiP65W9g9Vo4ZlB4vT~rIHuM2THtLchuq64nCf7b3q1Q6DTIdr4DYz1HU0zJnFXdWGPjewD90Wz-gjm3rriSUe6RNyeQPDAjnP0RokUaUipzacsgAx2aKS3urkVZvA__',
        leaveColor: 'bg-nimasa-green'
    }
];

const StaffOnLeave = () => {
    return (
        <div className="bg-white rounded-2xl shadow-md p-5 border border-gray-200">
            <h3 className="text-xl font-medium text-nimasa-dark-text mb-5">Staff on Leave This Month</h3>
            <div className="space-y-3.5">
                {staffOnLeave.map((staff, index) => (
                    <div key={index} className="flex items-center gap-3">
                        <img src={staff.avatarUrl} alt={staff.name} className="h-12 w-12 rounded-full" />
                        <div>
                            <p className="text-base font-medium text-nimasa-dark-text">{staff.name}</p>
                            <div className="flex items-center gap-2">
                                <div className={`w-2.5 h-2.5 rounded-full ${staff.leaveColor}`}></div>
                                <p className="text-sm text-gray-600">{staff.leaveType}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StaffOnLeave;
