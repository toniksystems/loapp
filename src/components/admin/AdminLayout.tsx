import { useState, ReactNode } from 'react';
import AdminSidebar from './AdminSidebar';
import Header from '../dashboard/Header';
import Footer from '../dashboard/Footer';

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="bg-background-gray min-h-screen font-ubuntu">
      <AdminSidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      <div className="lg:ml-96">
        <Header onMenuClick={() => setSidebarOpen(true)} />
        <main className="p-10 md:p-14">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default AdminLayout;
