import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full py-2 px-6 md:px-16 transition-all duration-300 rounded-b-2xl ${
        isScrolled ? "bg-[#000B5B]" : "bg-black"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold"> eVault </div>

        <div className="hidden md:flex space-x-8">
          <a
            href="#"
            className="text-white hover:text-orange-700 text-xl font-bold"
            onClick={() => scrollToSection("Home")}
          >
            Home
          </a>
          <a
            href="#"
            className="text-white hover:text-orange-700 text-xl font-bold"
            onClick={() => scrollToSection("Services")}
          >
            Services
          </a>
          <a
            href="#"
            className="text-white hover:text-orange-700 text-xl font-bold"
            onClick={() => scrollToSection("About")}
          >
            About
          </a>
          <a
            href="#"
            className="text-white hover:text-orange-700 text-xl font-bold"
            onClick={() => scrollToSection("FAQ")}
          >
            FAQ
          </a>
          <a
            href="#"
            className="text-white hover:text-orange-700 text-xl font-bold"
            onClick={() => scrollToSection("Contact")}
          >
            Contact
          </a>
        </div>

        <div className="flex items-center space-x-4 z-10">
          {" "}
          {/* Added container div with space-x-4 for 1cm (or close to 1cm) spacing */}
          <button className="bg-orange-700 text-white px-6 py-2 rounded-md hover:bg-orange-600 font-medium text-lg">
            Sign In
          </button>
          <button className="bg-orange-700 text-white px-6 py-2 rounded-md hover:bg-orange-600 font-medium text-lg">
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
