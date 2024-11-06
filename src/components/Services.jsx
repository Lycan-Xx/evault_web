import React from 'react';
import { Smartphone, Signal, Wifi, Tv, Zap, Mail } from 'lucide-react';

const services = [
  {
    icon: <Smartphone className="w-12 h-20 text-orange-500" />,
    title: 'Airtime TopUp',
    description: 'Making an online recharge has become very easy and safe on our platform.'
  },
  {
    icon: <Signal className="w-12 h-20 text-purple-500" />,
    title: 'Result Checker',
    description: 'Check your exam results instantly with our secure verification system.'
  },
  {
    icon: <Wifi className="w-12 h-20 text-teal-500" />,
    title: 'BUY DATA',
    description: 'Get the best data plans for all networks at the most competitive prices.'
  },
  {
    icon: <Tv className="w-12 h-20 text-blue-500" />,
    title: 'Cable Subscription',
    description: 'Renew your Cable TV subscription with us at the best rates you can find.'
  },
  {
    icon: <Zap className="w-12 h-20 text-yellow-500" />,
    title: 'UTILITY BILLS PAYMENT',
    description: 'Because we understand your needs, we make bill payments seamless.'
  },
  {
    icon: <Mail className="w-12 h-20 text-green-500" />,
    title: 'Bulk SMS',
    description: 'Send customized SMS messages instantly at affordable rates.'
  }
];

const Services = () => {
  return (
    <div className="px-6 md:px-16 py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Checkout Our Services</h2>
          <p className="text-gray-600">All Our Services Are Automated With Instant Delivery</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;