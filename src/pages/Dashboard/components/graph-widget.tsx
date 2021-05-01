import React from 'react';
import { NavLink } from 'react-router-dom';

import { CustomersDropdown } from './customers-dropdown';

import '../styles.scss';

export const GraphWidget = () => {
  const projectIDFilter = (data:any) => {
    console.log(data.id);
  };

  return (
    <div className="w-fulll h-85 overflow-x-auto overflow-y-hidden bg-white rounded-2xl border border-gray-400 pb-5 pr-3">
      <div className="flex items-center justify-between bg-white mx-4 pt-5 border-b border-gray-400 ">
        <div className="flex flex-col">
          <p className="text-xl text-black border-b-2 border-gray-700 border-h pb-2">Construction Schedule</p>
        </div>
        <div className="flex items-center pb-2">
          <CustomersDropdown selectProjectID={projectIDFilter} />
          <NavLink to="/dashboard/scheduling" className="text-blue-500 hover:bg-blue-700 border-b border-blue-400 ml-3">
            View all
          </NavLink>
        </div>
      </div>
      <div className="shedule flex justify-center items-center text-center font-normal text-gray-500 pl-4 pt-3 overflow-x-auto">
        <div className="flex flex-col items-center p-2 h-40 overflow-y-auto">
          No data found!!
        </div>
      </div>
    </div>
  );
};
export default GraphWidget;
