/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import { Auth } from 'aws-amplify';
import { toast } from 'react-toastify';
import { PayloadAction } from '@reduxjs/toolkit';
import { takeEvery, call, put } from 'redux-saga/effects';

import Api from '../../services/Apis/index';
import authSlice from '../slices/auth.slice';
import loaderSlice from '../slices/loader.slice';
import { storageEngine } from '../../common/helper';
import { navigator } from '../../navigation/navigator';
import {
  LOGIN, LOGOUT, SIGNUP, CHECK_AUTH, CHECK_STATUS, VERIFY_EMAIL, RESET_PASSWORD, CHANGE_PASSWORD, FORGOT_PASSWORD, RESEND_VERIFY_MAIL,
} from '../actions/auth.actions';
import { Logout } from '../../assets/images';

function* handleUnverified(email: string) {
  try {
    toast.success('Please Verify your Email');
    navigator.history.replace('/verifyEmail', { email });
    yield put(loaderSlice.actions.hide());
  } catch (err) {
    yield put(loaderSlice.actions.hide());
    toast.error(err.message);
  }
}

function* login(action: PayloadAction<{ username: string; password: string }>) {
  const { password, username } = action.payload;
  try {
    yield put(loaderSlice.actions.show());
    yield put(authSlice.actions.setAuthenticatedUser({
      id: 'us-east-1:5ef102e3-e761-4aa3-bd63-a93b0e26d9c8',
      username: 'kiran.r@neoito.com',
      attributes: {
        sub: 'c7e0782d-12bf-4bfb-970c-b8dbf844e993',
        email_verified: true,
        'custom:role': 'BUILDER',
        email: 'kiran.r@neoito.com',
      },
    }));
    navigator.history.replace('/dashboard/overview');
    yield put(loaderSlice.actions.hide());
  } catch (err) {
    if (err.code === 'UserNotConfirmedException') {
      yield handleUnverified(username);
    } else {
      yield put(authSlice.actions.setAuthentication(false));
      yield put(loaderSlice.actions.hide());
      toast.error('Invalid username or password');
    }
  }
}

function* logout() {
  try {
    yield put(loaderSlice.actions.show());
    yield put(authSlice.actions.clearAuthentication());
    navigator.history.replace('/login');
    yield put(loaderSlice.actions.hide());
  } catch (err) {
    yield put(loaderSlice.actions.hide());
  }
}

function* signupBuilder(action: any) {
  try {
    const {
      email,
      companyName,
      companyLogo,
      firstName,
      lastName,
      address,
      city,
      state,
      zipCode,
      phoneNumber,
      password,
      userName,
    } = action.payload;
    yield put(loaderSlice.actions.show());
    const passAttributes = {
      username: email,
      password,
      attributes: {
        email,
        'custom:role': 'BUILDER',
      },
    };
    navigator.history.replace('/verifyEmail', { email });
    yield put(loaderSlice.actions.hide());
    toast.success('Verification code sent to your mail.');
  } catch (err) {
    if (err.message) {
      toast.error(err.message);
    } else {
      toast.error(err);
    }
    yield put(loaderSlice.actions.hide());
  }
}

function* checkauth(action: PayloadAction<{ newpassword: string; currentpassword: string; username: string }>) {
  const pathName = navigator?.history?.location?.pathname;
  try {
    yield put(loaderSlice.actions.show());
    yield put(authSlice.actions.setAuthenticatedUser({
      id: 'us-east-1:5ef102e3-e761-4aa3-bd63-a93b0e26d9c8',
      username: 'kiran.r@neoito.com',
      attributes: {
        sub: 'c7e0782d-12bf-4bfb-970c-b8dbf844e993',
        email_verified: true,
        'custom:role': 'BUILDER',
        email: 'kiran.r@neoito.com',
      },
    }));
    if (!pathName.match('/dashboard')) {
      navigator.history.replace('/dashboard/overview');
    }
    yield put(loaderSlice.actions.hide());
  } catch (err) {
    if (pathName.match('/dashboard')) {
      navigator.history.replace('/login');
    }
    yield put(authSlice.actions.setAuthentication(false));
    yield put(loaderSlice.actions.hide());
    toast.error(err.message);
  }
}

