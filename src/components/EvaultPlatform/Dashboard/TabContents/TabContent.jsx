import React from "react";
import { motion } from "framer-motion";

const TabContent = () => {
  return (
    <div
      className="relative p-6 rounded-xl shadow-lg"
      style={{
        backgroundImage: "url('https://picsum.photos/800/400?blue')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for dark, blurry effect */}
      <div
        className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-md rounded-xl"
        style={{
          zIndex: 0,
        }}
      ></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10"
      >
        <h4
          className="text-2xl font-bold mb-4"
          style={{ fontFamily: "'Ubuntu', sans-serif", color: "#ffffff" }}
        >
          Welcome to eVault Dashboard!
        </h4>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        className="relative z-10 text-base"
        style={{
          fontFamily: "'Ubuntu', sans-serif",
          color: "#e0e0e0",
        }}
      >
        Here you can manage your accounts, make payments, and access services we offer.
      </motion.p>
    </div>
  );
};

export default TabContent;
