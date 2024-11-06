import React from 'react';

const Hero = () => {
  return (


    <div className="relative px-6 md:px-16 py-20 h-screen bg-[url('./src/components/assets/hero-image.jpg')] bg-cover bg-center">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-orange-500 font-semibold">WE ARE</span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mt-4 mb-6">
            The Best In Online Recharge & Subscriptions
          </h1>
          <p className="text-gray-300 mb-8 text-2xl ">
            MTN, Glo, Airtel, 9Mobile, DStv, GOtv, Startimes, PHCN, PHED, IKEDC, EKEDC etc.
          </p>
          <button className="bg-orange-500 text-white px-8 py-3 rounded-md hover:bg-orange-600 font-medium text-lg">
            Get Started
          </button>
        </div>
        
        <div className="relative">
          <img 
            src="./src/components/assets/smilling-image.jpg"
            alt="Woman using phone"
            className="rounded-3xl"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
