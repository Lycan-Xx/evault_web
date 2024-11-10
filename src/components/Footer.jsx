import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer id='contact' className="bg-[#000B5B] text-white px-6 md:px-16 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-extrabold  mb-4">eVault</h3>
            <p className="text-gray-300 mb-4 font-mono">
              Evault offers the best and most secure way to recharge data, airtime, cable and more at the best prices with instant delivery.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 cursor-pointer hover:text-orange-500" />
              < BsTwitterX className="w-6 h-6 cursor-pointer hover:text-orange-500" />
              <Instagram className="w-6 h-6 cursor-pointer hover:text-orange-500" />
            </div>
          </div>
          
          <div>
            <h4 className="font-extrabold mb-4">Explore</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-orange-500">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500">About</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500">Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500">Contact</a></li>
            </ul>
          </div>
          
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
          
          <div>
            <h4 className="font-extrabold mb-4">Contact</h4>
            
            <ul className="space-y-2 text-gray-300">
                <li><a href="#"><FaPhone /> +234 000000000</a></li>
                <li><a href="#"><FaEnvelope /> support@evault.com.ng</a></li>
                <li><FaMapMarkerAlt /> No 29 Atiku Abubakar Mall, Numan road, Adamawa State, NG</li>
            </ul>
        </div>
        </div>
        
		<div className='border-t border-gray-700 mt-12 pt-8 text-gray-300 flex justify-between items-center'>
			<p className='text-left text-gray-300 mt-12'>Powered By <b>iSERVEBAY</b></p>
			<div className='text-right text-gray-300 mt-12 flex items-center'> 
				<a href="#">Privacy Policy</a> <span className='mx-2'> | </span> 
				<a href="#">Terms & Conditions</a> 
				</div>
				</div>

		


      </div>
    </footer>
  );
};

export default Footer;