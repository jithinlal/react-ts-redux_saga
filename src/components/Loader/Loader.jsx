import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { useSelector } from 'react-redux';

export const Spinner = () => {
  const visible = useSelector((state) => state.loader.visible);
  return (
    <>
      {visible
        ? (
          <div className="absolute h-full w-full flex items-center justify-center z-50 bg-white bg-opacity-75">
            <ClipLoader
              css={`
              display: block;
              argin: 0 auto;
              border-color: '#0E278F';
            `}
              size={55}
              color="#0E278F"
              loading
            />
          </div>
        )
        : null}
    </>
  );
};

export default Spinner;
