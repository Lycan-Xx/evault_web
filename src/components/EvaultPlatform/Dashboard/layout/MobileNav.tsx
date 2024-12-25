import React from 'react';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose, children }) => {
  return (
    <>
      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        exit={{ opacity: 0 }}
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: isOpen ? 0 : '-100%' }}
        exit={{ x: '-100%' }}
        transition={{ type: 'tween', duration: 0.3 }}
        className="fixed inset-y-0 left-0 w-2/3 bg-white shadow-xl z-50"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>
        {children}
      </motion.div>
    </>
  );
};

export default MobileNav;