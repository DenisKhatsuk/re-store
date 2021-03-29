import React from 'react';

import './error-indicator.css';

const ErrorIndicator = ({ error = 'Something went wrong! Please contact store support.' }) => {
  return (
    <div className = "error-indicator">
      <span>{ error }</span>
    </div>
  );
};

export default ErrorIndicator;