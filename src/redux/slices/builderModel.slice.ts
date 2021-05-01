/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const createModel = (state: any, action: any) => {
};

const getModelList = (state: any, action: any) => {
};

const setModelList = (state: { list: any; }, action: { payload: any; }) => {
  state.list = action.payload?.docs;
};

const initialState = {
  list: [],
};

const builderModelSlice = createSlice({
  name: 'builderModelSlice',
  initialState,
  reducers: {
    createModel,
    getModelList,
    setModelList,
  },
});

export default builderModelSlice;
