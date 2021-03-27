import React from 'react';

import './error-indicator.css';

const ErrorIndicator = () => {
  return (
    <div className = "error-indicator">
      <span>Something went wrong! Please contact store support.</span>
    </div>
  );
};

export default ErrorIndicator;