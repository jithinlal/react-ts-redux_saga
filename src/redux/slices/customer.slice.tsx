/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const createCustomer = (state: any, action: any) => state;

const getCustomersList = (state: any, action: any) => {
};

const setCustomersList = (state: { list: any; }, action: { payload: any; }) => {
  state.list = action.payload;
};

const getCustomer = (state: any, action: any) => {
};

const setCustomer = (state: { customer: any; }, action: { payload: any; }) => {
  state.customer = action.payload;
};

const resetSchdulingData = (state: any) => {
  state.customer = [];
};

const initialState = {
  list: [],
  customer: [],
};

const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    getCustomer,
    setCustomer,
    createCustomer,
    getCustomersList,
    setCustomersList,
    resetSchdulingData,
  },
});

export default customerSlice;
