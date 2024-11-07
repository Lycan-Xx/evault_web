import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#000B5B] text-white px-6 md:px-16 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">eVault</h3>
            <p className="text-gray-300 mb-4">
              Evault offers the best and most secure way to recharge data, airtime, cable and more at the best prices with instant delivery.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 cursor-pointer hover:text-orange-500" />
              <Twitter className="w-6 h-6 cursor-pointer hover:text-orange-500" />
              <Instagram className="w-6 h-6 cursor-pointer hover:text-orange-500" />
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Explore</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-orange-500">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500">About</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500">Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#">📞 +234 000000000</a></li>
              <li><a href="#">✉️ support@evault.com</a></li>
              <li>🏢 123 Main Street, Lagos, NG</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Hours of Operation</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Monday - Friday: 24/7</li>
              <li>Saturday: 24/7</li>
              <li>Sunday: 24/7</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} eVault. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;