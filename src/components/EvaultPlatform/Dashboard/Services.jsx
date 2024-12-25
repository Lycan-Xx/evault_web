import React from "react";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";

const Services = ({ services, onServiceClick }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      <h4 className="text-2xl font-bold flex items-center mb-6">
        <ShoppingCart className="w-6 h-6 mr-2 text-gray-600" />
        Services
      </h4>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        {services.map((service, index) => (
          <motion.button
            key={index}
            variants={item}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onServiceClick(service.component)}
            className="flex flex-col items-center p-4 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:border-blue-500 transition-all duration-300"
          >
            <service.icon className="w-10 h-10 text-blue-500 mb-3" />
            <h4 className="text-base font-semibold text-gray-800 text-center">
              {service.title}
            </h4>
            <p className="text-sm text-gray-500 text-center mt-2">
              {service.description}
            </p>
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
