import {
  LayoutDashboard,
  User,
  CalendarDays,
  Plane,
  Scale,
  Calendar,
  LogOut,
  History,
  X,
  ClipboardCheck,
  BarChart3,
  ShieldCheck,
  Users2
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { name: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
  { name: 'My Profile', icon: User, path: '/profile' },
  { name: 'My Leaves', icon: CalendarDays, path: '/leaves' },
  { name: 'Leave History', icon: History, path: '/leave-history' },
  { name: 'Leave and Out of Office\nApplication', icon: Plane, path: '/apply-leave' },
  { name: 'Leave Balance', icon: Scale, path: '/leave-balance' },
  { name: 'Calendar', icon: Calendar, path: '/calendar' },
];

const managerNavItems = [
    { name: 'Manager Dashboard', icon: ShieldCheck, path: '/manager-dashboard' },
    { name: 'Leave Approvals', icon: ClipboardCheck, path: '/leave-approvals' },
    { name: 'Team Calendar', icon: Users2, path: '/team-calendar' },
    { name: 'Reports', icon: BarChart3, path: '/reports' },
];

const utilityItems = [
    { name: 'Log Out', icon: LogOut, path: '/login', isLogout: true },
]

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  const logoUrl = "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/38d3/9dd7/620e6ef37bfb456fdb1e3dc3301dfdb2?Expires=1762732800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=H4GbpajizxQ2lXk-4Rs1DSzcuWOmojsjYJVglTcCNGheKXK4uGqVMu91T6YsHTQbMyzmtz1f2eH0CH7DtuZBquS98n8z4L54LVjdIaQd1hO7m3bcgudKHQ1l3z0tQiNJr2LMQQlvpltbR~zyNuQdcNBuF9yWVgiZAw3-T54Oty5ug39CXtJgP5n2x-fYLFRXPYMvBZ9XMIP2AMyQeFHPMDAm~7Ov8Ws1fNZO9NTQSnHIzg18LitnbyPNxHQSR9S~Mp0IOan4r5DCV4p0wOam65LNv4~qn02kPVUpXyRN18ZSz2ssbmKsfM0LSaLmN6WggTENbHxc3yLkd5m67w60Tg__";

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
          <p className="px-6 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Employee</p>
          <ul className="space-y-1">
            {navItems.map((item, index) => (
              <li key={`emp-${index}`} className="px-2">
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
          <p className="px-6 mt-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Manager</p>
           <ul className="space-y-1">
            {managerNavItems.map((item, index) => (
              <li key={`mgr-${index}`} className="px-2">
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

export default Sidebar;
