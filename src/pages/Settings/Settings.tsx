import React, { useEffect, useState } from 'react';
import { Search } from '../../assets/images';

const Settings = () => {
  const [isEditModel, setEditModel] = useState('');

  useEffect(() => {
    setEditModel('Settings');
  }, []);

  return (
    <main className="w-full flex-grow pl-5 pr-5">
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
      <div className="w-full h-85 overflow-x-auto overflow-y-hidden bg-white rounded-2xl border border-gray-400 h-full">
        <div className="flex items-center justify-between bg-white px-4 py-5">
          <div className="flex flex-col">
            <p className="text-xl text-black">{isEditModel}</p>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Settings;
