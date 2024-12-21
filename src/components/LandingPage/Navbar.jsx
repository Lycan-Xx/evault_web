import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Languages } from "lucide-react";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../components/assets/evault_main_logo.png";

const Navbar = ({ language, setLanguage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggles the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Language switch handler
  const handleLanguageSwitch = () => {
    const languages = ["English", "Hausa", "Yoruba", "Igbo"];
    const currentIndex = languages.indexOf(language);
    const nextIndex = (currentIndex + 1) % languages.length;
    setLanguage(languages[nextIndex]);
  };

  // Dropdown hover handlers
  let dropdownTimeout;
  const openDropdown = () => {
    clearTimeout(dropdownTimeout);
    setIsDropdownOpen(true);
  };

  const closeDropdown = () => {
    dropdownTimeout = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200); // Small delay to allow hover over the dropdown
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false); // Close mobile menu after clicking
    }
  };

  const services = [
    { title: "Airtime Top Up", id: "airtime" },
    { title: "Exams Pin", id: "exams" },
    { title: "Buy Data", id: "data" },
    { title: "Cable Subscription", id: "cable" },
    { title: "Utility Bills Payment", id: "utility" },
    { title: "Bulk SMS", id: "sms" }
  ];

return (
		<nav className="w-full z-50 bg-[#173264] bg-opacity-100 text-white px-4 py-3 md:px-10">
			<div className="container mx-auto flex items-center justify-between">
			{/* Logo */}
			<div className="flex items-center space-x-2">
				<img
					src={logo}
					alt="Logo"
					className="h-[4.5rem] w-auto" // Changed height and width to maintain aspect ratio
				/>
				<span className="text-4xl font-extrabold tracking-wide self-center">eVault</span>
			</div>

			{/* Desktop Navigation Links */}
			<div className="hidden md:flex space-x-8 items-center">
				<button 
					onClick={() => scrollToSection('about')} 
					className="text-lg font-medium group relative cursor-pointer"
				>
					About
					<span className="absolute bottom-[-6px] left-0 right-0 h-[2px] bg-orange-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
				</button>

				{/* Services Dropdown */}
				<div
					className="relative group"
					onMouseEnter={openDropdown}
					onMouseLeave={closeDropdown}
				>
					<button 
						onClick={() => scrollToSection('services')}
						className="text-lg font-medium group relative cursor-pointer"
					>
						Services
						<span className="absolute bottom-[-6px] left-0 right-0 h-[2px] bg-orange-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
					</button>
					{isDropdownOpen && (
						<div className="absolute left-0 mt-3 w-48 bg-white text-black shadow-lg rounded-lg z-10">
							{services.map((service, index) => (
								<button
									key={service.id}
									onClick={() => scrollToSection(service.id)}
									className={`block w-full text-left px-4 py-2 hover:bg-gray-200 transition-all duration-300 
										${index === 0 ? 'rounded-t-lg' : ''} 
										${index === services.length - 1 ? 'rounded-b-lg' : ''}`}
								>
									{service.title}
								</button>
							))}
						</div>
					)}
				</div>

				<button 
					onClick={() => scrollToSection('faq')} 
					className="text-lg font-medium group relative cursor-pointer"
				>
					FAQ
					<span className="absolute bottom-[-6px] left-0 right-0 h-[2px] bg-orange-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
				</button>
				<button 
					onClick={() => scrollToSection('contact')} 
					className="text-lg font-medium group relative cursor-pointer"
				>
					Contact
					<span className="absolute bottom-[-6px] left-0 right-0 h-[2px] bg-orange-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
				</button>

				{/* Translate Button */}
				<button
					onClick={handleLanguageSwitch}
					className="flex items-center bg-green-600 px-6 py-2 rounded-xl shadow-md hover:bg-orange-700 transition-all duration-300 text-white"
				>
					<Languages className="mr-2" />
					{language}
				</button>
			</div>

			{/* Sign-in/Sign-up Buttons */}
			<div className="hidden md:flex space-x-4">
				<button className="flex items-center bg-gray-600 px-6 py-3 rounded-md shadow-md hover:bg-blue-500 transition-all duration-300">
					<FaSignInAlt className="mr-2" />
					Sign In
				</button>
				<button className="flex items-center bg-orange-700 px-6 py-3 rounded-md shadow-md hover:bg-blue-400 transition-all duration-300">
					<FaUserPlus className="mr-2" />
					Sign Up
				</button>
			</div>

			{/* Hamburger Menu */}
			<button
				onClick={toggleMobileMenu}
				className="md:hidden text-white focus:outline-none"
			>
				{isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
			</button>
		</div>

		{/* Mobile Navigation */}
		<AnimatePresence>
			{isMobileMenuOpen && (
				<motion.div
					initial={{ height: 0, opacity: 0 }}
					animate={{ height: "auto", opacity: 1 }}
					exit={{ height: 0, opacity: 0 }}
					className="mt-4 bg-blue-900 bg-opacity-80 backdrop-blur-sm p-4 text-white md:hidden space-y-4 rounded-lg"
				>
					<button onClick={() => scrollToSection('about')} className="block text-lg w-full text-left">
						About
					</button>
					<details>
						<summary className="text-lg cursor-pointer">Services</summary>
						<div className="ml-4 space-y-2 mt-2">
							{services.map(service => (
								<button
									key={service.id}
									onClick={() => scrollToSection(service.id)}
									className="block w-full text-left hover:text-orange-400 transition-colors"
								>
									{service.title}
								</button>
							))}
						</div>
					</details>
					<button onClick={() => scrollToSection('faq')} className="block text-lg w-full text-left">
						FAQ
					</button>
					<button onClick={() => scrollToSection('contact')} className="block text-lg w-full text-left">
						Contact
					</button>
					<button
						onClick={handleLanguageSwitch}
						className="flex items-center bg-blue-600 px-6 py-2 rounded-xl shadow-md hover:bg-blue-700 transition-all duration-300 text-white"
					>
						<Languages className="mr-2" />
						{language}
					</button>
					<button className="block w-full bg-gray-600 px-6 py-2 rounded-xl shadow-md hover:bg-gray-700 transition-all duration-300">
						Sign In
					</button>
					<button className="block w-full bg-orange-400 px-6 py-2 rounded-xl shadow-md hover:bg-orange-500 transition-all duration-300">
						Sign Up
					</button>
				</motion.div>
			)}
		</AnimatePresence>
	</nav>
);
};

export default Navbar;
