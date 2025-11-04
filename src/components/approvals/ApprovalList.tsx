import ApprovalListItem from './ApprovalListItem';
import { LeaveApprovalRequest } from '../../types';

const leaveApprovalData: LeaveApprovalRequest[] = [
  {
    id: '1',
    employee: {
      name: 'Wale Adeyemo',
      avatarUrl: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/cca3/d125/eb5212f43af353bf7444ac03eaf37347?Expires=1762732800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=UKtTnq0nTZ0NQ1Q1BlJ712PwylL8Rbmv84aXU0Lrms8n6le97AwmZ2d4PZRuLUQtKqr5IGAXlhs3GyelKm1XlnFkXUpAbRDMhLucSytr9fHDpQ0P6cIzUIaJlM17CyXM-u3PH6MKgdaiU5im7Olrwytsc78T63tVyU-guc6TGWCeRuDraD4tMYruq9pH5siFlS6AhRjMmDyn7QKf5-P04KgLoShRQaUUCAQ7-MvWBReZsZL7r6gbMkuzYFiUiAkdVpVoE94S4kW1EGHAknIBBsqWvc4NnUjxH7emS-exo9PYzNhy6wJPuFzJXgFPf7jD3-7fgsUiaiGY2wZcgw3e0A__',
      title: 'Marine Safety Officer',
    },
    leave: {
      type: 'Annual Leave',
      color: 'bg-nimasa-green',
      duration: 'Oct 15 - Oct 24 2025',
      days: '10 working days',
    },
    impact: {
      risk: 'High',
      description: '2 other team members on leave during this period.',
    },
  },
  {
    id: '2',
    employee: {
      name: 'Alice Thompson',
      avatarUrl: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/b534/40be/9152958f9110a6ae074c56ee8d601e88?Expires=1762732800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=P1D2SeUSG-fzQpycIBSmOqW0QcwShYNeaYK~gcDkAdGojpFINAgGm-ZbV830cSdnKbOohY4VOqeFnQ5X0JuxrnPpXTtAGl7scqAYZHWWrvEbCxq-3pIzSsyNqC~nof4U2baQvuS~OY9ydGAmCHdEDzAk8-BWNltnPMD~-sEEygtkuzHuf0cqmKqW35pcvf7NE5wz1Kwmj8hj3DVjUJkVEEarPo9QgNiVk~Ts2-tnuwQbFEWMCXlK8OEn60Mx8CMxELnXBlxQmOsRwcl1uzW99oiB0nAzS~bn67Ss2epT0Lz2Qv-aaqPDyodHlc4-nmwBZ-PcPaCi9a8PbULOBNMQSQ__',
      title: 'Marine Inspector',
    },
    leave: {
      type: 'Out-of-Office',
      color: 'bg-nimasa-blue',
      duration: 'Oct 6 - Oct 8 2025',
      days: '2 working days',
    },
    impact: {
      risk: 'Low',
      description: 'Team coverage is adequate during this period',
    },
  },
  {
    id: '3',
    employee: {
      name: 'Chinwe Okoro',
      avatarUrl: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/9cb4/31da/85b71f09e3436bcbec7d9de80e2e735b?Expires=1762732800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=OtXLJ75xnc9bTelTLCJQOoxuTR-xbwbZCNWMGGPamCcgRyfbCsbznJZeHJOkoBi9~QQPlFiDHcGAQEOx4b2D5UHxP2OmWFtGcTObZ0IW4sNEhtbY5AlPhmLhC0ADFOe--pkbLhscCvZ9aYK35dGvnI3fabxY2dfsdJXTl~nJXCRx4I0iNMDPqQmkolsZiQB4kKPlL3MHhFnELyP-JoI-erZ0M4E0Nu7tFOEBsZKDv9E8elvkNluJHpDZ9VvsW3my5LYmvgqqgkVXMuOTbbTuUpJZQWmYFqU6wZz~YWxR8IwbQ4f05ivrNMZ9knrQvyy7nZbTHagK2KLPgVmUEZr6ag__',
      title: 'Operations Officer',
    },
    leave: {
      type: 'Sick Leave',
      color: 'bg-nimasa-gold',
      duration: 'Oct 9 - Oct 11 2025',
      days: '2 working days',
    },
    impact: {
      risk: 'Medium',
      description: 'A team member is scheduled to return on the 8th of October',
    },
  },
  {
    id: '4',
    employee: {
      name: 'Uche Okafor',
      avatarUrl: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/3147/928b/3ea929873a4addb9afd76bb9aa1741db?Expires=1762732800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=BNVmsklkS~fCtZVhDp-lrCGO0EY93~kUxSxoPfP92E0v~CrxM837HBOTqMbEUAbnl4FBfk5K3pElrwuOIG7oAmnOe3v0EP4i2iWmm0Q9WHWqS410DqMK9Mf-fPZJAXaS98j8g3pjYyOqs4nfI05dnHAJ5i6l~e-A~pGH39XeNVC8enjL9fYX~IuQzTT6m6ThCf1BS~sed57MoTPMljN8soky5-WMADdeec9k4QXefrknI7Pb4BQV~QGnXTO25k1eRgXiIx6p6WfTBq-WJYO-0dw3Iv05m-M0vYZi66KPcteGaBQRbA1JtFyRoutOdJuWuj3eG~J91uw9vBo9YA4NIQ__',
      title: 'Marine Safety Officer',
    },
    leave: {
      type: 'Casual Leave',
      color: 'bg-nimasa-sky-blue',
      duration: 'Oct 28 - Oct 31 2025',
      days: '4 working days',
    },
    impact: {
      risk: 'Low',
      description: 'Team coverage is adequate during this period',
    },
  },
  {
    id: '5',
    employee: {
      name: 'Ronald Richards',
      avatarUrl: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/841f/ef2f/2fee74c06511142a265d3665766990d3?Expires=1762732800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SG~f3Pk-dKrkzuZo03FxJLYEVuQRtetXDHWjCfZ0CcPwGfa67tasiqMm6hTT7wBm5DbLg2WsQmP7vk5kJwDGSmbeeqIYkHkv53zxfPaYJBrjE-9cltUjuH0h8aqi6IxwfEVOsJt0C9Iq4pLaXwukP7RYQLt~BQRK~joOEvX8334H8S5XA92BVxWUu5Xit9fy1JPLe~e0HTX0m1043uQwUofLo8afl0LvBCMPkHzB25RzVLy0WdjesdIdB8rjrVXmwLgA8n4EkNw-XuY0OyiP8aiVet2G49mRvYr1VJZbtvv7eYydE6U2eua9CeQ0bwdtYM7UzUSVGZmXNpBsIbCXAA__',
      title: 'Marine Inspector',
    },
    leave: {
      type: 'Out-of-Office',
      color: 'bg-nimasa-blue',
      duration: 'Oct 7 - Oct 9 2025',
      days: '2 working days',
    },
    impact: {
      risk: 'High',
      description: '3 other team members on leave during this period',
    },
  },
  {
    id: '6',
    employee: {
      name: 'Aisha Lawal',
      avatarUrl: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/fe73/9344/7374cdcc87483cc121fa5673b2ff88a3?Expires=1762732800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fYvk5FjscCy4m9XsTkQ5Qz8oJMJ4nS4Qb7e6mylNjXh2lyP5~43~xS0f2v~lZdYibbCBOn1~mMbPhHjfTdXP7eldjnerGClQbZU7VmNuSk9shcdgISWWbQxLYep4oDB0c7HkA6zIX8qVStRG4mH~~k2aNHLvRyoiHh7QPyGeL78eldtpCmV6yjrb~rPoWdUgEEHtvb~MrpLTR7Re9xOzUOBpP5IPddmjQ87UbWPK1WD0h1hJ93D6w2qCVbQyOOaigJ7rjgsClVcoYwgMaNfMhKUFwBDzc2Wpbi~0Gnqg0x4QSXAREcdFS4X92~6uXA8Up4erukLxgRrb0gcQ~BqXww__',
      title: 'Marine Inspector',
    },
    leave: {
      type: 'Annual Leave',
      color: 'bg-nimasa-green',
      duration: 'Oct 27 - Nov 10 2025',
      days: '10 working days',
    },
    impact: {
      risk: 'Medium',
      description: 'A team member is scheduled to return on the 8th of October',
    },
  },
  {
    id: '7',
    employee: {
      name: 'Jane Mbaku',
      avatarUrl: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/328d/fead/1a3cbb96dcf03337a6c44f00bfb65cf0?Expires=1762732800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=dNP8jAu8HbfepWrRyoOopLKYdrzhdwHkxhkk4eC0WP-AmJjoR6TkdM~Ufx~k8Dclj1TSC3I5O0Lrsa5zvHv2uv8MRT637isTHRKxPPIk3IIy9ByflIlhy7P1P8N1csobBQqNhzq5BXNPozFLgroEyvE-sNJReSnb~lL4uTMMQqcdSrFgfYhe9Mw9iSpEXgkfzgWUbdEPeo29SicWXWippzwdTov9fXTOq7EwzPooVd4~4wkKOElyvxRNlYgBPQM1XlSYUFPrwnz2976BTOa3CK7kgJKgg1nYfSB9aE~EHwPv3YbSV~J-QKG1yRQp2YtZ4IIce-0XkOevCEXqbm1rGg__',
      title: 'Operations Officer',
    },
    leave: {
      type: 'Maternity Leave',
      color: 'bg-maternity-purple',
      duration: 'Nov 4th - May 6 2025',
      days: '6 months',
    },
    impact: {
      risk: 'Medium',
      description: 'A team member is scheduled to return on the 8th of October',
    },
  },
];

const ApprovalList = () => {
    return (
        <div className="overflow-x-auto">
            <div className="min-w-[950px]">
                {/* Header */}
                <div className="grid grid-cols-12 gap-5 px-5 pb-4 text-base font-medium text-nimasa-dark-text border-b-2 border-nimasa-sky-blue/30">
                    <div className="col-span-3">Employee Name</div>
                    <div className="col-span-2">Leave Type</div>
                    <div className="col-span-2">Duration</div>
                    <div className="col-span-3">Team Impact</div>
                    <div className="col-span-2 text-center">Actions</div>
                </div>

                {/* Body */}
                <div className="divide-y divide-gray-200">
                    {leaveApprovalData.map((request) => (
                        <ApprovalListItem key={request.id} request={request} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ApprovalList;
