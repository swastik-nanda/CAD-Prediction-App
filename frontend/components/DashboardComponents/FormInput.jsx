import React, { useState } from "react";
import { HelpCircle } from "lucide-react";

const FormInput = ({
  label,
  name,
  type,
  value,
  onChange,
  placeholder,
  min,
  max,
  step,
  tooltip,
  required = false,
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative">
      <label
        htmlFor={name}
        className="text-sm font-medium text-gray-700 mb-1 flex items-center"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}

        {tooltip && (
          <div className="relative inline-block ml-1">
            <HelpCircle
              size={16}
              className="text-blue-500 cursor-pointer hover:text-blue-700 transition-colors"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              onClick={() => setShowTooltip(!showTooltip)}
            />

            {showTooltip && (
              <div className="absolute z-10 w-64 p-2 bg-gray-800 text-white text-xs rounded shadow-lg -left-28 top-6">
                {tooltip}
                <div className="absolute -top-1 left-32 w-2 h-2 bg-gray-800 transform rotate-45"></div>
              </div>
            )}
          </div>
        )}
      </label>

      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        min={min}
        max={max}
        step={step}
        required={required}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
      />
    </div>
  );
};

export default FormInput;
