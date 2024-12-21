import React, { useRef } from "react";
import { Smartphone, Signal, Wifi, Tv, Zap, Mail } from "lucide-react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    icon: <Smartphone className="w-12 h-20 text-orange-500" />,
    title: "Airtime Top Up",
    description: "Making an online recharge has become very easy and safe on our platform.",
  },
  {
    icon: <Signal className="w-12 h-20 text-purple-500" />,
    title: "Exams Pin",
    description: "Check your exam results instantly with our secure verification system.",
  },
  {
    icon: <Wifi className="w-12 h-20 text-teal-500" />,
    title: "Buy Data",
    description: "Get the best data plans for all networks at the most competitive prices.",
  },
  {
    icon: <Tv className="w-12 h-20 text-blue-500" />,
    title: "Cable Subscription",
    description: "Renew your Cable TV subscription with us at the best rates you can find.",
  },
  {
    icon: <Zap className="w-12 h-20 text-yellow-500" />,
    title: "Utility Bills Payment",
    description: "Because we understand your needs, we make bill payments seamless.",
  },
  {
    icon: <Mail className="w-12 h-20 text-green-500" />,
    title: "Bulk SMS",
    description: "Send customized SMS messages instantly at affordable rates.",
  },
];

const Services = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true }); // Trigger animation only once

  // Animation Variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <div id="services" className="relative overflow-hidden">
      {/* Infinite Background Animation */}
      <div className="absolute top-0 left-0 w-full h-full bg-repeat animate-bg-scrolling bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAABnSURBVHja7M5RDYAwDEXRDgmvEocnlrQS2SwUFST9uEfBGWs9c97nbGtDcquqiKhOImLs/UpuzVzWEi1atGjRokWLFi1atGjRokWLFi1atGjRokWLFi1af7Ukz8xWp8z8AAAA//8DAJ4LoEAAlL1nAAAAAElFTkSuQmCC')]" />

      {/* Content Section */}
      <div className="relative z-10 px-6 md:px-16 py-20 bg-gray-200 bg-opacity-90 rounded-b-2xl">
        <div className="max-w-7xl mx-auto">
          {/* Title Section */}
          <div className="text-center mb-16">
            <h3 className="text-orange-500 font-bold text-4xl">Services</h3>
            <br />
            <h2 className="text-3xl font-bold mb-4">Checkout Our Services</h2>
            <p className="text-gray-600 text-[1.2rem]">All Our Services Are Automated With Instant Delivery</p>
          </div>

          {/* Services Grid */}
          <div
            ref={sectionRef}
            className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8`}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{
                  type: "spring",
                  stiffness: 80,
                  damping: 15,
                  delay: index * 0.2, // Staggered animation
                }}
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;