import React from 'react';
import PropTypes from 'prop-types';
import { Shield } from 'lucide-react';
import SecurityStep from './SecurityStep';

const InitialStep = ({ onNext, onSkip }) => (
  <SecurityStep>
    <div className="w-64 h-64">
      <img
        src="https://images.unsplash.com/photo-1633265486064-086b219458ec?w=800&auto=format&fit=crop&q=60"
        alt="Security Setup"
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
    <div className="text-center space-y-4">
      <h2 className="text-2xl font-bold text-gray-800">Secure Your Account</h2>
      <p className="text-gray-600">Let's set up additional security measures to protect your account</p>
    </div>
    <div className="flex justify-between w-full mt-8">
      <button
        onClick={() => onSkip()} // Ensure this calls the onSkip prop
        className="px-6 py-2 text-gray-600 hover:text-[#025798] border rounded-xl transition-colors"
      >
        Skip for now
      </button>
      <button
  onClick={() => onNext()} // Ensure this calls the onNext prop
  className='flex items-center w-auto px-4 py-3 ml-6 rounded-lg whitespace-nowrap bg-white border-2 border-[#025798] text-lg hover:text-white hover:bg-[#025798] transition duration-300 ease-linear'
>
  <Shield className="w-4 h-4 mr-2" /> {/* Add margin to the right for spacing */}
  Get Started
</button>

    </div>
  </SecurityStep>
);

InitialStep.propTypes = {
  onNext: PropTypes.func.isRequired,
  onSkip: PropTypes.func.isRequired,
};

export default InitialStep;
