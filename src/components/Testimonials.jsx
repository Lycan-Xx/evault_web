import React, { useState, useEffect, useRef } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Ahmad Ibrahim',
    role: 'Suya spot owner',
    text: "Evault's services have transformed our communication strategy. Highly recommended!",
    image: "https://picsum.photos/200/200?random=3"
  },
  {
    name: 'Emmanuel Dangana',
    role: 'P.O.S Owner',
    text: "Reliable, fast, and incredibly user-friendly. Evault exceeds expectations.",
    image: "https://picsum.photos/200/200?random=4"
  },
  {
    name: 'Faith Faraah',
    role: 'Saloon owner',
    text: "Seamless integration and exceptional customer support. Evault is our go-to provider.",
    image: "https://picsum.photos/200/200?random=5"
  }
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    
    const scrollToTestimonial = (index) => {
      if (scrollContainer) {
        scrollContainer.scrollTo({
          left: index * scrollContainer.offsetWidth,
          behavior: 'smooth'
        });
      }
    };

    const intervalId = setInterval(() => {
      const nextTestimonial = (currentTestimonial + 1) % testimonials.length;
      setCurrentTestimonial(nextTestimonial);
      scrollToTestimonial(nextTestimonial);
    }, 5000);

    scrollToTestimonial(currentTestimonial);

    return () => clearInterval(intervalId);
  }, [currentTestimonial]);

  return (
    <div className="px-6 md:px-16 py-20 bg-[#000B5B] text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        {/* Left Side Text */}
        <div className="md:w-1/3 mb-8 md:mb-0 md:mr-12">
          <h2 className="text-4xl font-bold mb-4 text-white">
           <span className='text-orange-500'> Feedback</span> from
            <br />
            our customers
          </h2>
          <p className="text-gray-300 text-lg text-[1.2rem] font-sans">
            Hear what our valued clients have to say about their experiences with our services.
          </p>
        </div>

        {/* Right Side - Testimonials Container */}
        <div className="md:w-2/3 w-full">
          {/* Horizontal Scroll Container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-hidden scroll-smooth"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-full md:w-full px-4"
                style={{ scrollSnapAlign: 'center' }}
              >
                <div className="bg-[#001180] p-8 rounded-xl max-w-xl mx-auto">
                  <FaQuoteLeft className="text-blue-500 text-3xl mb-4" />
                  <p className="text-gray-300 text-lg mb-6 italic">
                    {testimonial.text}
                  </p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-xl">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`
                  w-3 h-3 rounded-full transition-all duration-300
                  ${currentTestimonial === index 
                    ? 'bg-blue-500 w-6' 
                    : 'bg-blue-200'}
                `}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;