import React, { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-bluee-900 text-white">
      <div className="container mx-auto flex">
        <div className="flex items-center">
          <img
            src="./src/components/assets/evault_main_logo.png"
            alt="evault-logo"
            className="h-10 w-10 mr-3"
          />
          <h1 className="text-2xl font-bold">eVault</h1>
        </div>



      <nav className="hidden md:flex space x-6">
        {["Home", "Services", "About", "Contact", "Blog"].map((item) => (
          <a
            key={item}
            href="{`#${item.ToLowerCase()}`}"
            className="hover:text-blue-300 transition"
          >
            {item}
          </a>
        ))}

        <button className="bg-white text-blue-900 px-4 py-2 rounded-full hover:bg-blue-100 transition">
            Sign in
        </button>
      </nav>


      <button className="md:hidden" onClick={() => setIsOpen(!isMenuOpen)}>
        {isMenuOpen ? 'x' : '☰'}
      </button>
      </div>

      {isMenuOpen && (
        <div className="className">
            <nav className="className">
                {}
            </nav>
        </div>
      )}
        


    </header>
  );
};

export default Header;
