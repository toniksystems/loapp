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

// A wrapper for the login page to apply its specific background
const LoginPage = () => {
  const backgroundImageUrl = "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/6eeb/d522/eebcb06a93a708321dc86db398604082?Expires=1762732800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=BrDbermd7yird64EneCPNXcJOceKBlh5ts-OQb0VL2EKZ7fCgGQfdu44~vQaMveq3WyAt9CzqeIP2meqpG3xo0--q2PSig8qupo8dw-gfJyxUFYHr0JXd9E1hXvDissFttlPotDe4w9ZSsHOR7SQw5cKm7I0-YnwS9G7pcnTC5C3bR5A0n0nEo1W7P0N-~lwBEeP9DCzyG21NtiQqpfEPSnGwLfJJxz1PLpRY~6Ww6DPVqaHBQBb7BGQNl5h10VzeuVMWdBKq-e9yPNClRfhv86NbEu1CSVFL~KAcEP-tF2hSwiJD0P9gZpyowG3RKbjQ~lDqo~5m4AxZPQA1PBhdQ__";

  return (
    <div 
      className="min-h-screen w-full flex items-center justify-center lg:justify-end bg-cover bg-center font-ubuntu p-4 sm:p-6 lg:p-8"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
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
      <Route path="/" element={<Navigate to="/leave-approvals" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/leaves" element={<MyLeaves />} />
      <Route path="/leave-history" element={<LeaveHistory />} />
      <Route path="/apply-leave" element={<LeaveApplication />} />
      <Route path="/leave-balance" element={<LeaveBalance />} />
      <Route path="/calendar" element={<CalendarPage />} />
      <Route path="/manager-dashboard" element={<ManagerDashboard />} />
      <Route path="/leave-approvals" element={<LeaveApprovals />} />
    </Routes>
  );
}

export default App;
