import React, { useState, useEffect, useRef } from "react";
import { ChevronDownIcon, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleServicesDropdown = () => {
    setServicesDropdownOpen(!servicesDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setServicesDropdownOpen(false);
  };

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
        setServicesDropdownOpen(false); // Close services dropdown if clicked outside
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Framer Motion Variants for Smooth Transitions
  const mobileMenuVariants = {
    hidden: { 
      x: "100%", 
      opacity: 0,
      transition: {
        type: "tween",
        duration: 0.3
      }
    },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.3
      }
    }
  };

  const hamburgerVariants = {
    closed: { 
      rotate: 0,
      transition: { duration: 0.3 }
    },
    open: { 
      rotate: 180,
      transition: { duration: 0.3 }
    }
  };

  const servicesDropdownVariants = {
    closed: { 
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    open: { 
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full py-2 px-6 md:px-16 transition-all duration-300 rounded-b-2xl ${
        isScrolled ? "bg-[#000B5B]" : "bg-black"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-white text-3xl font-bold">eVault</div>

       {/* Desktop Navigation */}
       <div className="hidden md:flex space-x-8">
        <a
          href="#about"
          className="text-white hover:text-orange-700 text-xl font-bold"
          onClick={() => scrollToSection("About")}
        >
          About
        </a>

        <div className="relative" ref={dropdownRef}>
          <div 
            className="flex items-center text-white hover:text-orange-500 transition-colors duration-300 text-xl font-extrabold cursor-pointer"
            onClick={toggleDropdown}
          >
            Services
            <ChevronDownIcon 
              className={`w-5 h-5 ml-2 transition-transform duration-300 ${
                dropdownOpen ? 'rotate-180' : ''
              }`} 
            />
          </div>
          
          {dropdownOpen && ( 
            <div 
              className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg overflow-hidden z-50 min-w-[150px] whitespace-nowrap"
            >
              {/* Services dropdown items */}
              {['Airtime Top Up', 'Exams Pin', 'Buy Data', 'Cable Subscriptions', 'Electricity Bill', 'Bulk SMS'].map((service, index) => (
                <a 
                  key={index}
                  href={`#${service.toLowerCase().replace(/\s+/g, '-')}-services`}
                  className="block px-4 py-2 text-gray-800 hover:bg-orange-100 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(`${service.toLowerCase().replace(/\s+/g, '-')}-services`);
                    setDropdownOpen(false);
                  }}
                >
                  {service}
                </a>
              ))}
            </div>
          )}
        </div>

        <a
          href="#faq"
          className="text-white hover:text-orange-700 text-xl font-bold"
          onClick={() => scrollToSection("FAQ")}
        >
          FAQ
        </a>
        <a
          href="#contact"
          className="text-white hover:text-orange-700 text-xl font-bold"
          onClick={() => scrollToSection("Contact")}
        >
          Contact
        </a>
      </div>

      {/* Desktop Buttons */}
      <div className="hidden md:flex items-center space-x-4 z-10">
        <button className="bg-orange-700 text-white px-6 py-2 rounded-md hover:bg-orange-600 font-medium text-lg">
          Sign In
        </button>
        <button className="bg-orange-700 text-white px-6 py-2 rounded-md hover:bg-orange-600 font-medium text-lg">
          Sign Up
        </button>
      </div>

      {/* Mobile Hamburger Button with Animated Transition */}
      <div className="md:hidden">
        <motion.button 
          onClick={toggleMobileMenu}
          className="text-white z-50 relative"
          variants={hamburgerVariants}
          animate={isMobileMenuOpen ? "open" : "closed"}
          initial={false}
        >
          {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </motion.button>
      </div>

      {/* Animated Mobile Menu with Framer Motion */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleMobileMenu}
          >
            <motion.div 
              className="absolute top-0 right-0 w-3/4 h-full bg-[#000B5B] bg-opacity-90 p-6 pt-20 space-y-6"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={(e) => e.stopPropagation()}
              >


  {/* Mobile Menu Content */}
  <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.1 }}
>
  <a
    href="#"
    className="block text-white text-2xl hover:text-orange-700"
    onClick={() => scrollToSection("About")}
  >
    About
  </a>
</motion.div>

{/* Services Dropdown with Animated Expansion */}
<div>
  <div 
    className="flex items-center justify-between text-white text-2xl cursor-pointer"
    onClick={toggleServicesDropdown}
  >
    Services
    <motion.div
      variants={{
        open: { rotate: 180 },
        closed: { rotate: 0 }
      }}
      animate={servicesDropdownOpen ? "open" : "closed"}
    >
      <ChevronDownIcon className="w-6 h-6" />
    </motion.div>
  </div>
  
  <AnimatePresence>
    {servicesDropdownOpen && (
      <motion.div 
        className="mt-4 space-y-3 pl-4 overflow-hidden"
        variants={servicesDropdownVariants}
        initial="closed"
        animate="open"
        exit="closed"
      >
        {['Airtime Top Up', 'Exams Pin', 'Buy Data', 'Cable Subscriptions', 'Electricity Bill', 'Bulk SMS'].map((service, index) => (
          <motion.a 
            key={index}
            href={`#${service.toLowerCase().replace(/\s+/g, '-')}-services`}
            className="block text-white text-xl hover:text-orange-500"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(`${service.toLowerCase().replace(/\s+/g, '-')}-services`);
              setServicesDropdownOpen(false);
            }}
          >
            {service}
          </motion.a>
        ))}
      </motion.div>
    )}
  </AnimatePresence>
</div>

{/* Rest of the mobile menu items with staggered animations */}
{['FAQ', 'Contact'].map((item, index) => (
  <motion.a
    key={item}
    href="#"
    className="block text-white text-2xl hover:text-orange-700"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: (index + 2) * 0.1 }}
    onClick={() => scrollToSection(item)}
  >
    {item}
  </motion.a>
))}


   {/* Sign In and Sign Up Buttons with Animations */}
   <div className="pt-6 space-y-4">
   <motion.button 
     className="w-full bg-orange-700 text-white px-6 py-3 rounded-md hover:bg-orange-600 font-medium text-xl"
     initial={{ opacity: 0, scale: 0.9 }}
     animate={{ opacity: 1, scale: 1 }}
     transition={{ delay: 0.4 }}
   >
     Sign In
   </motion.button>
   <motion.button 
     className="w-full bg-orange-700 text-white px-6 py-3 rounded-md hover:bg-orange-600 font-medium text-xl"
     initial={{ opacity: 0, scale: 0.9 }}
     animate={{ opacity: 1, scale: 1 }}
     transition={{ delay: 0.5 }}
   >
     Sign up
   </motion.button>
 </div>
</motion.div>
</motion.div>
)}
</AnimatePresence>
</div>
</nav>
);
};

export default Navbar;



