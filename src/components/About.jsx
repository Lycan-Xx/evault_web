import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaQuestionCircle, FaNetworkWired, FaMobileAlt, FaCreditCard } from 'react-icons/fa';

const About = ({ language }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const content = {
    English: (
      <>
      <p className='text-black' > At eVault, we believe in empowering individuals and businesses by providing them with the financial tools they need to succeed. Our mission is to create an inclusive and accessible financial ecosystem.</p>
      </>
    ),
    Hausa: (
      <>
      <p className='text-black'> A eVault, muna da yakinin cewa muna bai wa mutane da kasuwanci damar samun hanyoyin kudi masu aminci da saukin samu.</p>
       </>
    ),

    Igbo: (
      <>
     <p className='text-black' > Na eVault, anyị kwenyere n’inyere ndị mmadụ na azụmaahịa ikike iji nweta ihe ngwọta ego dị nchebe ma dị mfe.</p>
      </>
    ),

    Yoruba: (
      <>
     <p className='text-black' > Ni eVault, a gbagbọ ninu agbara eniyan ati awọn iṣowo pẹlu awọn solusan inawo ti o ni aabo ati ti o rọrun lati wọle si.</p>
      </>
    ),
  };

   const faqItems = [
    {
      id: 1,
      icon: <FaQuestionCircle />,
      question: "Getting Started",
      answer: "Firstly you need to create an account and sign in using your registered username & password",
      color: 'blue'
    },
    {
      id: 2,
      icon: <FaNetworkWired />,
      question: "What We Offer",
      answer: "We support airtime conversion for all major Nigerian networks, including MTN, Glo, Airtel, and 9Mobile. Our platform ensures quick and hassle-free conversion across these networks.",
      color: 'green'
    },
    {
      id: 3,
      icon: <FaMobileAlt />,
      question: "Instant Delivery",
      answer: "You can easily check your data balance directly through our platform. Simply log in to your account, navigate to the data services section, and view your current data balance in real-time.",
      color: 'purple'
    },
    {
      id: 4,
      icon: <FaCreditCard />,
      question: "Place Order",
      answer: "Yes, we accept both recharge card pins and VTU (Virtual Top-Up) for airtime conversion. Our flexible platform supports multiple payment methods to provide you with convenient options.",
      color: 'orange'
    }
  ]

  const toggleDropdown = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  return (
    <section id="about" className="bg-gray-200 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Blurred Image Background with Text */}
        <div className="relative">
          <div
            className="absolute inset-0 bg-cover bg-center filter blur-lg"
            style={{
              backgroundImage: `url('https://picsum.photos/600/400?random=3')`,
            }}
          ></div>
          <div className="relative z-10 bg-white/60 p-8 rounded-lg shadow-lg">
            <h2 className="text-4xl font-bold text-black mb-6">
              <span className="text-orange-500">About</span> eVault
            </h2>
            <p className="text-gray-600 text-xl leading-relaxed">{content[language]}</p>
            <button className="mt-6 bg-orange-600 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition text-lg">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side - FAQ Section */}
        <div className="space-y-4">
          {faqItems.map((item) => (
            <div
              key={item.id}
              className="border border-gray-200 bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleDropdown(item.id)}
                className={`w-full flex items-center justify-between p-4 text-left transition-all duration-300 ease-in-out ${
                  activeDropdown === item.id
                    ? `bg-${item.color}-50 text-${item.color}-800`
                    : 'bg-white text-gray-700'
                } hover:bg-${item.color}-50`}
              >
                <div className="flex items-center space-x-3">
                  <span className={`text-${item.color}-500 text-xl`}>{item.icon}</span>
                  <span className="font-semibold">{item.question}</span>
                </div>
                <div className="transition-transform duration-300">
                  {activeDropdown === item.id ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeDropdown === item.id
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                } bg-white text-gray-600`}
              >
                <div className="p-4 border-t">{item.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;