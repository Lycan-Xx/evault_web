import React from 'react';

const faqs = [
  {
    question: 'Why Should I trust you?',
    answer: 'We are a registered business with a proven track record of delivering quality services to our customers. With over 100% satisfaction rate and 24/7 support, we ensure your transactions are safe and reliable.'
  },
  {
    question: 'What networks Airtime do you support?',
    answer: 'We support all major networks including MTN, Glo, Airtel, and 9Mobile. Our automated system ensures instant delivery for all networks.'
  },
  {
    question: 'How can I check my data balance?',
    answer: 'You can check your data balance directly through your network provider\'s USSD code or by logging into your account on our platform.'
  }
];

const FAQ = () => {
  return (
    <div className="px-6 md:px-16 py-20 bg-white rounded-2xl">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-semibold">GET HELP</span>
          <h2 className="text-3xl font-bold mt-2 mb-4">Frequently Asked Questions</h2>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;