/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  visible: false,
};

export const show = (state: { visible: boolean; }) => { state.visible = true; };

export const hide = (state: { visible: boolean; }) => { state.visible = false; };

const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    show,
    hide,
  },
});

export default loaderSlice;
