import React, { useState, useEffect, useRef } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    name: 'John Doe',
    role: 'Marketing Manager',
    text: "Evault's services have transformed our communication strategy. Highly recommended!",
    image: "https://picsum.photos/200/200?random=3"
  },
  {
    name: 'Sarah Smith',
    role: 'Business Owner',
    text: "Reliable, fast, and incredibly user-friendly. Evault exceeds expectations.",
    image: "https://picsum.photos/200/200?random=4"
  },
  {
    name: 'Michael Johnson',
    role: 'IT Director',
    text: "Seamless integration and exceptional customer support. Evault is our go-to provider.",
    image: "https://picsum.photos/200/200?random=5"
  }
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    
    // Horizontal scroll function
    const scrollToTestimonial = (index) => {
      if (scrollContainer) {
        scrollContainer.scrollTo({
          left: index * scrollContainer.offsetWidth,
          behavior: 'smooth'
        });
      }
    };

    // Auto-scroll interval
    const intervalId = setInterval(() => {
      const nextTestimonial = (currentTestimonial + 1) % testimonials.length;
      setCurrentTestimonial(nextTestimonial);
      scrollToTestimonial(nextTestimonial);
    }, 5000);

    // Scroll to initial testimonial
    scrollToTestimonial(currentTestimonial);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [currentTestimonial]);

  return (
    <div className="px-6 md:px-16 py-20 bg-[#000B5B] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Are Saying?</h2>
        </div>
        

        <div className="md:w-1/2 mb-8 md:mr-12">
			<h2 className='text-3xl font--bold text-orange-500'>Feedback</h2>
		</div>
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
  );
};

export default Testimonials;