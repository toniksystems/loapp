import React from 'react';

interface ProfileInputFieldProps {
  label: string;
  value: string;
  className?: string;
}

const ProfileInputField: React.FC<ProfileInputFieldProps> = ({ label, value, className = '' }) => {
  return (
    <div className={className}>
      <label className="block text-xl font-medium text-nimasa-dark-text mb-2.5">{label}</label>
      <div className="w-full px-6 py-4 bg-input-bg rounded-lg border border-gray-300 text-nimasa-dark-text text-xl">
        {value}
      </div>
    </div>
  );
};

export default ProfileInputField;
