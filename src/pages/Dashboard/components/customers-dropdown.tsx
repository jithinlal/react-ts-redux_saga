/* eslint-disable max-len */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import customerSlice from '../../../redux/slices/customer.slice';
import { Search, DownArrow } from '../../../assets/images';
import { randomBGColor } from '../../../common/helper';
import { PAGE_CONFIG } from '../../../common/utility';
import '../styles.scss';

export const CustomersDropdown = (props:any) => {
  const dispatch = useDispatch();
  const [showSelect, setshowSelect] = useState(false);
  const [isGraphActive, setGraphActive] = useState(false);
  const [isCustomerName, setCustomerName] = useState('Customers');
  const [filterData, setfilterData] = useState({
    limit: PAGE_CONFIG.LIMIT,
    page: PAGE_CONFIG.DEFAULT_PAGE_NO,
  });
  const {
    selectProjectID,
  } = props;

  useEffect(() => {
    dispatch(customerSlice.actions.getCustomersList(filterData));
    setGraphActive(true);
  }, []);

  const userListData = useSelector((state: any) => state.customerSlice.list);

  const searchCustomer = (event: any) => {
    const data = { ...filterData, search: event.target.value };
    setfilterData(data);
    dispatch(customerSlice.actions.getCustomersList(data));
  };

  const selectCustomer = (data:any) => {
    selectProjectID(data);
    setshowSelect(false);
    setCustomerName(data.name);
  };
  if (Object.keys(userListData).length !== 0 && userListData?.docs.length > 0 && isGraphActive) {
    setGraphActive(false);
    selectCustomer(userListData.docs[0]);
  }
  return (
    <>
      <div
        className="w-fit flex items-center ml-6 px-3 py-1 border rounded relative cursor-pointer text-black"
        onClick={() => setshowSelect(!showSelect)}
      >
        {isCustomerName}
        {' '}
        <img src={DownArrow} alt="down" className="pl-5" />
      </div>
      {showSelect && (
        <div className="search-customer w-56 -ml-24 z-40 absolute top-100 bg-white rounded-4 flex flex-col text-left right-0 mr-16">
          <div className="w-full md:flex flex-col justify-center px-2 pt-2 relative">
            <input
              className="focus:outline-none border placeholder-gray-600 rounded-4 py-2 pr-4 md:pl-8 block appearance-none leading-normal w-full bg-transparent text-13px"
              type="text"
              placeholder="Search Customers"
              onInput={(e) => searchCustomer(e)}
            />
            <div className="h-full w-12 absolute flex items-center md:left-0 right-0">
              <img src={Search} className="pl-4" alt="search" />
            </div>
          </div>
          <div className="flex flex-col items-center p-2 h-40 overflow-y-auto">
            {Object.keys(userListData).length === 0 || userListData?.docs.length === 0 ? (
              'No data found!!'
            ) : (
              <>
                {userListData.docs.map((data: any) => (
                  <div key={data.id} className="flex w-full items-center justify-start relative tooltip2 bg-white hover:bg-gray-200 py-2 cursor-pointer" onClick={() => { selectCustomer(data); }}>
                    <div className={`uppercase text-sm h-8 w-8 rounded-full flex items-center justify-center mr-3 text-white ${randomBGColor()}`}>{data.firstName[0] + data.lastName[0]}</div>
                    <div className="truncate w-32 text-gray-600 text-left text-base capitalize">{data.name}</div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};
export default CustomersDropdown;
CustomersDropdown.propTypes = {
  selectProjectID: PropTypes.func,
};

CustomersDropdown.defaultProps = {
  selectProjectID: () => { },
};
