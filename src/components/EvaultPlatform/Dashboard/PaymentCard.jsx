import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PaymentCards = ({ cardData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % cardData.length);
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + cardData.length) % cardData.length);
  };

  return (
    <div className="relative mb-6">
      {/* Desktop View */}
      <div className="hidden md:grid md:grid-cols-3 gap-4">
        {cardData.map((card, index) => (
          <PaymentCard key={index} card={card} />
        ))}
      </div>

      {/* Mobile View with Carousel */}
      <div className="md:hidden relative">
        <div className="overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <PaymentCard card={cardData[currentIndex]} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevCard}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white/80 rounded-full p-2 shadow-lg z-10"
        >
          <ChevronLeft className="w-6 h-6 text-blue-600" />
        </button>
        <button
          onClick={nextCard}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white/80 rounded-full p-2 shadow-lg z-10"
        >
          <ChevronRight className="w-6 h-6 text-blue-600" />
        </button>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-4 space-x-2">
          {cardData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-blue-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Extracted Card Component
const PaymentCard = ({ card }) => {
  return (
    <motion.div
      className="relative rounded-lg overflow-hidden text-white h-44 shadow-lg"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://picsum.photos/400/250?random=${Math.random()}')`,
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/40" />

      {/* Card Content */}
      <div className="relative z-10 p-4 h-full flex flex-col justify-between">
        <div>
          <h4 className="text-lg font-bold mb-1">{card.name}</h4>
          <p className="text-sm opacity-90">Balance: {card.balance}</p>
          <p className="text-sm font-mono opacity-75">{card.cardNumber}</p>
        </div>
        <div className="flex justify-between text-sm opacity-75">
          <span>Expires: {card.expiry}</span>
          <span>{card.cardholder}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default PaymentCards;
