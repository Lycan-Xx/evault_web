import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="inline-flex items-center space-x-3 text-gray-600 hover:text-gray-900 
                 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
                 rounded-lg px-4 py-2 hover:bg-gray-50 transition-colors duration-200"
      aria-label="Go back"
    >
      <ArrowLeft className="w-5 h-5" />
      <span className="text-base font-medium">Back</span>
    </button>
  );
};