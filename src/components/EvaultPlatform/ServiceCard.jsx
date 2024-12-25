import React from 'react';


const ServiceCard = ({ icon, title }) => {
  return (
    <div className="flex flex-col items-center p-2.5 border rounded-lg hover:shadow-md transition-shadow cursor-pointer">
      <div className="text-[#2B7A9E] mb-1.5">{icon}</div>
      <span className="text-xs font-medium text-gray-700 text-center">{title}</span>
    </div>
  )
}

export default ServiceCard;
