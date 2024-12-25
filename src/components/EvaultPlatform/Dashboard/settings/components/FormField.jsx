import React from 'react';
import { clsx } from 'clsx';

export const FormField = ({ label, type, value, onChange, options, placeholder }) => {
  const inputClasses = clsx(
    'w-full p-4 border border-gray-300 rounded-lg',
    'focus:ring-2 focus:ring-blue-500 focus:border-blue-500',
    'transition-colors duration-200'
  );

  switch (type) {
    case 'toggle':
      return (
        <div className="flex items-center justify-between p-4">
          <span className="text-gray-700">{label}</span>
          <button
            onClick={() => onChange(!value)}
            className={clsx(
              'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent',
              'transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500',
              value ? 'bg-blue-600' : 'bg-gray-200'
            )}
          >
            <span
              className={clsx(
                'inline-block h-5 w-5 transform rounded-full bg-white transition duration-200 ease-in-out',
                value ? 'translate-x-5' : 'translate-x-0'
              )}
            />
          </button>
        </div>
      );
    case 'select':
      return (
        <div className="p-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
          <select className={inputClasses} value={value} onChange={e => onChange(e.target.value)}>
            {options.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      );
    default:
      return (
        <div className="p-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
          <input
            type={type}
            className={inputClasses}
            value={value}
            onChange={e => onChange(e.target.value)}
            placeholder={placeholder}
          />
        </div>
      );
  }
};