// components/Select.tsx
import React, { ChangeEvent } from "react";

interface SelectProps {
  options: { label: string; value: string }[];
  value: number;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<SelectProps> = ({ options, value, onChange }) => {
  return (
    <select
      className="px-2 py-2 border rounded-md cursor-pointer border-1 border-black font-bold"
      value={value}
      onChange={onChange}
    >
      {options.map((option) => {
        if (option) {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        }
      })}
    </select>
  );
};

export default Select;
