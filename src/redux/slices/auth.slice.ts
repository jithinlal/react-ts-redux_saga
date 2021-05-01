/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
  authenticated: boolean;
  initialAuthentcationRequest: boolean;
  user: {
    attributes: {
      email: string;
      sub: string;
    };
    id: string;
    username: string;
  } | undefined
}

const initialState: InitialState = {
  user: undefined,
  authenticated: false,
  initialAuthentcationRequest: false,
};

export const checkauth = (state: InitialState) => state;

// eslint-disable-next-line no-unused-vars
export const login = (state: InitialState, action: PayloadAction<{ password: string, username: string }>) => state;

export const logout = (state: InitialState) => state;

export const setAuthenticatedUser = (state: InitialState, action: PayloadAction<any>) => {
  state.user = action.payload;
  state.authenticated = true;
  state.initialAuthentcationRequest = true;
};

export const setAuthentication = (state: InitialState, action: PayloadAction<boolean>) => {
  state.authenticated = action.payload;
  state.initialAuthentcationRequest = true;
};
// eslint-disable-next-line no-unused-vars
export const clearAuthentication = (state: InitialState, action: PayloadAction<void>) => {
  state.authenticated = false;
  state.initialAuthentcationRequest = true;
  state.user = undefined;
};

const signupBuilder = (state: any, action: any) => state;

export const forgotPassword = (state: any, action: any) => state;

export const resetpassword = (state: any, action: any) => state;

export const verifyEmail = (state: any, action: any) => state;

export const resendVerifyMail = (state: any, action: any) => state;

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login,
    logout,
    setAuthenticatedUser,
    checkauth,
    setAuthentication,
    clearAuthentication,
    signupBuilder,
    forgotPassword,
    resetpassword,
    verifyEmail,
    resendVerifyMail,
  },
});
export default authSlice;
