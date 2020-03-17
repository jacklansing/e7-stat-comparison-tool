import React from 'react';

const FormValidationError = ({ message }) => {
  return message ? <p>{message}</p> : null;
};

export default FormValidationError;
