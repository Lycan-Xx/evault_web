import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FaPhone, FaEnvelope, FaMapMarker } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#04448C] text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section: Logo and Contact */}
        <div>
          <a href="#" className="text-3xl font-bold tracking-wide text-white hover:underline">
            eVault
          </a>
          <p className="text-sm text-gray-300 mt-2">
            Powered by Bellbank
          </p>
          <ul className="mt-4 space-y-2 text-gray-300">
            <li>
              <a
                href="tel:+234000000000"
                className="flex items-center text-sm hover:text-white transition-colors"
              >
                <FaPhone className="mr-2" /> +234 000000000
              </a>
            </li>
            <li>
              <a
                href="mailto:support@evault.com.ng"
                className="flex items-center text-sm hover:text-white transition-colors"
              >
                <FaEnvelope className="mr-2" /> support@evault.com.ng
              </a>
            </li>
            <li className="flex items-center text-sm">
              <FaMapMarker className="mr-2" /> No 29 Atiku Abubakar Mall, Numan road, Adamawa State, NG
            </li>
          </ul>
        </div>

        {/* Center Section: Quick Links */}
        <div className="flex flex-col items-start">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/privacy-policy"
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/terms-and-conditions"
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                Terms and Conditions
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section: Social Media and Copyright */}
        <div className="text-center md:text-right">
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex justify-center md:justify-end space-x-4 mb-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors"
              aria-label="Facebook"
            >
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors"
              aria-label="Twitter"
            >
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
		  <br />
          <p className="text-sm text-gray-300">
			EFCC - SCUML certified
          </p>
		  <p className="text-sm text-gray-300">
            © 2024 eVault. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;