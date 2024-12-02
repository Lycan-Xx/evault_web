import React, { useState, useRef, useEffect } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const Hero = ({ language }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleServicesDropdown = () => {
    setServicesDropdownOpen(!servicesDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setServicesDropdownOpen(false);
    }
  };

  const content = {
    English: (
      <>
        <p className='text-6xl' >Welcome to <span className="text-orange-500">eVault</span>.</p> <br />  At <span className="text-orange-500">eVault</span>, we believe in empowering individuals and businesses with <span className='text-green-400' >secure</span> and accessible financial solutions.
      </>
    ),
    Hausa: (
      <>
        Maraba da <span className="text-orange-500">eVault</span>. A <span className="text-orange-500">eVault</span>, muna da yakinin cewa muna bai wa mutane da kasuwanci damar samun hanyoyin kudi masu aminci da saukin samu.
      </>
    ),
    Igbo: (
      <>
        Nnọọ na <span className="text-orange-500">eVault</span>. Na <span className="text-orange-500">eVault</span>, anyị kwenyere n’inyere ndị mmadụ na azụmaahịa ikike iji nweta ihe ngwọta ego dị nchebe ma dị mfe.
      </>
    ),
    Yoruba: (
      <>
        Kaabo si <span className="text-orange-500">eVault</span>. Ni <span className="text-orange-500">eVault</span>, a gbagbọ ninu agbara eniyan ati awọn iṣowo pẹlu awọn solusan inawo ti o ni aabo ati ti o rọrun lati wọle si.
      </>
    ),
  };
  

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative px-6 md:px-16 py-10 sm:py-20 lg:py-20 min-h-screen bg-cover bg-center flex-col justify-center"
		  style={{ backgroundImage: "url('./src/components/assets/hero-image.jpg')" }}>
      {/* Navigation */}
      <div className='absolute top-6 left-3 right-3 hidden justify-center space-x-8 md:visible md:flex'>
        {/* About Link */}
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
        <div className="relative" ref={dropdownRef}>
          <div 
            className="flex items-center text-white hover:text-orange-500 transition-colors duration-300 text-xl font-extrabold cursor-pointer"
            onClick={toggleServicesDropdown}
          >
            Services
            <ChevronDownIcon 
              className={`w-5 h-5 ml-2 transition-transform duration-300 ${
                servicesDropdownOpen ? 'rotate-180' : ''
              }`} 
            />
          </div>
          
          {servicesDropdownOpen && (
            <div 
              className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg overflow-hidden z-50 min-w-[150px]"
            >
              <a 
                href="#airtime-services" 
                className="block px-4 py-2 text-gray-800 hover:bg-orange-100 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('airtime-services');
                  setServicesDropdownOpen(false);
                }}
              >
                Airtime Top Up
              </a>
              <a 
                href="#exams-pin-services" 
                className="block px-4 py-2 text-gray-800 hover:bg-orange-100 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('exams-pin-services');
                  setServicesDropdownOpen(false);
                }}
              >
                Exams Pin
              </a>
              <a 
                href="#buy-data-services" 
                className="block px-4 py-2 text-gray-800 hover:bg-orange-100 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('buy-data-services');
                  setServicesDropdownOpen(false);
                }}
              >
                Buy Data
              </a>
              <a 
                href="#cable-subscription-services" 
                className="block px-4 py-2 whitespace-nowrap text-gray-800 hover:bg-orange-100 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('cable-subscription-services');
                  setServicesDropdownOpen(false);
                }}
              >
                Cable Subscription
              </a>
              <a 
                href="#electricity-bill-services" 
                className="block px-4 py-2 text-gray-800 hover:bg-orange-100 transition-colors whitespace-nowrap"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('electricity-bill-services');
                  setServicesDropdownOpen(false);
                }}
              >
                Utility Bills Payment
              </a>
              <a 
                href="#bulk-sms-services" 
                className="block px-4 py-2 text-gray-800 hover:bg-orange-100 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('bulk-sms-services');
                  setServicesDropdownOpen(false);
                }}
              >
                Bulk SMS
              </a>
            </div>
          )}
        </div>

        {/* FAQ Link */}
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

        {/* Contact Link */}
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



      {/* Logo */}
      <div className="absolute top-0 left-0 sm:top-0 sm:left-0">
        <img 
          src="./src/components/assets/evault_main_logo.png" 
          alt="logo" 
          className='w-[90px] h-[90px] object-contain' 
        />
      </div>

      {/* Title */}
      <div className="text-4xl text-white font-bold pl-2 absolute top-6 left-[100px] hidden md:visible md:flex">
        <h1>eVault</h1>
      </div>

      {/* Sign In / Sign Up Buttons */}
      <div className="absolute top-6 right-6 md:top-4 md:right-12 flex items-center space-x-4 z-10">
        <div className="flex items-center space-x-4">
          <a href="#">
            <button className="bg-orange-700 text-white px-6 py-2 rounded-[10px] hover:bg-blue-900 transition font-medium text-xl">
              Sign In
            </button>
          </a>
          <a href="#">
            <button className="bg-orange-700 text-white px-6 py-2 rounded-[10px] hover:bg-blue-900 transition font-medium text-xl">
              Sign Up
            </button>
          </a>
        </div>
      </div>

     {/* Navigation and Other Elements */}
	 <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center h-full pt-20 sm:pt-0">
        {/* Hero Text Section */}
        <div className="space-y-6">
          <div className="text-white text-4xl md:text-5xl font-bold tracking-tight leading-snug">
            {content[language]}
          </div>
          <button className="bg-orange-700 text-white px-8 py-3 rounded-lg hover:bg-blue-900 transition text-lg">
            Get Started
          </button>
        </div>

        {/* Hero Image */}
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