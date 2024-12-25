import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "./assets/logo.jpg";

const Navbar = ({ onNavigate, currentView }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  return (
    <nav className="bg-white shadow-md rounded-b-3xl border-b-4 border-[#025798]">
      <div className="container mx-auto flex items-center justify-between h-[7rem] px-4 lg:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <a href="#">
            <img src={logo} alt="Logo" className="h-[5rem] w-auto" />
          </a>
          <span className="hidden lg:block text-2xl font-bold text-[#025798] ml-4">
            <a href="#">Vault</a>
          </span>
        </div>

        {/* Mobile Menu */}
        <button
          onClick={toggleNav}
          aria-label="Toggle navigation menu"
          className="lg:hidden p-2 text-gray-600"
        >
          {isNavOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-4">
          {["sign-in", "sign-up"].map((view) => (
            <button
              key={view}
              onClick={() => onNavigate(view)}
              className="bg-[#025798] text-white px-6 py-2 rounded-xl border border-[#025798] hover:bg-white hover:text-[#025798] transition"
            >
              {view.replace("-", " ").replace(/^\w/, (c) => c.toUpperCase())}
            </button>
          ))}
          <button
            onClick={() => setIsDialogOpen(true)}
            className="bg-white text-[#025798] px-6 py-2 rounded-xl border border-[#025798] hover:bg-[#025798] hover:text-white transition"
          >
            Download
          </button>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      <div 
        className={`
          absolute top-[7rem] left-0 w-full bg-[#025798] text-white lg:hidden z-50 shadow-lg
          transform transition-all duration-300 ease-in-out
          ${isNavOpen 
            ? 'opacity-100 translate-y-0 max-h-[300px]' 
            : 'opacity-0 -translate-y-2 max-h-0 overflow-hidden'
          }
        `}
      >
        <ul className={`
          space-y-4 p-4
          transition-opacity duration-300 ease-in-out
          ${isNavOpen ? 'opacity-100' : 'opacity-0'}
        `}>
          {["sign-in", "sign-up"].map((view) => (
            <li key={view}
              className="transform transition-transform duration-300 ease-in-out hover:translate-x-2"
            >
              <button
                onClick={() => {
                  onNavigate(view);
                  setIsNavOpen(false);
                }}
                className="block w-full text-left px-4 py-2 rounded hover:bg-[#033e58] transition-colors duration-300"
              >
                {view.replace("-", " ").replace(/^\w/, (c) => c.toUpperCase())}
              </button>
            </li>
          ))}
          <li className="transform transition-transform duration-300 ease-in-out hover:translate-x-2">
            <button
              onClick={() => {
                setIsDialogOpen(true);
                setIsNavOpen(false);
              }}
              className="block w-full text-left px-4 py-2 rounded hover:bg-[#033e58] transition-colors duration-300"
            >
              Download
            </button>
          </li>
        </ul>
      </div>

      {/* Download Dialog */}
      {isDialogOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          role="dialog"
          aria-labelledby="download-dialog-title"
          aria-describedby="download-dialog-description"
        >
          <div className="relative bg-white rounded-2xl shadow-xl p-6 max-w-md w-11/12">
            <button
              onClick={() => setIsDialogOpen(false)}
              aria-label="Close dialog"
              className="absolute top-4 right-4 text-gray-600 hover:text-red-500 transition"
            >
              <X className="w-6 h-6" />
            </button>
            <h2 id="download-dialog-title" className="text-xl font-bold mb-4">
              Download Our App
            </h2>
            <p id="download-dialog-description" className="mb-6 text-gray-600">
              Send support, feed a passion, or strengthen a bond instantly.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-[#025798] text-white px-4 py-2 rounded-lg shadow hover:bg-opacity-90"
              >
                App Store
              </a>
              <a
                href="#"
                className="bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-opacity-90"
              >
                Google Play
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
