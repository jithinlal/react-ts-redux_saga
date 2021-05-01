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
          <div className="fixed h-full w-full flex items-center justify-center z-50 bg-black bg-opacity-25">
            <ClipLoader
              css={`
              display: block;
              margin: 0 auto;
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
