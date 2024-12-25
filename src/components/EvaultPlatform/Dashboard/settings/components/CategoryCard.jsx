import React from 'react';
import * as Icons from 'lucide-react';
import { clsx } from 'clsx';

export const CategoryCard = ({ category, onSelect }) => {
  const IconComponent = Icons[category.icon];

  return (
    <button
      onClick={() => onSelect(category)}
      className={clsx(
        'w-full text-left',
        'p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200',
        'border border-gray-100 hover:border-gray-200',
        'transform hover:-translate-y-1',
        'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
      )}
    >
      <div className="flex items-center space-x-5">
        {IconComponent && (
          <div className="p-4 bg-blue-50 rounded-xl flex-shrink-0">
            <IconComponent className="w-10 h-10 text-blue-600" />
          </div>
        )}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900">{category.title}</h3>
          <p className="mt-2 text-lg text-gray-600">{category.description}</p>
        </div>
      </div>
    </button>
  );
};