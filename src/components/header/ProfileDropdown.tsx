import {
  Briefcase,
  Building2,
  Mail,
  Pencil,
  Phone,
  Users,
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface InfoItemProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  isWide?: boolean;
}

const InfoItem: React.FC<InfoItemProps> = ({ icon, title, value, isWide = false }) => (
  <div className="flex items-start gap-2">
    <div className="mt-0.5 text-gray-500">{icon}</div>
    <div className={isWide ? 'w-full' : ''}>
      <p className="font-bold text-xs text-nimasa-dark-text">{title}</p>
      <p className="text-xs text-gray-700 break-words">{value}</p>
    </div>
  </div>
);

const ProfileDropdown = () => {
  const profileImageUrl = "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/e177/7767/d42d3b942aa4a5eb152d05f19a60ebaf?Expires=1762732800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WR319MyvDZrOh9t9pwpvb8n6XVGUpR6v5GJM71x4WXOrE220zEPBlnTGe3Lv3FW43M2IJgnoevK0Csd85d-S43rp2V2ry5gw1LjNMNgDcQzeHTMRfszLTxgfaCrJFepqloW3x6QJmcqLWDexuE0e8UvwFuIhSd5njPQ62SEkiHC5~ZggQIkVaGNkjYDfTjM-o00ualgpbNIOF0vDxmLP7cUWxiP65W9g9Vo4ZlB4vT~rIHuM2THtLchuq64nCf7b3q1Q6DTIdr4DYz1HU0zJnFXdWGPjewD90Wz-gjm3rriSUe6RNyeQPDAjnP0RokUaUipzacsgAx2aKS3urkVZvA__";

  return (
    <div className="absolute top-full right-0 mt-2 w-60 bg-[#F5F5F5] rounded-xl shadow-lg border border-gray-200 p-3 z-50">
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-3 self-start">
          <img src={profileImageUrl} alt="Akin Adebola" className="h-10 w-10 rounded-full border-2 border-nimasa-blue" />
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-nimasa-green"></span>
            <span className="font-bold text-sm text-nimasa-dark-text">In Office</span>
          </div>
        </div>

        <div className="text-center my-3">
          <h3 className="text-base font-medium text-nimasa-dark-text">Akin Adebola</h3>
          <p className="text-xs text-gray-600">MS/HR/2015-331</p>
        </div>
      </div>

      <div className="space-y-2.5 mb-3">
        <InfoItem icon={<Briefcase size={14} />} title="Job Title" value="Maritime Safety Officer" />
        <InfoItem icon={<Building2 size={14} />} title="Department" value="Marine Environment Management" isWide={true} />
        <InfoItem icon={<Mail size={14} />} title="Email" value="Akin.A@nimasa.gov.ng" isWide={true} />
        <InfoItem icon={<Phone size={14} />} title="Phone" value="+23481000000009" />
        <InfoItem icon={<Users size={14} />} title="Supervisor" value="Sanusi Kadri" />
      </div>

      <Link
        to="/profile"
        className="flex items-center justify-center gap-2 w-full bg-nimasa-blue text-white font-bold py-1.5 px-4 rounded-lg text-sm shadow-md hover:bg-blue-700 transition-colors"
      >
        <Pencil size={16} />
        <span>Edit Profile</span>
      </Link>
    </div>
  );
};

export default ProfileDropdown;
