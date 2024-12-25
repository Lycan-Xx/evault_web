import React from 'react';
import { BackButton } from './BackButton';

export const SettingsHeader = ({ title, description }) => {
  return (
    <div className="mb-10">
      <BackButton />
      <h1 className="mt-6 text-4xl font-bold text-gray-900">{title}</h1>
      {description && (
        <p className="mt-3 text-lg text-gray-600">{description}</p>
      )}
    </div>
  );
};