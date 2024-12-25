import React, { useState, useEffect } from 'react';

const FadeTransition = ({ children, duration = 1000 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);

  return (
    <div
      style={{
        transition: `opacity ${duration}ms ease-in-out`,
        opacity: isVisible ? 1 : 0,
      }}
    >
      {children}
    </div>
  );
};

export default FadeTransition;