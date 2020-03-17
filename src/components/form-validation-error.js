import React from 'react';
import { css } from '@emotion/core';

const validationStyles = css`
  padding: 0.7rem;
  margin-top: 0.45rem;
  border: 1px solid black;
  border-radius: 2px;
  max-width: fit-content;
  font-family: sans-serif;
  font-weight: 600;
`;

const FormValidationError = ({ message }) => {
  return message ? <p css={validationStyles}>{message}</p> : null;
};

export default FormValidationError;
