import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Languages } from 'lucide-react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';

const Footer = ({ setLanguage }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleLanguageSelect = (lang) => {
    setLanguage(lang);
    setIsDrawerOpen(false); // Close the drawer after selecting a language
  };

  return (
    <footer id="contact" className="bg-[#000B5B] text-white px-6 md:px-16 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-extrabold mb-4">eVault</h3>
            <p className="text-gray-300 mb-4 font-mono">
              eVault offers the best and most secure way to recharge data, airtime, cable, and more at the best prices with instant delivery.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 cursor-pointer hover:text-orange-500" />
              <BsTwitterX className="w-6 h-6 cursor-pointer hover:text-orange-500" />
              <Instagram className="w-6 h-6 cursor-pointer hover:text-orange-500" />
            </div>
          </div>

          {/* Explore Section */}
          <div>
            <h4 className="font-extrabold mb-4">Explore</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-500">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-orange-500">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-orange-500">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h4 className="font-extrabold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300 font-sans">
              <li>Airtime TopUp</li>
              <li>Exam Pin</li>
              <li>Buy Data</li>
              <li>Cable Subscription</li>
              <li>Electricity Bill</li>
              <li>Bulk SMS</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="font-extrabold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#">
                  <FaPhone className="inline-block mr-2" />
                  +234 000000000
                </a>
              </li>
              <li>
                <a href="#">
                  <FaEnvelope className="inline-block mr-2" />
                  support@evault.com.ng
                </a>
              </li>
              <li>
                <FaMapMarkerAlt className="inline-block mr-2" />
                No 29 Atiku Abubakar Mall, Numan road, Adamawa State, NG
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-gray-300 flex flex-col md:flex-row justify-between items-center">
          <p className="text-left text-gray-300">
            Powered By <b>iSERVEBAY</b>
          </p>
          <div className="text-right text-gray-300 flex items-center space-x-4 mt-6 md:mt-0">
            {/* Translation Button */}
            <div className="relative">
              <button
                className="flex items-center space-x-2 bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition"
                onClick={toggleDrawer}
              >
                <Languages className="w-5 h-5" />
                <span>Translate</span>
              </button>
              {/* Language Drawer */}
              {isDrawerOpen && (
                <div className="absolute bottom-full right-0 mb-2 w-48 bg-white text-gray-800 rounded-lg shadow-lg z-50 overflow-hidden">
                  <ul className="space-y-1">
                    <li>
                      <button
                        className="w-full text-left px-4 py-2 hover:bg-gray-200"
                        onClick={() => handleLanguageSelect('English')}
                      >
                        English
                      </button>
                    </li>
                    <li>
                      <button
                        className="w-full text-left px-4 py-2 hover:bg-gray-200"
                        onClick={() => handleLanguageSelect('Hausa')}
                      >
                        Hausa
                      </button>
                    </li>
                    <li>
                      <button
                        className="w-full text-left px-4 py-2 hover:bg-gray-200"
                        onClick={() => handleLanguageSelect('Igbo')}
                      >
                        Igbo
                      </button>
                    </li>
                    <li>
                      <button
                        className="w-full text-left px-4 py-2 hover:bg-gray-200"
                        onClick={() => handleLanguageSelect('Yoruba')}
                      >
                        Yoruba
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <a href="#">Privacy Policy</a>
            <span>|</span>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
