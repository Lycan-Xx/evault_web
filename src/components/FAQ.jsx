import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqs = [
  {
    id: 1,
    question: 'Why Should I trust you?',
    answer: 'We are a registered business with a proven track record of delivering quality services to our customers. With over 100% satisfaction rate and 24/7 support, we ensure your transactions are safe and reliable.',
    color: 'blue'
  },
  {
    id: 2,
    question: 'What networks Airtime do you support?',
    answer: 'We support all major networks including MTN, Glo, Airtel, and 9Mobile. Our automated system ensures instant delivery for all networks.',
    color: 'green'
  },
  {
    id: 3,
    question: 'How can I check my data balance?',
    answer: 'You can check your data balance directly through your network provider\'s USSD code or by logging into your account on our platform.',
    color: 'purple'
  }
];

const FAQ = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  return (
    <div className="px-6 md:px-16 py-20 bg-white rounded-2xl">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-semibold">GET HELP</span>
          <h2 className="text-3xl font-bold mt-2 mb-4">Frequently Asked Questions</h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="border border-gray-200 rounded-lg shadow-sm overflow-hidden">
              <button 
                onClick={() => toggleDropdown(faq.id)}
                className={`
                  w-full flex items-center justify-between p-4 text-left 
                  transition-all duration-300 ease-in-out
                  ${activeDropdown === faq.id 
                    ? `bg-${faq.color}-50 text-${faq.color}-800` 
                    : 'bg-white text-gray-700'}
                  hover:bg-${faq.color}-50
                `}
              >
                <span className="font-semibold">{faq.question}</span>
                <div className="transition-transform duration-300">
                  {activeDropdown === faq.id ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </button>
              
              <div 
                className={`
                  overflow-hidden transition-all duration-300 ease-in-out
                  ${activeDropdown === faq.id 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'}
                  bg-white text-gray-600
                `}
              >
                <div className="p-4 border-t">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
