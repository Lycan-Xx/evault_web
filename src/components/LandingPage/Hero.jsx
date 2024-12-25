import React, { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Add this import
import image1 from "../assets/image-1.jpg";

const Hero = ({ language, setShowPlatform }) => { // Change selectedLanguage to language
  const navigate = useNavigate(); // Add this hook
  
  // Function to scroll to the "Features" section
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById("features");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Language-specific content
  const buttonText = {
    English: "Get Started",
    Hausa: "Fara",
    Igbo: "Malite",
    Yoruba: "Bẹrẹ"
  };

  const content = {
    English: (
      <>
        <p className="custom-font text-6xl">
          Welcome to <span className="text-orange-500">eVault</span>.
        </p>
        <br />
        <p className="md:text-[1.5rem]">
          At <span className="text-orange-500">eVault</span>, we believe in empowering individuals and businesses with{" "}
          <span className="text-green-400">secure</span> and accessible financial solutions.
        </p>
      </>
    ),
    Hausa: (
      <>
        <p className="custom-font text-6xl">
          Maraba da <span className="text-orange-500">eVault</span>.
        </p>
        <br />
        <p className="md:text-[1.5rem]">
          A <span className="text-orange-500">eVault</span>, Muna da yakinin cewa muna bai wa mutane da kasuwanci damar samun hanyoyin kudi masu aminci da saukin samu.
        </p>
      </>
    ),
    Igbo: (
      <>
        <p className="custom-font text-6xl">
          Nnọọ na <span className="text-orange-500">eVault</span>.
        </p>
        <br />
        <p className="md:text-[1.5rem]">
          Na <span className="text-orange-500">eVault</span>, Anyị kwenyere n'inyere ndị mmadụ na azụmaahịa ikike iji nweta ihe ngwọta ego dị nchebe ma dị mfe.
        </p>
      </>
    ),
    Yoruba: (
      <>
        <p className="custom-font text-6xl">
          Kaabo si <span className="text-orange-500">eVault</span>.
        </p>
        <br />
        <p className="md:text-[1.5rem]">
          Ni <span className="text-orange-500">eVault</span>, A gbagbọ ninu agbara eniyan ati awọn iṣowo pẹlu awọn solusan inawo ti o ni aabo ati ti o rọrun lati wọle si.
        </p>
      </>
    ),
  };

  return (
    <section
      className="relative z-0 hero bg-blue-900 text-white px-6 py-12 md:px-20 flex items-center justify-center overflow-hidden"
      style={{
        minHeight: "100vh", // Full screen height
      }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden z-[-1]"
        style={{ backgroundImage: `url(${image1})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-blue-900 bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto flex flex-col items-center md:flex-row justify-between h-full">
        {/* Left Content */}
        <div className="text-content md:w-1/2 space-y-6 text-center md:text-left text-[2rem] md:text-lg">
          {/* Dynamically Displayed Content */}
          {content[language]} {/* Change selectedLanguage to language */}

		  <br />

          <button 
            onClick={() => setShowPlatform(true)}
            className="bg-orange-700 px-6 py-3 rounded-md text-lg font-medium hover:bg-orange-400 transition-all duration-300"
          >
            {buttonText[language]}
          </button>
        </div>
      </div>

      {/* Animated Chevron Down */}
      <div
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2 cursor-pointer z-10"
        onClick={scrollToFeatures}
      >
        <FaChevronDown
          className="text-white text-3xl animate-bounce"
          title="Scroll Down"
        />
      </div>
    </section>
  );
};

export default Hero;
