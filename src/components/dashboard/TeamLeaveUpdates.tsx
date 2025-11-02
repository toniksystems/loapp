const updates = [
    {
        avatarUrl: 'https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/3147/928b/3ea929873a4addb9afd76bb9aa1741db?Expires=1762732800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=BNVmsklkS~fCtZVhDp-lrCGO0EY93~kUxSxoPfP92E0v~CrxM837HBOTqMbEUAbnl4FBfk5K3pElrwuOIG7oAmnOe3v0EP4i2iWmm0Q9WHWqS410DqMK9Mf-fPZJAXaS98j8g3pjYyOqs4nfI05dnHAJ5i6l~e-A~pGH39XeNVC8enjL9fYX~IuQzTT6m6ThCf1BS~sed57MoTPMljN8soky5-WMADdeec9k4QXefrknI7Pb4BQV~QGnXTO25k1eRgXiIx6p6WfTBq-WJYO-0dw3Iv05m-M0vYZi66KPcteGaBQRbA1JtFyRoutOdJuWuj3eG~J91uw9vBo9YA4NIQ__',
        message: 'Wale Adeyemo is on Sick Leave',
        details: 'He is expected to resume on the 27th of September, 2025',
        time: '5 minutes ago',
    },
    {
        avatarUrl: 'https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/b534/40be/9152958f9110a6ae074c56ee8d601e88?Expires=1762732800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=P1D2SeUSG-fzQpycIBSmOqW0QcwShYNeaYK~gcDkAdGojpFINAgGm-ZbV830cSdnKbOohY4VOqeFnQ5X0JuxrnPpXTtAGl7scqAYZHWWrvEbCxq-3pIzSsyNqC~nof4U2baQvuS~OY9ydGAmCHdEDzAk8-BWNltnPMD~-sEEygtkuzHuf0cqmKqW35pcvf7NE5wz1Kwmj8hj3DVjUJkVEEarPo9QgNiVk~Ts2-tnuwQbFEWMCXlK8OEn60Mx8CMxELnXBlxQmOsRwcl1uzW99oiB0nAzS~bn67Ss2epT0Lz2Qv-aaqPDyodHlc4-nmwBZ-PcPaCi9a8PbULOBNMQSQ__',
        message: 'Alice Thompson is Out-of-Office',
        details: 'She is expected to resume on the 30th of September, 2025.',
        time: '1 hour ago',
    },
    {
        avatarUrl: 'https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/e62d/4420/8c3dcea9d18b79ddcf082e41a79a9ac4?Expires=1762732800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=EsePk94fwmV8vY98eC8eCKlpzvNtLowXbDIjVfJHe74Mp1T~jUWCBUkM1-kSa2yiLUJJgItaFqxGtPBU8U4cPmKJQpzf0cT3spoQRzAVFkJxWMzjQxVGbXcZ9Dizx8XtARf9eXRyNaRFBNB45p8ztWO5-FYGmQyLNWhH2MNqR35xR-U~tMgNYCellK0iJfUwISX~6oDpbMMbylnX4OEsVO7Lc~jVqVvLSf0SzeOQKHKZhDwZP1EBTX105fr99tUvhkcBQxynMMkT1k2O~r2AWBPlIBdrXJjqJ1lB~BUOmhwWtJWuXkb8SvYnaR~1ZhuTfmbyGHQ-lAcVIV-JwQTNoQ__',
        message: 'Aisha Bello is on Maternity Leave',
        details: 'He is expected to resume on the 27th of September, 2025',
        time: '2 hours ago',
    },
    {
        avatarUrl: 'https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/cca3/d125/eb5212f43af353bf7444ac03eaf37347?Expires=1762732800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=UKtTnq0nTZ0NQ1Q1BlJ712PwylL8Rbmv84aXU0Lrms8n6le97AwmZ2d4PZRuLUQtKqr5IGAXlhs3GyelKm1XlnFkXUpAbRDMhLucSytr9fHDpQ0P6cIzUIaJlM17CyXM-u3PH6MKgdaiU5im7Olrwytsc78T63tVyU-guc6TGWCeRuDraD4tMYruq9pH5siFlS6AhRjMmDyn7QKf5-P04KgLoShRQaUUCAQ7-MvWBReZsZL7r6gbMkuzYFiUiAkdVpVoE94S4kW1EGHAknIBBsqWvc4NnUjxH7emS-exo9PYzNhy6wJPuFzJXgFPf7jD3-7fgsUiaiGY2wZcgw3e0A__',
        message: 'Seun Idowu is on Casual Leave',
        details: 'He is expected to resume on the 27th of September, 2025',
        time: '3 days ago',
    },
];

const TeamLeaveUpdates = () => {
    return (
        <div className="bg-white rounded-3xl shadow-md p-8">
            <h2 className="text-3xl font-medium text-nimasa-dark-text mb-6">Team Leave Updates</h2>
            <div className="space-y-6">
                {updates.map((update, index) => (
                    <div key={index} className="flex items-start gap-4 border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                        <img src={update.avatarUrl} alt="avatar" className="h-16 w-16 rounded-full" />
                        <div className="flex-grow">
                            <p className="font-medium text-lg text-nimasa-dark-text">{update.message}</p>
                            <p className="text-base text-gray-600">{update.details}</p>
                        </div>
                        <span className="text-sm text-gray-500 flex-shrink-0">{update.time}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeamLeaveUpdates;
