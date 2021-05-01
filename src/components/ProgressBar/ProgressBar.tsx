/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import './styles.scss';

const ProgressBar = () => {
  useEffect(() => {

  }, []);
  return (
    <div className="progress finbyz-fadeinup">
      <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar">
        75%
      </div>
    </div>
  );
};

export default ProgressBar;
