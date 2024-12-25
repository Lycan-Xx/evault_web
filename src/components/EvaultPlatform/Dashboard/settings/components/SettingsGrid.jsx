import React from 'react';
import { CategoryCard } from './CategoryCard';
import { settingsCategories } from '../data/categories';

export const SettingsGrid = ({ onSettingSelect }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {settingsCategories.map((category) => (
        <CategoryCard 
          key={category.id} 
          category={category} 
          onSelect={onSettingSelect}
        />
      ))}
    </div>
  );
};