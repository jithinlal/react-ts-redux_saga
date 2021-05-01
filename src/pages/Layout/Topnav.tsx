/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
import React from 'react';
import { Notification } from '../../assets/images';

const Topnav = () => (
  <>
    <header className="w-full flex items-center py-2 pl-6 pr-6 sm:flex pb-5">
      <div className="w-1/2" />
      <div x-data="{ isOpen: false }" className="relative w-1/2 flex justify-end">
        <button className="realtive z-10 h-12 rounded-full overflow-hidden">
          <img className="pb-6" src={Notification} alt="nextPort" />
        </button>
      </div>
    </header>
  </>
);

export default Topnav;
