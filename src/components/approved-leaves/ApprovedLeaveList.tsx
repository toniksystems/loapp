import { ApprovedRequest } from '../../types';
import ApprovedLeaveListItem from './ApprovedLeaveListItem';

const approvedLeaveData: ApprovedRequest[] = [
  {
    id: '1',
    employee: {
      name: 'Uche Okafor',
      avatarUrl: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/4964/90e4/805870eea0731647c52a61903243dc58?Expires=1762732800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bXTJFaOwskhTiqxA2cEaidOy0-H-Zipn-eivrv6jUeqRlqYKNZf4U2NmZwhGp1JI6vZ0imme2BRfVAj3741IGtTE48LAKlBHKJ60xhtwk1k-GxMdEcEUHTfbREJ5hZgNeMfDLTOHvZcQ0WAuk6Q6YkWVB-qVt9mIp0cqBI1rn3BrBvJa7WDFH53nMhKTr0n~CptehM~gKwR8qLldIvMIORzvZ4xe~xwdiNDxTSErt5mEwEHJD7yrDUvxLFWFx-g2s24N1orMg4NLvqbw4psz1maFWAnC0Ws~SbAm-8VUfsHhtkN6JVZokrOcwF~wR~iDi1-ShrtCbhYFk3L9RClMIA__',
      employeeId: 'MS/HR/2016-818',
    },
    leave: {
      type: 'Casual Leave',
      color: 'bg-nimasa-sky-blue',
      duration: 'Aug. 1 - Aug. 3 2025',
    },
    approver: {
      name: 'Sanusi Kadri',
      date: '14th Aug. 2025',
    },
    status: 'Approved',
  },
  {
    id: '2',
    employee: {
      name: 'Aisha Lawal',
      avatarUrl: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/fe73/9344/7374cdcc87483cc121fa5673b2ff88a3?Expires=1762732800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fYvk5FjscCy4m9XsTkQ5Qz8oJMJ4nS4Qb7e6mylNjXh2lyP5~43~xS0f2v~lZdYibbCBOn1~mMbPhHjfTdXP7eldjnerGClQbZU7VmNuSk9shcdgISWWbQxLYep4oDB0c7HkA6zIX8qVStRG4mH~~k2aNHLvRyoiHh7QPyGeL78eldtpCmV6yjrb~rPoWdUgEEHtvb~MrpLTR7Re9xOzUOBpP5IPddmjQ87UbWPK1WD0h1hJ93D6w2qCVbQyOOaigJ7rjgsClVcoYwgMaNfMhKUFwBDzc2Wpbi~0Gnqg0x4QSXAREcdFS4X92~6uXA8Up4erukLxgRrb0gcQ~BqXww__',
      employeeId: 'MS/HR/2023-918',
    },
    leave: {
      type: 'Out-of-Office',
      color: 'bg-nimasa-blue',
      duration: 'Nov. 1 - Nov. 4 2025',
    },
    approver: {
      name: 'Sanusi Kadri',
      date: '14th June. 2025',
    },
    status: 'Approved',
  },
  {
    id: '3',
    employee: {
      name: 'Ronald Richards',
      avatarUrl: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/841f/ef2f/2fee74c06511142a265d3665766990d3?Expires=1762732800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SG~f3Pk-dKrkzuZo03FxJLYEVuQRtetXDHWjCfZ0CcPwGfa67tasiqMm6hTT7wBm5DbLg2WsQmP7vk5kJwDGSmbeeqIYkHkv53zxfPaYJBrjE-9cltUjuH0h8aqi6IxwfEVOsJt0C9Iq4pLaXwukP7RYQLt~BQRK~joOEvX8334H8S5XA92BVxWUu5Xit9fy1JPLe~e0HTX0m1043uQwUofLo8afl0LvBCMPkHzB25RzVLy0WdjesdIdB8rjrVXmwLgA8n4EkNw-XuY0OyiP8aiVet2G49mRvYr1VJZbtvv7eYydE6U2eua9CeQ0bwdtYM7UzUSVGZmXNpBsIbCXAA__',
      employeeId: 'MS/HR/2012-118',
    },
    leave: {
      type: 'Paternity Leave',
      color: 'bg-maternity-purple',
      duration: 'Nov. 1 - Nov. 28 2025',
    },
    approver: {
      name: 'Sanusi Kadri',
      date: '27th Sept. 2025',
    },
    status: 'Approved',
  },
  {
    id: '4',
    employee: {
      name: 'Jane Mbaku',
      avatarUrl: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/328d/fead/1a3cbb96dcf03337a6c44f00bfb65cf0?Expires=1762732800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=dNP8jAu8HbfepWrRyoOopLKYdrzhdwHkxhkk4eC0WP-AmJjoR6TkdM~Ufx~k8Dclj1TSC3I5O0Lrsa5zvHv2uv8MRT637isTHRKxPPIk3IIy9ByflIlhy7P1P8N1csobBQqNhzq5BXNPozFLgroEyvE-sNJReSnb~lL4uTMMQqcdSrFgfYhe9Mw9iSpEXgkfzgWUbdEPeo29SicWXWippzwdTov9fXTOq7EwzPooVd4~4wkKOElyvxRNlYgBPQM1XlSYUFPrwnz2976BTOa3CK7kgJKgg1nYfSB9aE~EHwPv3YbSV~J-QKG1yRQp2YtZ4IIce-0XkOevCEXqbm1rGg__',
      employeeId: 'MS/HR/2022-518',
    },
    leave: {
      type: 'Sick Leave',
      color: 'bg-nimasa-gold',
      duration: 'Oct. 22 - Oct. 24 2025',
    },
    approver: {
      name: 'Sanusi Kadri',
      date: '14th Sept. 2025',
    },
    status: 'Approved',
  },
  {
    id: '5',
    employee: {
      name: 'Wale Adeyemo',
      avatarUrl: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/cca3/d125/eb5212f43af353bf7444ac03eaf37347?Expires=1762732800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=UKtTnq0nTZ0NQ1Q1BlJ712PwylL8Rbmv84aXU0Lrms8n6le97AwmZ2d4PZRuLUQtKqr5IGAXlhs3GyelKm1XlnFkXUpAbRDMhLucSytr9fHDpQ0P6cIzUIaJlM17CyXM-u3PH6MKgdaiU5im7Olrwytsc78T63tVyU-guc6TGWCeRuDraD4tMYruq9pH5siFlS6AhRjMmDyn7QKf5-P04KgLoShRQaUUCAQ7-MvWBReZsZL7r6gbMkuzYFiUiAkdVpVoE94S4kW1EGHAknIBBsqWvc4NnUjxH7emS-exo9PYzNhy6wJPuFzJXgFPf7jD3-7fgsUiaiGY2wZcgw3e0A__',
      employeeId: 'MS/HR/2013-198',
    },
    leave: {
      type: 'Annual Leave',
      color: 'bg-nimasa-green',
      duration: 'Oct 15 - Oct 24 2025',
    },
    approver: {
      name: 'Sanusi Kadri',
      date: '3rd Oct. 2025',
    },
    status: 'Approved',
  },
];


const ApprovedLeaveList = () => {
    return (
        <div className="overflow-x-auto">
            <div className="min-w-[1200px]">
                {/* Header */}
                <div className="grid grid-cols-12 gap-4 px-4 pb-4 text-xl font-medium text-nimasa-dark-text border-b-2 border-gray-200">
                    <div className="col-span-3">Employee Name and ID</div>
                    <div className="col-span-2">Leave Type</div>
                    <div className="col-span-2">Duration</div>
                    <div className="col-span-3">Approved By/Approved Date</div>
                    <div className="col-span-2 text-center">Status</div>
                </div>

                {/* Body */}
                <div className="divide-y divide-gray-200">
                    {approvedLeaveData.map((request) => (
                        <ApprovedLeaveListItem key={request.id} request={request} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ApprovedLeaveList;
