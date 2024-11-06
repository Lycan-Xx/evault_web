import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-transparent py-4 px-6 md:px-16 bg-blue-900">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">DataVendor</div>
        
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-white hover:text-orange-700 text-xl font-bold">Home</a>
          <a href="#" className="text-white hover:text-orange-700 text-xl font-bold">Services</a>
          <a href="#" className="text-white hover:text-orange-700 text-xl font-bold">About</a>
          <a href="#" className="text-white hover:text-orange-700 text-xl font-bold" >Pricing</a>
          <a href="#" className="text-white hover:text-orange-700 text-xl font-bold">Contact</a>
        </div>
        
        <button className="bg-orange-700 text-white px-6 py-2 rounded-md hover:bg-orange-600 font-medium text-lg">
          Sign In
        </button>

          
        <button className="bg-orange-700 text-white px-6 py-2  rounded-md hover:bg-orange-600 font-medium text-lg">
          Sign up
        </button>


      </div>
    </nav>
  );
};

export default Navbar;