import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Hero = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setDropdownOpen(false); // Close dropdown after selecting an item
    }
  };

  return (
    <div className="relative px-6 md:px-16 py-20 h-screen bg-[url('./src/components/assets/hero-image.jpg')] bg-cover bg-center">
      {/* Navigation Links */}
      <div className="absolute top-6 left-0 right-0 z-20">
        <div className="flex justify-center space-x-8">
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


          <div className="relative" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
            <button 
              className="text-white hover:text-orange-500 transition-colors duration-500 text-xl font-extrabold flex items-center"
              onClick={() => setDropdownOpen(!dropdownOpen)} // Toggle dropdown on click
            >
              <span>Services</span>
              {dropdownOpen ? (
                <FaChevronUp className="ml-1 icon-size" />
              ) : (
                <FaChevronDown className="ml-1 icon-size" />
              )}
            </button>
            {dropdownOpen && (
              <div 
                className="absolute left-0 mt-2 w-40 bg-white rounded-md shadow-lg z-10"
                onMouseEnter={() => setDropdownOpen(true)} // Keep dropdown open when mouse is over it
              >
                <ul className="py-2">
                  <li 
                    className="px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer" 
                    onClick={() => scrollToSection('boy')}
                  >
                    Boy
                  </li>
                  <li 
                    className="px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer" 
                    onClick={() => scrollToSection('girl')}
                  >
                    Girl
                  </li>
                  <li 
                    className="px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer" 
                    onClick={() => scrollToSection('man')}
                  >
                    Man
                  </li>
                  <li 
                    className="px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer" 
                    onClick={() => scrollToSection('woman')}
                  >
                    Woman
                  </li>
                </ul>
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
      </div>

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
          
          <button className="bg-orange-700 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition font-medium text-lg">
            Sign In
          </button>
          <button className="bg-orange-700 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition font-medium text-lg">
            Sign Up
          </button>
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
          <button className="bg-orange-700 text-white px-8 py-3 rounded-md hover:bg-blue-800 transition">
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