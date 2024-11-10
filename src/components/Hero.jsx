import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid'; // Assuming you're using Heroicons

const Hero = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative px-6 md:px-16 py-20 h-screen bg-[url('./src/components/assets/hero-image.jpg')] bg-cover bg-center">
      <div className='absolute top-6 left-3 right-3 flex justify-center space-x-8'>
        <a 
          href="#about" 
          className="text-white hover:text-orange-500 transition-colors duration-300 text-xl font-extrabold"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('about');
          }}
        >
          About
        </a>
        
        {/* Services Dropdown */}
        <div 
          className="relative group"
          onMouseEnter={() => setServicesDropdownOpen(true)}
          onMouseLeave={() => setServicesDropdownOpen(false)}
        >
          <div className="flex items-center text-white hover:text-orange-500 transition-colors duration-300 text-xl font-extrabold cursor-pointer">
            Services
            <ChevronDownIcon 
              className={`w-5 h-5 ml-2 transition-transform duration-300 ${
                servicesDropdownOpen ? 'rotate-180' : ''
              }`} 
            />
          </div>
          
          {servicesDropdownOpen && (
            <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg overflow-hidden z-50 min-w-[150px]">
              <a 
                href="#men-services" 
                className="block px-4 py-2 text-gray-800 hover:bg-orange-100 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('men-services');
                  setServicesDropdownOpen(false);
                }}
              >
                Men
              </a>
              <a 
                href="#women-services" 
                className="block px-4 py-2 text-gray-800 hover:bg-orange-100 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('women-services');
                  setServicesDropdownOpen(false);
                }}
              >
                Women
              </a>
              <a 
                href="#children-services" 
                className="block px-4 py-2 text-gray-800 hover:bg-orange-100 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('children-services');
                  setServicesDropdownOpen(false);
                }}
              >
                Children
              </a>
            </div>
          )}
        </div>

        <a 
          href="#faq" 
          className="text-white hover:text-orange-500 transition-colors duration-300 text-xl font-extrabold"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('faq');
          }}
        >
          FAQ
        </a>
        <a 
          href="#contact" 
          className="text-white hover:text-orange-500 transition-colors duration-300 text-xl font-extrabold"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('contact');
          }}
        >
          Contact
        </a>
      </div>

      {/* Rest of the existing code remains the same */}

	   {/* Logo */}
	   <div className="absolute top-0 left-0 sm:top-0 sm:left-0">
        <img 
          src="./src/components/assets/evault_main_logo.png" 
          alt="logo" 
          className='w-[90px] h-[90px] object-contain' 
        />
      </div>

      {/* Title */}
      <div className="text-4xl text-white font-bold pl-2 absolute top-6 left-[100px]">
        <h1>eVault</h1>
      </div>



{/* Sign In / Sign Up Buttons */}
<div className="absolute top-6 right-6 md:top-4 md:right-12 flex items-center space-x-4 z-10">
  <div className="flex items-center space-x-4">
    <a href="#"><button className="bg-orange-700 text-white px-6 py-2 rounded-[10px] hover:bg-blue-900 transition font-medium text-xl">
      Sign In
    </button> </a>
   <a href="#"><button className="bg-orange-700 text-white px-6 py-2 rounded-[10px] hover:bg-blue-900 transition font-medium text-xl">
      Sign Up
    </button> </a>
  </div>
</div>


      {/* Main Content */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center h-full pt-20 sm:pt-0">
        <div className="space-y-4">
          <span className="text-orange-500 font-semibold text-2xl block">WE ARE</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            The Best In Online Recharge & Subscriptions
          </h1>
          <p className="text-gray-300 mb-8 text-2xl font-sans font-bold">
            MTN, Glo, Airtel, 9Mobile, DStv, GOtv, Startimes, PHCN, PHED, IKEDC, EKEDC etc.
          </p>
          <button className="bg-orange-700 text-white px-8 py-3 rounded-[10px] hover:bg-blue-900 transition text-xl">
            Get Started
          </button>
        </div>

        <div className="relative">
          <img 
            src="./src/components/assets/smilling-image.jpg"
            alt="Woman using phone"
            className="rounded-3xl"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;