import { Bell, Menu } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header = ({ onMenuClick }: HeaderProps) => {
  const profileIconUrl = "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/e177/7767/d42d3b942aa4a5eb152d05f19a60ebaf?Expires=1762732800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WR319MyvDZrOh9t9pwpvb8n6XVGUpR6v5GJM71x4WXOrE220zEPBlnTGe3Lv3FW43M2IJgnoevK0Csd85d-S43rp2V2ry5gw1LjNMNgDcQzeHTMRfszLTxgfaCrJFepqloW3x6QJmcqLWDexuE0e8UvwFuIhSd5njPQ62SEkiHC5~ZggQIkVaGNkjYDfTjM-o00ualgpbNIOF0vDxmLP7cUWxiP65W9g9Vo4ZlB4vT~rIHuM2THtLchuq64nCf7b3q1Q6DTIdr4DYz1HU0zJnFXdWGPjewD90Wz-gjm3rriSUe6RNyeQPDAjnP0RokUaUipzacsgAx2aKS3urkVZvA__";

  return (
    <header className="bg-white shadow-sm py-4 px-8 flex justify-between items-center lg:justify-end">
      <button onClick={onMenuClick} className="lg:hidden text-gray-600 hover:text-nimasa-blue">
        <Menu size={28} />
      </button>
      <div className="flex items-center gap-6">
        <div className="relative cursor-pointer">
          <Bell className="h-6 w-6 text-gray-600" />
          <div className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
            3
          </div>
        </div>
        <img src={profileIconUrl} alt="Profile" className="h-16 w-16 rounded-full border-2 border-nimasa-blue" />
      </div>
    </header>
  );
};

export default Header;
