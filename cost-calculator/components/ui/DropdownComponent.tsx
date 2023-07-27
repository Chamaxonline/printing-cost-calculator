// components/ui/DropdownComponent.tsx
import React from "react";

interface Option {
  label: string;
  value: string;
}

interface DropdownProps {
  options: Option[];
  value: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const DropdownComponent: React.FC<DropdownProps> = ({
  options,
  value,
  placeholder,
  onChange,
}) => {
  return (
    <select
      id="default"
      className="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      value={value}
      onChange={onChange}
    >
      <option>{placeholder}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default DropdownComponent;
