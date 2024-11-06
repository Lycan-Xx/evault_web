import React from 'react';

const testimonials = [
  {
    name: 'John Emmanuel',
    role: 'Regular Customer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80',
    text: 'These guys are great... All thanks to DATAVENDOR! I can really say that since I joined this site I have been saving more than before. Thanks to DATAVENDOR! Keep up the good work!'
  },
  {
    name: 'John Doe',
    role: 'Marketing Manager',
    text: "DATAVENDOR's services have transformed our communication strategy. Highly recommended!",
    image: "https://picsum.photos/200/200?random=3"
  },
  {
    name: 'Sarah Smith',
    role: 'Business Owner',
    text: "Reliable, fast, and incredibly user-friendly. DATAVENDOR exceeds expectations.",
    image: "https://picsum.photos/200/200?random=4"
  },
  {
    name: 'Michael Johnson',
    role: 'IT Director',
    text: "Seamless integration and exceptional customer support. DATAVENDOR is our go-to provider.",
    image: "https://picsum.photos/200/200?random=5"
  }
];

const Testimonials = () => {
  return (
    <div className="px-6 md:px-16 py-20 bg-[#000B5B] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Are Saying?</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-[#001180] p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-300 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;