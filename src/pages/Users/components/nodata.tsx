/* eslint-disable react/button-has-type */
/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { Nodata } from '../../../assets/images';
import { CreateUser } from '../createUser';

const NoDataFound = () => {
  const [isModelcreate, setModelcreate] = useState(false);
  const closeConfirmation = () => {
    setModelcreate(false);
  };

  return (
    <div className="flex items-center justify-center h-full w-full flex-col">
      <img src={Nodata} alt="" />
      <h4 className="text-black text-xl pt-2 pb-5">There is no user yet</h4>
      <div className="flex items-center">
        <button onClick={() => setModelcreate(true)} className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
          Create User
        </button>
        {isModelcreate && (
        <CreateUser
          openConfirmation
          close={closeConfirmation}
        />
        )}
      </div>
    </div>
  );
};
export default NoDataFound;
