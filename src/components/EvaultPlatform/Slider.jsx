import React, { useState, useEffect } from "react";

const slides = [
  {
    title: (
      <>
        <span className="text-[#025798]">Ultimate Security</span>
        <p>for your <br /> banking and beyond</p>
      </>
    ),
    subtitle: "Business and personal simplified",
  },
  {
    title: (
      <>
        <span className="text-[#025798]">Smart Banking</span> solutions
        <br />at your fingertips
      </>
    ),
    subtitle: "Seamless transactions anywhere",
  },
  {
    title: (
      <>
        <span className="text-[#025798]">Secure Vault</span> storage
        <br />for peace of mind
      </>
    ),
    subtitle: "Your data, protected 24/7",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-3xl mx-auto flex flex-col items-center text-center mt-[5rem]">
      {/* Slide Content */}
      <div className="relative w-full overflow-hidden h-[300px] md:h-[400px]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity  duration-1000 ease-in-out ${
              index === currentSlide ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
            }`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              {slide.title}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mt-16 leading-relaxed">
              {slide.subtitle}
            </p>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="flex space-x-4 mt-8">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-[#025798] scale-110"
                : "bg-gray-300 hover:scale-90"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
