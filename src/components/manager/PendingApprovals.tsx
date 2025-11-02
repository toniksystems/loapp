const pendingRequests = [
    {
        name: 'Wale Adeyemo',
        avatar: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/3147/928b/3ea929873a4addb9afd76bb9aa1741db?Expires=1762732800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=BNVmsklkS~fCtZVhDp-lrCGO0EY93~kUxSxoPfP92E0v~CrxM837HBOTqMbEUAbnl4FBfk5K3pElrwuOIG7oAmnOe3v0EP4i2iWmm0Q9WHWqS410DqMK9Mf-fPZJAXaS98j8g3pjYyOqs4nfI05dnHAJ5i6l~e-A~pGH39XeNVC8enjL9fYX~IuQzTT6m6ThCf1BS~sed57MoTPMljN8soky5-WMADdeec9k4QXefrknI7Pb4BQV~QGnXTO25k1eRgXiIx6p6WfTBq-WJYO-0dw3Iv05m-M0vYZi66KPcteGaBQRbA1JtFyRoutOdJuWuj3eG~J91uw9vBo9YA4NIQ__',
        leaveType: 'Sick Leave',
        dates: 'Oct 20 - Oct 22, 2025',
        days: 3,
    },
    {
        name: 'Alice Thompson',
        avatar: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/b534/40be/9152958f9110a6ae074c56ee8d601e88?Expires=1762732800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=P1D2SeUSG-fzQpycIBSmOqW0QcwShYNeaYK~gcDkAdGojpFINAgGm-ZbV830cSdnKbOohY4VOqeFnQ5X0JuxrnPpXTtAGl7scqAYZHWWrvEbCxq-3pIzSsyNqC~nof4U2baQvuS~OY9ydGAmCHdEDzAk8-BWNltnPMD~-sEEygtkuzHuf0cqmKqW35pcvf7NE5wz1Kwmj8hj3DVjUJkVEEarPo9QgNiVk~Ts2-tnuwQbFEWMCXlK8OEn60Mx8CMxELnXBlxQmOsRwcl1uzW99oiB0nAzS~bn67Ss2epT0Lz2Qv-aaqPDyodHlc4-nmwBZ-PcPaCi9a8PbULOBNMQSQ__',
        leaveType: 'Annual Leave',
        dates: 'Nov 10 - Nov 15, 2025',
        days: 5,
    },
    {
        name: 'Seun Idowu',
        avatar: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/cca3/d125/eb5212f43af353bf7444ac03eaf37347?Expires=1762732800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=UKtTnq0nTZ0NQ1Q1BlJ712PwylL8Rbmv84aXU0Lrms8n6le97AwmZ2d4PZRuLUQtKqr5IGAXlhs3GyelKm1XlnFkXUpAbRDMhLucSytr9fHDpQ0P6cIzUIaJlM17CyXM-u3PH6MKgdaiU5im7Olrwytsc78T63tVyU-guc6TGWCeRuDraD4tMYruq9pH5siFlS6AhRjMmDyn7QKf5-P04KgLoShRQaUUCAQ7-MvWBReZsZL7r6gbMkuzYFiUiAkdVpVoE94S4kW1EGHAknIBBsqWvc4NnUjxH7emS-exo9PYzNhy6wJPuFzJXgFPf7jD3-7fgsUiaiGY2wZcgw3e0A__',
        leaveType: 'Casual Leave',
        dates: 'Oct 28, 2025',
        days: 1,
    },
];

const PendingApprovals = () => {
    return (
        <div className="bg-white rounded-3xl shadow-md p-8 h-full">
            <h2 className="text-3xl font-medium text-nimasa-dark-text mb-6">Pending Approvals</h2>
            <div className="space-y-4">
                {pendingRequests.map((req, index) => (
                    <div key={index} className="bg-input-bg rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                            <img src={req.avatar} alt={req.name} className="h-16 w-16 rounded-full" />
                            <div>
                                <p className="font-bold text-lg text-nimasa-dark-text">{req.name}</p>
                                <p className="text-base text-gray-600">{req.leaveType}</p>
                                <p className="text-base text-gray-600">{req.dates} ({req.days} days)</p>
                            </div>
                        </div>
                        <button className="bg-nimasa-blue text-white font-bold py-3 px-6 rounded-full text-base shadow-md hover:bg-blue-700 transition-colors w-full sm:w-auto">
                            Review Request
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PendingApprovals;
