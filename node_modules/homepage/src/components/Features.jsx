import React from 'react';
import { Clock, Shield, HeadphonesIcon } from 'lucide-react';

const features = [
  {
    icon: <Clock className="w-12 h-12 text-orange-500" />,
    title: 'Automated Services',
    description: 'We provide fast and automated recharge services. Our data delivers and wallet funding is automated.'
  },
  {
    icon: <Shield className="w-12 h-12 text-purple-500" />,
    title: 'We Are Reliable',
    description: 'Safe and reliable in our services. Over 100% satisfaction for our subscribers.'
  },
  {
    icon: <HeadphonesIcon className="w-12 h-12 text-teal-500" />,
    title: '24/7 Customer Support',
    description: 'Our customer care support is always available, satisfying our customers is our topmost priority.'
  }
];

const Features = () => {
  return (
    <div className="px-6 md:px-16 py-20 bg-white p-5">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;