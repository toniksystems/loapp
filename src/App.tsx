import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import MyLeaves from './pages/MyLeaves';
import LeaveHistory from './pages/LeaveHistory';
import LeaveApplication from './pages/LeaveApplication';
import LeaveBalance from './pages/LeaveBalance';
import CalendarPage from './pages/Calendar';
import ManagerDashboard from './pages/ManagerDashboard';
import LeaveApprovals from './pages/LeaveApprovals';
import Reports from './pages/Reports';
import AdminDashboard from './pages/AdminDashboard';
import AddNewStaff from './pages/AddNewStaff';
import BulkUpload from './pages/BulkUpload';
import SystemConfiguration from './pages/SystemConfiguration';
import UserManagement from './pages/UserManagement';
import AllApplications from './pages/AllApplications';
import AuditLogPage from './pages/AuditLogPage';

// A wrapper for the login page to apply its specific background
const LoginPage = () => {
  return (
    <div 
      className="min-h-screen w-full flex items-center justify-center lg:justify-end bg-[url('https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/6eeb/d522/eebcb06a93a708321dc86db398604082?Expires=1763337600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hwqvYqdQpnZu5vaFJo2Sr2SZHtV9WARXbAh41t8809xP4rKSXU7kMWoIbWVsXlEnVqZl8LOs61BEDMVjNOVKyrjjpwsCo1EESvMcxAxGRa5U7Uzc8DABW-EKQIDSzryw3OMO~ihBY5kKhzvpngo~~vVBpTnJQ3KCe7HYiHGU53HFU0soYJOdLPW6QF3gGWX1rw7eOPBzY6kaXRg~9GmACtnasjzZjzgY-256ZL3j0OinAfhBQRYPJz7~l0qt5LTE~yRG3s2i444OEj0qdzxaPNCr4bRSbsZoyrGkT1OVdjx~lKxzbBHAvQ4YvWbGHHQfM6FmWBJ-SJsA65yezfSXnA__')] bg-cover bg-center bg-no-repeat font-ubuntu p-4"
    >
      <div className="w-full lg:w-1/2 lg:mr-20 xl:mr-32">
        <Login />
      </div>
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/admin-dashboard" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/leaves" element={<MyLeaves />} />
      <Route path="/leave-history" element={<LeaveHistory />} />
      <Route path="/apply-leave" element={<LeaveApplication />} />
      <Route path="/leave-balance" element={<LeaveBalance />} />
      <Route path="/calendar" element={<CalendarPage defaultTab="my" />} />
      <Route path="/manager-dashboard" element={<ManagerDashboard />} />
      <Route path="/leave-approvals" element={<LeaveApprovals />} />
      <Route path="/team-calendar" element={<CalendarPage defaultTab="team" />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/add-new-staff" element={<AddNewStaff />} />
      <Route path="/bulk-upload" element={<BulkUpload />} />
      <Route path="/system-configuration" element={<SystemConfiguration />} />
      <Route path="/user-management" element={<UserManagement />} />
      <Route path="/all-applications" element={<AllApplications />} />
      <Route path="/audit-log" element={<AuditLogPage />} />
    </Routes>
  );
}

export default App;
