/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import customerSlice from '../../redux/slices/customer.slice';
import { Search, DownArrow } from '../../assets/images';
import Customers from './components/customers';
import GraphWidget from './components/graph-widget';

const Dashboard = () => {
  const dispatch = useDispatch();
  const [showSelect, setshowSelect] = useState(false);

  useEffect(() => {
    dispatch(customerSlice.actions.getCustomersList({}));
  }, []);

  return (
    <main className="w-full flex-grow pl-5">
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
      <GraphWidget />
      <div className="flex flex-row py-4">
        <Customers />
        <div className="w-fulll md:w-1/2 h-85 overflow-x-auto overflow-y-hidden bg-white rounded-2xl border border-gray-400 pb-5">
          <div className="flex items-center justify-between bg-white mx-4 pt-5 border-b border-gray-400">
            <div className="flex flex-col">
              <p className="text-xl text-black border-b-2 border-gray-700 border-h pb-3">Tasks</p>
            </div>
            <div className="flex items-center">
              <div
                className="w-fit flex items-center px-3 py-1 border rounded relative cursor-pointer text-black"
                onClick={() => setshowSelect(!showSelect)}
              >
                Today
                {' '}
                <img src={DownArrow} alt="down" className="pl-2" />
                {showSelect && (
                <div className="w-full -ml-3 mt-32 z-40 absolute top-100 bg-white rounded-4 shadow-xl flex flex-col text-left">
                  <div
                    className="w-full px-3 py-1 font-normal text-sm"
                  >
                    Last 12 months
                  </div>
                  <div
                    className="w-full px-3 py-1 font-normal text-sm"
                  >
                    Last 10 weeks
                  </div>
                  <div
                    className="w-full px-3 py-1 font-normal text-sm"
                  >
                    Last 7 days
                  </div>
                </div>
                )}
              </div>
              <NavLink to="/dashboard/owner/create-owner" className="text-blue-500 hover:bg-blue-700 border-b border-blue-400 ml-3">
                View all
              </NavLink>
            </div>
          </div>
          <div className="h-64 overflow-y-auto pl-3">
            <div className="flex items-center justify-start px-2 py-4 space-x-4 text-gray-800 border-b border-gray-400">
              <div className="flex-shrink-0 w-16 rounded-2xl py-2 px-2 ring text-center bg-gray-300">
                <h2 className="font-bold text-xl">25</h2>
                <div className="text-gray-500 text-sm">March</div>
              </div>
              <div className="flex flex-col w-full">
                <div className="text-15px font-bold">Schedule Foundation Work</div>
                <div className="text-sm text-gray-600">House: Hamilton Craftman Style</div>
                <div className="text-sm text-gray-600">Contractor: ABC Concrete Foundations</div>
              </div>
            </div>
            <div className="flex items-center justify-start px-2 py-4 space-x-4 text-gray-800 border-b border-gray-400">
              <div className="flex-shrink-0 w-16 rounded-2xl py-2 px-2 ring text-center bg-gray-300">
                <h2 className="font-bold text-xl">12</h2>
                <div className="text-gray-500 text-sm">June</div>
              </div>
              <div className="flex flex-col w-full">
                <div className="text-15px font-bold">Schedule Foundation Work</div>
                <div className="text-sm text-gray-600">House: Hamilton Craftman Style</div>
                <div className="text-sm text-gray-600">Contractor: ABC Concrete Foundations</div>
              </div>
            </div>
            <div className="flex items-center justify-start px-2 py-4 space-x-4 text-gray-800 border-b border-gray-400">
              <div className="flex-shrink-0 w-16 rounded-2xl py-2 px-2 ring text-center bg-gray-300">
                <h2 className="font-bold text-xl">32</h2>
                <div className="text-gray-500 text-sm">January</div>
              </div>
              <div className="flex flex-col w-full">
                <div className="text-15px font-bold">Schedule Foundation Work</div>
                <div className="text-sm text-gray-600">House: Hamilton Craftman Style</div>
                <div className="text-sm text-gray-600">Contractor: ABC Concrete Foundations</div>
              </div>
            </div>
            <div className="flex items-center justify-start px-2 py-4 space-x-4 text-gray-800 border-b border-gray-400">
              <div className="flex-shrink-0 w-16 rounded-2xl py-2 px-2 ring text-center bg-gray-300">
                <h2 className="font-bold text-xl">11</h2>
                <div className="text-gray-500 text-sm">March</div>
              </div>
              <div className="flex flex-col w-full">
                <div className="text-15px font-bold">Schedule Foundation Work</div>
                <div className="text-sm text-gray-600">House: Hamilton Craftman Style</div>
                <div className="text-sm text-gray-600">Contractor: ABC Concrete Foundations</div>
              </div>
            </div>
            <div className="flex items-center justify-start px-2 py-4 space-x-4 text-gray-800 border-b border-gray-400">
              <div className="flex-shrink-0 w-16 rounded-2xl py-2 px-2 ring text-center bg-gray-300">
                <h2 className="font-bold text-xl">03</h2>
                <div className="text-gray-500 text-sm">May</div>
              </div>
              <div className="flex flex-col w-full">
                <div className="text-15px font-bold">Schedule Foundation Work</div>
                <div className="text-sm text-gray-600">House: Hamilton Craftman Style</div>
                <div className="text-sm text-gray-600">Contractor: ABC Concrete Foundations</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Dashboard;
