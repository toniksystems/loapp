import React from 'react';

interface FormInputProps {
  label: string;
  id: string;
  type?: string;
  defaultValue?: string;
  placeholder?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  id,
  type = 'text',
  defaultValue,
  placeholder,
}) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-nimasa-dark-text mb-1.5">
        {label}
      </label>
      <input
        type={type}
        id={id}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className="w-full bg-input-bg border border-gray-300 rounded-lg py-2 px-4 text-sm text-nimasa-dark-text focus:outline-none focus:ring-2 focus:ring-nimasa-blue"
      />
    </div>
  );
};

export default FormInput;
