import React from 'react';
import { Clock, Shield, HeadphonesIcon } from 'lucide-react';

const features = [
  {
    icon: <Clock className="w-12 h-12 text-orange-500" aria-label="Clock icon" />,
    title: 'Automated Services',
    description: 'We provide fast and automated recharge services. Our data delivery and wallet funding are fully automated.',
  },
  {
    icon: <Shield className="w-12 h-12 text-purple-500" aria-label="Shield icon" />,
    title: 'We Are Reliable',
    description: 'Safe and reliable in our services. Over 100% satisfaction for our subscribers.',
  },
  {
    icon: <HeadphonesIcon className="w-12 h-12 text-teal-500" aria-label="Headphones icon" />,
    title: '24/7 Customer Support',
    description: 'Our customer care support is always available. Satisfying our customers is our top priority.',
  },
];

const Features = () => {
  return (
    <section id="features" className="px-6 md:px-16 py-20 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 bg-gray-50 border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
