/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const getBuilder = (state: any, action: any) => {
};

const setBuilderData = (state: { list: any; }, action: { payload: any; }) => {
  state.list = action.payload;
};

const initialState = {
  list: [],
};

const builderSlice = createSlice({
  name: 'builder',
  initialState,
  reducers: {
    getBuilder,
    setBuilderData,
  },
});

export default builderSlice;
