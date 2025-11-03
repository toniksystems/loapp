import {
  LayoutDashboard,
  Settings,
  Users,
  ClipboardList,
  History,
  LogOut,
  X,
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

const adminNavItems = [
  { name: 'Dashboard', icon: LayoutDashboard, path: '/admin-dashboard' },
  { name: 'System Configuration', icon: Settings, path: '/system-configuration' },
  { name: 'User Management', icon: Users, path: '/user-management' },
  { name: 'All Applications', icon: ClipboardList, path: '/all-applications' },
  { name: 'Audit Log', icon: History, path: '/audit-log' },
];

const utilityItems = [
    { name: 'Log Out', icon: LogOut, path: '/login' },
]

interface AdminSidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const AdminSidebar = ({ isOpen, setIsOpen }: AdminSidebarProps) => {
  const logoUrl = "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/38d3/9dd7/620e6ef37bfb456fdb1e3dc3301dfdb2?Expires=1763337600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HtkMTAP~~71VQZGL2zZ0xm7z73tEZzQEWIBtwTJVhnZBDo76s53lm0DDQsZ0Uy0eznsobOc8LM4Z12yagANAa7~eV6RwmdoN8a-4TKPiMldtlsZJ1xRRGTtwXlfZODkBY2ulaZjB7kn3bF8gr52mVCw2gs6BTC9hbHKCnvzRFAYe~DkVbcDNgkzq3xncizVNOuKi1m4SUQyHqoG8uxBv2PRoWlj-Rp9FE5ZMbsnLGeCrObqg914DlDRdFca~7tftcK0VV8WavQAsXzuNnAU24uUFeaevTcgsyAihY5tbWtmHho3uAqCV8hoLtCJvt2QcwZ3DVmPN~LjJbKqoRkplHQ__";

  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden transition-opacity ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      ></div>
      <aside
        className={`w-64 bg-white h-screen flex flex-col fixed shadow-md z-40 transform transition-transform lg:transform-none ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-start justify-between py-3 px-4 border-b border-gray-200">
          <div className="flex flex-col items-center w-full">
            <img src={logoUrl} alt="NIMASA Logo" className="h-14 w-14 mb-1" />
            <h2 className="text-xs font-medium text-nimasa-dark-text">NIMASA Leave Portal</h2>
          </div>
          <button onClick={() => setIsOpen(false)} className="lg:hidden text-gray-500 hover:text-nimasa-red">
            <X size={24} />
          </button>
        </div>
        <nav className="flex-grow pt-2 overflow-y-auto" onClick={() => setIsOpen(false)}>
          <ul className="space-y-1">
            {adminNavItems.map((item, index) => (
              <li key={`admin-${index}`} className="px-2">
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-4 py-1.5 rounded-lg transition-colors duration-200 whitespace-pre-line text-nimasa-dark-text hover:bg-nimasa-blue/10 ${
                      isActive ? 'bg-nimasa-blue/10 text-nimasa-blue font-bold' : ''
                    }`
                  }
                >
                  <item.icon className="h-4 w-4" />
                  <span className="text-sm font-medium">{item.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="py-2 border-t border-gray-200">
             <ul className="space-y-1">
                {utilityItems.map((item, index) => (
                  <li key={`util-${index}`} className="px-2">
                    <NavLink
                      to={item.path}
                      className="flex items-center gap-2 px-4 py-1.5 rounded-lg transition-colors duration-200 whitespace-pre-line text-nimasa-red"
                    >
                      <item.icon className="h-4 w-4 text-nimasa-red" />
                      <span className="text-sm font-medium">{item.name}</span>
                    </NavLink>
                  </li>
                ))}
            </ul>
        </div>
      </aside>
    </>
  );
};

export default AdminSidebar;
