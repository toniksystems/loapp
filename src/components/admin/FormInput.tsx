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
      <label htmlFor={id} className="block text-lg font-medium text-nimasa-dark-text mb-2.5">
        {label}
      </label>
      <input
        type={type}
        id={id}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className="w-full bg-input-bg border border-gray-300 rounded-lg py-3 px-5 text-lg text-nimasa-dark-text focus:outline-none focus:ring-2 focus:ring-nimasa-blue"
      />
    </div>
  );
};

export default FormInput;
