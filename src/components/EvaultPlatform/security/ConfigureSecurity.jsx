import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ProgressBar from './ProgressBar';
import InitialStep from './InitialStep';
import BvnStep from './BvnStep';
import SuccessStep from './SuccessStep';

const ConfigureSecurity = ({ onSkip, onComplete }) => {
  const [step, setStep] = useState(1);
  const [bvn, setBvn] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const validateBvn = (value) => /^\d{11}$/.test(value);

  const handleBvnChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 11);
    setBvn(value);
    if (error) setError('');
  };

  const handleVerify = () => {
    if (!validateBvn(bvn)) {
      setError('Please enter a valid 11-digit BVN');
      return;
    }

    setIsLoading(true);
    // Simulate verification process
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      setStep(3);
    }, 5000);
  };

  useEffect(() => {
    if (step === 3 && !isSuccess) {
      setStep(2);
    }
  }, [step, isSuccess]);

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <InitialStep
            onNext={() => setStep(2)}
            onSkip={onSkip} // Notify parent to load Dashboard
          />
        );
      case 2:
        return (
          <BvnStep
            bvn={bvn}
            error={error}
            isLoading={isLoading}
            onChange={handleBvnChange}
            onVerify={handleVerify}
          />
        );
      case 3:
        return (
          <SuccessStep
            onComplete={onComplete} // Notify parent of completion
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto p-8 bg-white rounded-xl shadow-lg">
      <div className="relative">
        <ProgressBar currentStep={step} totalSteps={3} />
        <div className="pt-8">
          {renderStep()}
        </div>
      </div>
    </div>
  );
};

ConfigureSecurity.propTypes = {
  onSkip: PropTypes.func.isRequired,
  onComplete: PropTypes.func.isRequired,
};

export default ConfigureSecurity;
