/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Left, Right } from '../../assets/images';

const Pagination = (props:any) => {
  const {
    data,
    pageNext,
    pagePrevious,
  } = props;
  return (
    <div className={`text-black h-15 w-full userpagi flex justify-end items-center md:pb-8 right-0 md:pr-4 fixed md:static bottom-0 bg-white pt-3 px-4 ${data.docs.length % 2 !== 0 && 'bg-blue-100'}`}>
      <span className="mr-8 text-xs">
        {data.page}
        -
        {((data.page - 1) * data.limit) + data.docs.length}
        {' '}
        of
        {' '}
        {data.totalDocs}
      </span>
      <button
        className="hover:bg-gray-500 flex justify-center items-center w-6 h-6 rounded-4"
        onClick={pagePrevious}
      >
        <img src={Left} alt="left arrow" />
      </button>
      <button
        className="hover:bg-gray-500 flex justify-center items-center w-6 h-6 rounded-4 mr-3"
        onClick={pageNext}
      >
        <img src={Right} alt="right arrow" />
      </button>
    </div>
  );
};

export default Pagination;