function* checkstatus() {
  try {
    yield put(loaderSlice.actions.show());
    yield put(authSlice.actions.setAuthenticatedUser({
      id: 'us-east-1:5ef102e3-e761-4aa3-bd63-a93b0e26d9c8',
      username: 'kiran.r@neoito.com',
      attributes: {
        sub: 'c7e0782d-12bf-4bfb-970c-b8dbf844e993',
        email_verified: true,
        'custom:role': 'BUILDER',
        email: 'kiran.r@neoito.com',
      },
    }));
    yield put(loaderSlice.actions.hide());
  } catch (err) {
    if (err === 'No current user') {
      navigator.history.replace('/login');
    }
    yield put(loaderSlice.actions.hide());
  }
}

function* forgotpassword(action: any) {
  try {
    yield put(loaderSlice.actions.show());
    const { email } = action.payload;
    navigator.history.replace('/resetpassword', { email });
    toast.info('Verification code sent to your mail.');
    yield put(loaderSlice.actions.hide());
  } catch (err) {
    toast.error(err.message);
    yield put(loaderSlice.actions.hide());
  }
}

function* resetpassword(action: any) {
  try {
    yield put(loaderSlice.actions.show());
    const { email, code, password } = action.payload;
    navigator.history.replace('/restPasswordSuccess');
    toast.success('Password changed successfully. Please Login');
    yield put(loaderSlice.actions.hide());
  } catch (err) {
    yield put(loaderSlice.actions.hide());
    toast.error(err.message);
  }
}

function* changePassword(action: any) {
  try {
    const { currentPassword, newPassword } = action.payload;
    yield put(loaderSlice.actions.show());
    yield put(loaderSlice.actions.hide());
    toast.success('Successfully Changed Password');
  } catch (err) {
    if (err.code === 'NotAuthorizedException') {
      toast.error('Please enter correct current password');
    } else {
      toast.error(err.message);
    }
    yield put(loaderSlice.actions.hide());
  }
}

function* verifyEmail(action: any) {
  try {
    yield put(loaderSlice.actions.show());
    const { email, code } = action.payload;
    yield put(loaderSlice.actions.hide());
    toast.success('Successfully Verified email');
    navigator.history.replace('/verifyEmailSuccess');
  } catch (err) {
    if (err === 'not authenticated') {
      toast.success('Successfully Verified email. Please Login');
      navigator.history.replace('/login');
    } else {
      // yield put(authSlice.actions.verifyEmailError(err));
      toast.error(err.message);
    }
    yield put(loaderSlice.actions.hide());
  }
}

function* resendVerifyMail(action: any) {
  try {
    yield put(loaderSlice.actions.show());
    const { email } = action.payload;
    yield put(loaderSlice.actions.hide());
    toast.success('Verify Mail send successfully. Please check your email');
  } catch (err) {
    yield put(loaderSlice.actions.hide());
    toast.error(err.message);
  }
}

function* authSaga() {
  yield takeEvery(LOGIN, login);
  yield takeEvery(LOGOUT, logout);
  yield takeEvery(SIGNUP, signupBuilder);
  yield takeEvery(CHECK_AUTH, checkauth);
  yield takeEvery(FORGOT_PASSWORD, forgotpassword);
  yield takeEvery(RESET_PASSWORD, resetpassword);
  yield takeEvery(CHECK_STATUS, checkstatus);
  yield takeEvery(CHANGE_PASSWORD, changePassword);
  yield takeEvery(RESEND_VERIFY_MAIL, resendVerifyMail);
  yield takeEvery(VERIFY_EMAIL, verifyEmail);
}

export default authSaga;
