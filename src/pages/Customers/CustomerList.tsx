/* eslint-disable react/button-has-type */
/* eslint-disable camelcase */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Pagination from '../../components/Pagination/Pagination';
import customerSlice from '../../redux/slices/customer.slice';
import { navigator } from '../../navigation/navigator';
import { randomBGColor } from '../../common/helper';
import { PAGE_CONFIG } from '../../common/utility';
import NoDataFound from './components/nodata';
import { Search } from '../../assets/images';
import { Model } from './Createcustomer';

const CustomerList = () => {
  const dispatch = useDispatch();
  const [isModelcreate, setModelcreate] = useState(false);
  const [filterData, setfilterData] = useState({
    limit: PAGE_CONFIG.LIMIT,
    page: PAGE_CONFIG.DEFAULT_PAGE_NO,
  });

  useEffect(() => {
    dispatch(customerSlice.actions.getCustomersList(filterData));
  }, []);
  const userListData = useSelector((state: { customerSlice: { list: any; }; }) => state.customerSlice.list);

  const closeConfirmation = () => {
    setModelcreate(false);
  };

  const pageNext = async () => {
    setfilterData({
      limit: PAGE_CONFIG.LIMIT,
      page: userListData.page + 1,
    });
    dispatch(customerSlice.actions.getCustomersList({
      limit: PAGE_CONFIG.LIMIT,
      page: userListData.page + 1,
    }));
  };

  const pagePrevious = async () => {
    setfilterData({
      limit: PAGE_CONFIG.LIMIT,
      page: userListData.page - 1,
    });
    dispatch(customerSlice.actions.getCustomersList({
      limit: PAGE_CONFIG.LIMIT,
      page: userListData.page - 1,
    }));
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
        {Object.keys(userListData).length === 0 || userListData?.docs.length === 0 ? (
          <NoDataFound />
        ) : (
          <>
            <div className="flex items-center justify-between bg-white px-4 py-5">
              <div className="flex flex-col">
                <p className="text-xl text-black">Customers</p>
              </div>
              <div className="flex items-center">
                <button onClick={() => setModelcreate(true)} className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
                  Invite Customer
                </button>
                {isModelcreate && (
                <Model
                  openConfirmation
                  close={closeConfirmation}
                />
                )}
              </div>
            </div>
            <div className="table-body overflow-x-hidden overflow-y-auto">
              <table className="w-full">
                <thead className="w-full">
                  <tr className="bg-blue-100 border-b border-t">
                    <th className="px-4 py-3 text-left text-black text-15px font-normal">
                      Customer
                    </th>
                    <th className="px-4 py-3 text-left text-black text-15px font-normal">Location</th>
                    <th className="px-4 py-3 text-left text-black text-15px font-normal">Project ID</th>
                    <th className="px-4 py-3 text-left text-black text-15px font-normal">Lot#</th>
                  </tr>
                </thead>
                <tbody className="w-full h-full ">
                  {userListData.docs.map((data: any, index: number) => (
                    <tr className={`w-full cursor-pointer relative ${index % 2 !== 0 && 'bg-blue-100'}`} onClick={() => { navigator.history.replace('/dashboard/customers/view-customer', { id: data.id }); }}>
                      <td className="pr-4 py-3 text-base border-b text-black">
                        <div className="flex items-center">
                          <div className="ml-4 flex items-center justify-center relative tooltip2">
                            <div className={`uppercase text-sm h-8 w-8 rounded-full flex items-center justify-center mr-3 text-white ${randomBGColor()}`}>{data.firstName[0] + data.lastName[0]}</div>

                            <div className="truncate w-32 text-gray-600 text-left text-base capitalize">{data.name}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-base border-b relative tooltip2">
                        <div className="truncate w-40 text-left text-gray-600 text-base">{data.city}</div>
                        <span className="tooltiptext text-sm w-fit-imp flex invisible bg-white text-gray-900 px-3 py-3 text-center -mb-16 absolute z-50 rounded-4 whitespace-no-wrap">
                          {data.city}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-base border-b text-black relative tooltip2">
                        <div className="truncate w-40 text-left text-gray-600 text-base">{data.projectId}</div>
                        <span className="tooltiptext text-sm w-fit-imp flex invisible bg-white text-gray-900 px-3 py-3 text-center -mb-16 absolute z-50 rounded-4 whitespace-no-wrap">
                          {data.projectId}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-base border-b text-black">
                        <div className="text-left text-gray-600 text-base whitespace-no-wrap">
                          {data.lotNumber}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Pagination data={userListData} pageNext={pageNext} pagePrevious={pagePrevious} />
          </>
        )}
      </div>
    </main>
  );
};
export default withRouter(CustomerList);
