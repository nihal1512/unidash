import React from 'react';
import './alertContainer.css';

const AlertContainer = ({ message, type }) => {
  return (
    <div className={`alert-container ${type}`}>
      {message}
    </div>
  );
};

export default AlertContainer;
