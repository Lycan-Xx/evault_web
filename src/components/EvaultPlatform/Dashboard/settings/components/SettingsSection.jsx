import React from 'react';

export const SettingsSection = ({ title, description, children }) => {
  return (
    <div className="py-8">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
        {description && (
          <p className="mt-2 text-base text-gray-600">{description}</p>
        )}
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        {children}
      </div>
    </div>
  );
};