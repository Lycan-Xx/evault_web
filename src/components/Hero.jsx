import React from 'react';

const Hero = () => {
  return (

	


    <div className="relative px-6 md:px-16 py-20 h-screen bg-[url('./src/components/assets/hero-image.jpg')] bg-cover bg-center">
  {/* Positioned buttons at top right */}

  <div className="absolute top-0 left-0">
	<img src="./src/components/assets/evault_main_logo.png" alt="logo" className='w-[90px] h-[90px] object-contain'/>
  </div>



	<div className="text-5xl text-white font-bold pl-2 absolute top-8 left-[100px]">
		<h1>eVault</h1>
	</div>

  <div className="absolute top-6 right-6 md:top-4 md:right-12 z-10"> {/* the Navbar signin/signup buttons are not perfectly allligned with the ones in the Hero page but i'll leave it for now*/}


    <div className="flex items-center space-x-4">
      <button className="bg-orange-700 text-white px-6 py-2 rounded-md hover:bg-orange-600 font-medium text-lg">
        Sign In
      </button>
      
      <button className="bg-orange-700 text-white px-6 py-2 rounded-md hover:bg-orange-600 font-medium text-lg">
        Sign up
      </button>
    </div>



  </div>

  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center h-full">
    <div>
      <span className="text-orange-500 font-semibold text-3xl">WE ARE</span>
      <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
        The Best In Online Recharge & Subscriptions
      </h1>
      <p className="text-gray-300 mb-8 text-2xl font-sans font-bold">
        MTN, Glo, Airtel, 9Mobile, DStv, GOtv, Startimes, PHCN, PHED, IKEDC, EKEDC etc.
      </p>
      <button className="bg-orange-500 text-white px-8 py-3 rounded-md hover:bg-orange-600 ">
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
