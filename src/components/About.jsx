import React, { useState } from 'react'
import { FaChevronDown, FaChevronUp, FaQuestionCircle, FaNetworkWired, FaMobileAlt, FaCreditCard } from 'react-icons/fa'

const About = () => {
  const [activeDropdown, setActiveDropdown] = useState(null)

  const faqItems = [
    {
      id: 1,
      icon: <FaQuestionCircle />,
      question: "Sign in",
      answer: "Firstly you need to create an account and sign in using your registered username & password",
      color: 'blue'
    },
    {
      id: 2,
      icon: <FaNetworkWired />,
      question: "Fund Wallet",
      answer: "We support airtime conversion for all major Nigerian networks, including MTN, Glo, Airtel, and 9Mobile. Our platform ensures quick and hassle-free conversion across these networks.",
      color: 'green'
    },
    {
      id: 3,
      icon: <FaMobileAlt />,
      question: "Instant delivery",
      answer: "You can easily check your data balance directly through our platform. Simply log in to your account, navigate to the data services section, and view your current data balance in real-time.",
      color: 'purple'
    },
    {
      id: 4,
      icon: <FaCreditCard />,
      question: "Place order",
      answer: "Yes, we accept both recharge card pins and VTU (Virtual Top-Up) for airtime conversion. Our flexible platform supports multiple payment methods to provide you with convenient options.",
      color: 'orange'
    }
  ]

  const toggleDropdown = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id)
  }

  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left Side - Company Description */}
        <div className="md:w-1/2 mb-8 md:mr-12">
          <h2 className="text-4xl font-bold text-black mb-6">
            About Evault
          </h2>
          <p className="text-gray-600 mb-6 text-[1.2rem]">
            Evault is a leading provider of Voice, Data, and Home Broadband services. 
            We partner with local telcos to offer customizable plans with additional features 
            that meet your unique communication needs.
          </p>
          <button className="bg-orange-600 text-[1.2rem] text-white px-6 py-3 rounded-md hover:bg-blue-800 transition">
            Learn More
          </button>
        </div>

        {/* Right Side - FAQ Dropdowns */}
        <div className="md:w-1/2 space-y-4">
          {faqItems.map((item) => (
            <div 
              key={item.id} 
              className="border border-gray-200 rounded-lg shadow-sm overflow-hidden"
            >
              <button 
                onClick={() => toggleDropdown(item.id)}
                className={`
                  w-full flex items-center justify-between p-4 text-left 
                  transition-all duration-300 ease-in-out
                  ${activeDropdown === item.id 
                    ? `bg-${item.color}-50 text-${item.color}-800` 
                    : 'bg-white text-gray-700'}
                  hover:bg-${item.color}-50
                `}
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
                className={`
                  overflow-hidden transition-all duration-300 ease-in-out
                  ${activeDropdown === item.id 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'}
                  bg-white text-gray-600
                `}
              >
                <div className="p-4 border-t">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About


// import React from 'react'

// const About = () => {
//   return (
//     <section className="bg-white py-16 px-6 md:px-12 rounded-t-2xl">
//       <div className="container mx-auto flex flex-col md:flex-row items-center">
//         <div className="md:w-1/2 mb-8 md:mr-12">
//           <h2 className="text-3xl font-bold text-blue-900 mb-6">
//             About DATAVENDOR
//           </h2>
//           <p className="text-gray-700 mb-6">
//             DATAVENDOR is a leading provider of Voice, Data, and Home Broadband services. 
//             We partner with local telcos to offer customizable plans with additional features 
//             that meet your unique communication needs.
//           </p>
//           <button className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition">
//             Learn More
//           </button>
//         </div>
//         <div className="md:w-1/2">
//           <img 
//             src="https://picsum.photos/600/400?random=2" 
//             alt="DATAVENDOR Services" 
//             className="rounded-lg shadow-lg"
//           />

//           <div></div>

//         </div>
//       </div>
//     </section>
//   )
// }

// export default About
