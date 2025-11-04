import { useState } from 'react';
import AdminLayout from '../components/admin/AdminLayout';
import ConfigTabs from '../components/system-config/ConfigTabs';
import LeaveTypeManager from '../components/system-config/LeaveTypeManager';
import QuotaAllocationManager from '../components/system-config/QuotaAllocationManager';
import RoleManagementManager from '../components/system-config/RoleManagementManager';

type ConfigTab = 'leave-type' | 'quota-allocation' | 'role-management';

const SystemConfiguration = () => {
  const [activeTab, setActiveTab] = useState<ConfigTab>('role-management');

  const renderContent = () => {
    switch (activeTab) {
      case 'leave-type':
        return <LeaveTypeManager />;
      case 'quota-allocation':
        return <QuotaAllocationManager />;
      case 'role-management':
        return <RoleManagementManager />;
      default:
        return <RoleManagementManager />;
    }
  };

  return (
    <AdminLayout>
      <h1 className="text-2xl md:text-3xl font-bold text-nimasa-dark-text mb-10">System Configuration</h1>
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <ConfigTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="mt-10">
          {renderContent()}
        </div>
      </div>
    </AdminLayout>
  );
};

export default SystemConfiguration;
