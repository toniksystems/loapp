import { CheckCircle2, XCircle, Bed, Briefcase, PlaneTakeoff, Building2 } from 'lucide-react';

const requests = [
    {
        type: 'Sick Leave',
        icon: Bed,
        description: 'Your leave for October 13 has been approved. You are to resume on 27th October, 2025.',
        date: '10th Sept. 2025',
        status: 'Approved',
    },
    {
        type: 'Casual Leave',
        icon: Briefcase,
        description: 'Your leave for August 29 has been approved. You are to resume on 5th October, 2025.',
        date: '18th Aug. 2025',
        status: 'Approved',
    },
    {
        type: 'Annual Leave',
        icon: PlaneTakeoff,
        description: 'Your request for leave on May 29 has not been approved. Please contact your line manager.',
        date: '18th Aug. 2025',
        status: 'Rejected',
    },
    {
        type: 'Out-of-Office',
        icon: Building2,
        description: 'Your Out-of-Office was approved on the 2nd of July 2025. You are to resume on 7th July, 2025.',
        date: '30th June 2025',
        status: 'Approved',
    },
];

const StatusBadge = ({ status }: { status: 'Approved' | 'Rejected' }) => {
    const isApproved = status === 'Approved';
    return (
        <div className={`flex items-center justify-center gap-2.5 px-5 py-2 rounded-full text-white ${isApproved ? 'bg-nimasa-green' : 'bg-nimasa-red'}`}>
            {isApproved ? <CheckCircle2 size={18} /> : <XCircle size={18} />}
            <span className="font-medium text-lg">{status}</span>
        </div>
    );
};

const MyRequests = () => {
    return (
        <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-medium text-nimasa-dark-text mb-8">My Requests</h2>
            <div className="overflow-x-auto">
                <div className="min-w-[700px]">
                    {/* Table Header */}
                    <div className="grid grid-cols-12 gap-5 px-5 pb-5 text-lg font-medium text-gray-500 uppercase">
                        <div className="col-span-3">Leave Type</div>
                        <div className="col-span-5">Description</div>
                        <div className="col-span-2 text-center">Date</div>
                        <div className="col-span-2 text-center">Status</div>
                    </div>
                    {/* Table Body */}
                    <div className="space-y-6">
                        {requests.map((req, index) => (
                            <div key={index} className="border-t border-gray-100 pt-6">
                                <div className="grid grid-cols-12 gap-5 items-center px-5">
                                    <div className="col-span-3 flex items-center gap-5 text-lg">
                                        <req.icon size={24} className="text-gray-700 flex-shrink-0" />
                                        <span>{req.type}</span>
                                    </div>
                                    <div className="col-span-5 text-base text-gray-600">{req.description}</div>
                                    <div className="col-span-2 text-lg text-gray-600 text-center">{req.date}</div>
                                    <div className="col-span-2 flex justify-center">
                                        <StatusBadge status={req.status as 'Approved' | 'Rejected'} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyRequests;
