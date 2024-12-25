import React from 'react';
import { CheckCircle } from 'lucide-react';
import SecurityStep from './SecurityStep';

const SuccessStep = ({ onComplete }) => (
  <SecurityStep>
    <div className="w-24 h-24 text-green-500">
      <CheckCircle className="w-full h-full" />
    </div>
    <div className="text-center space-y-4">
      <h2 className="text-2xl font-bold text-gray-800">Verification Successful!</h2>
      <p className="text-gray-600">Your BVN has been successfully verified</p>
    </div>
    <button
      onClick={onComplete}
      className="bg-white text-[#025798] px-6 py-2 rounded-xl text-[1.2rem] hover:bg-[#025798] hover:text-white border-[1.5px] border-[#025798] transition duration-700"
      >
      Continue
    </button>
  </SecurityStep>
);

export default SuccessStep;