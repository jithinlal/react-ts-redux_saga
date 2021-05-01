/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react';
import { Model } from './AddPlan';
import {
  Search, Calender, Landmark, AddMore,
} from '../../assets/images';

const CustomerView = () => {
  const [isModelcreate, setModelcreate] = useState(false);

  useEffect(() => {

  }, []);

  const closeConfirmation = () => {
    setModelcreate(false);
  };

  return (
    <main className="w-full flex-grow px-5">
      <div className="fixed top-0 mt-5 z-40 w-4/12 hidden md:flex flex-col justify-center">
        <input
          className="topSearch focus:outline-none border placeholder-gray-600 rounded-4 py-4 pr-4 md:pl-12 block appearance-none leading-normal w-full rounded-full bg-transparent text-13px"
          type="text"
          placeholder="Search here"
        />
        <div className="h-full w-12 absolute top-0 flex items-center md:left-0 right-0">
          <img src={Search} className="pl-4" alt="search" />
        </div>
      </div>
      <div className="w-full overflow-hidden bg-white rounded-2xl border border-gray-400 h-full">

        <div className="flex items-center justify-between bg-white px-4 py-5">
          <div className="flex flex-col">
            <p className="text-xl text-black">Customers</p>
          </div>
          <div className="flex items-center">
            <h1 className="text-blue-500 underline">View Progress</h1>
            <span>NxP App: Active</span>
          </div>
        </div>
        <div className="flex flex-row overflow-x-hidden overflow-y-auto w-full">
          <div className="flex flex-row w-2/3 rounded-xl bg-gray-200 h-32 justify-center items-center">
            <div className="w-2/5 bg-gray-200 h-24 flex items-center justify-center relative text-lg border-r border-gray-300">
              <div className="uppercase h-12 w-12 rounded-full flex items-center justify-center mr-3 text-white bg-red-500">HS</div>
              <div className="flex flex-col text-black text-left text-base capitalize">
                Harley Sawyer
                <span className="text-gray-600 text-sm">
                  JB 9879
                </span>
              </div>
            </div>
            <div className="w-3/5">
              rigth
            </div>
          </div>
          <div className="w-1/3 flex flex-col px-5">
            <div className="flex justify-center h-32 items-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-4 px-12 flex flex-row h-16 items-center">
                <img src={Calender} className="pr-3" alt="Calender" />
                {' '}
                Schedule a Meeting
              </button>
            </div>
            <div className="right-sidebar flex flex-col w-full rounded-xl bg-gray-200 justify-center items-center pt-8">
              <div className="flex flex-col items-center justify-center px-3 py-5 w-40 rounded-xl relative text-black">
                <img src="https://nextport-homeowner.s3.amazonaws.com/public/Models/model-1617616285177.jpeg" alt="merchantpic" className="h-24 w-24 rounded-full" />
              </div>
              <div className="flex w-full justify-center flex-col items-center pb-8">
                <h1 className="flex text-lg font-bold text-gray-700">Georgian Craftsman X</h1>
                <span className="flex text-xs text-gray-600">
                  <img src={Landmark} alt="Landmark" />
                  {' '}
                  Vancouver Lot 78695
                </span>
              </div>
              <div
                className="flex flex-col items-center justify-center px-6 py-5 rounded-xl border border-gray-400 relative text-black cursor-pointer mb-5 bg-white"
                onClick={() => setModelcreate(true)}
                tabIndex={0}
                role="button"
              >
                <img src={AddMore} alt="merchantpic" className="h-20 w-20 rounded-full" />
                <h1 className="flex pt-3 text-xs font-bold">Add More</h1>
              </div>
              {isModelcreate && (
              <Model
                openConfirmation
                close={closeConfirmation}
              />
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default CustomerView;
