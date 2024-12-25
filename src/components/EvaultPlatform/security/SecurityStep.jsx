import React from 'react';
import PropTypes from 'prop-types';

const SecurityStep = ({ children }) => (
  <div className="flex flex-col items-center space-y-8 w-full max-w-md">
    {children}
  </div>
);

SecurityStep.propTypes = {
  children: PropTypes.node.isRequired
};

export default SecurityStep;