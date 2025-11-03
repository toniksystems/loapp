import React from 'react';

interface ProfileInputFieldProps {
  label: string;
  value: string;
  className?: string;
}

const ProfileInputField: React.FC<ProfileInputFieldProps> = ({ label, value, className = '' }) => {
  return (
    <div className={className}>
      <label className="block text-sm font-medium text-nimasa-dark-text mb-1.5">{label}</label>
      <div className="w-full px-4 py-2 bg-input-bg rounded-lg border border-gray-300 text-nimasa-dark-text text-sm">
        {value}
      </div>
    </div>
  );
};

export default ProfileInputField;
