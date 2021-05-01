/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import moment from 'moment';

import { randomBGColor } from '../../../common/helper';

const Customers = () => {
  const userList = useSelector((state: { customerSlice: { list: any; }; }) => state.customerSlice.list?.docs);

  return (
    <div className="w-fulll md:w-1/2 h-85 overflow-x-auto overflow-y-hidden bg-white rounded-2xl border border-gray-400 mr-4 pb-5">
      <div className="flex items-center justify-between bg-white mx-4 pt-5 border-b border-gray-400">
        <div className="flex flex-col">
          <p className="text-xl text-black border-b-2 border-gray-700 border-h pb-3">Customers</p>
        </div>
        <div className="flex items-center">
          <NavLink to="/customers" className="text-blue-500 hover:bg-blue-700 border-b border-blue-400">
            View all
          </NavLink>
        </div>
      </div>
      <div className="h-64 overflow-y-auto pl-3">
        {userList && userList.length > 0 ? (
          <>
            {userList.map((data: any) => (
              <div key={data._id} className="flex items-center justify-start px-2 py-4 space-x-4 text-gray-800 border-b border-gray-400">
                <div className="flex-shrink-0 w-12">
                  <div className={`uppercase h-10 w-10 rounded-full flex items-center justify-center mr-3 text-white ${randomBGColor()}`}>
                    {data.firstName[0] ? data.firstName[0] : 'N'}
                    {' '}
                    {data.lastName[0] ? data.lastName[0] : 'P'}
                  </div>
                </div>
                <div className="flex flex-col w-full">
                  <div className="text-15px font-bold capitalize">{data.name}</div>
                  <div className="text-sm text-gray-600 capitalize">{data.model?.name}</div>
                  <div className="text-sm text-gray-600">
                    Estimated Completion Date:
                    {' '}
                    { moment(data.updatedAt).format('LL')}
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : <div className="h-40 flex justify-center items-center text-center w-full font-normal text-gray-500">There are no customers..</div>}
      </div>
    </div>
  );
};
export default Customers;
