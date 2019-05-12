import React from 'react';
import './LoadingIndicator.css';
import { css } from '@emotion/core';
import { ClipLoader } from 'react-spinners';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const LoadingIndicator = () => (
  <div
    className="loaderContainer"
    style={{
      height: window.innerHeight,
      width: window.innerWidth,
      backgroundColor: 'white',
    }}
  >
    <div className="sweet-loading">
      <ClipLoader css={override} sizeUnit="px" size={50} color="#000" loading />
    </div>
  </div>
);

export default LoadingIndicator;
