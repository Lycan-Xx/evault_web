import React from 'react';
import PropTypes from 'prop-types';
import { Fingerprint, AlertCircle } from 'lucide-react';
import SecurityStep from './SecurityStep';

const BvnStep = ({ bvn, error, isLoading, onChange, onVerify }) => (
  <SecurityStep>
    <div className="w-32 h-32 text-[#025798]">
      <Fingerprint className="w-full h-full" />
    </div>
    <div className="text-center space-y-4">
      <h2 className="text-2xl font-bold text-gray-800">BVN Verification</h2>
      <p className="text-gray-600">Please enter your Bank Verification Number</p>
    </div>
    <div className="w-full space-y-4">
      <div className="relative">
        <input
          type="text"
          value={bvn}
          onChange={onChange}
          placeholder="Enter 11-digit BVN"
          className={`w-full px-4 py-3 border ${
            error ? 'border-red-500' : 'border-gray-300'
          } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2B7A9E] transition-all`}
        />
        {error && (
          <div className="absolute -bottom-6 left-0 text-red-500 text-sm flex items-center gap-1">
            <AlertCircle className="w-4 h-4" />
            {error}
          </div>
        )}
      </div>
      <button
        onClick={onVerify}
        disabled={isLoading || bvn.length !== 11}
        className={`left w-1/2 py-[0.75rem] ${
          isLoading || bvn.length !== 11
            ? 'bg-gray-400 cursor-not-allowed px-6 py-2 rounded-xl  text-[1.2rem]'
            : "bg-[#025798] text-white  px-6 py-2 rounded-xl text-[1.2rem] border-[1.5px] border-[#025798] hover:bg-white hover:text-[#025798] transition duration-400 ease-in"

        } text-white rounded-lg transition-colors flex items-center justify-center gap-2`}
      >
        {isLoading ? (
          <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
        ) : (
          <>
            <Fingerprint className="w-5 h-5" />
            Verify BVN
          </>
        )}
      </button>
    </div>
  </SecurityStep>
);

BvnStep.propTypes = {
  bvn: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onVerify: PropTypes.func.isRequired
};

export default BvnStep;