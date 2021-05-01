import React from 'react';
import { Search } from '../../assets/images';
import NoDataFound from './components/nodata';

const Users = () => (
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
      <NoDataFound />
    </div>
  </main>
);
export default Users;
