/* eslint-disable max-len */
import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Layout from '../pages/Layout/Layout';
import Login from '../pages/Auth/Login/Login';
import authSlice from '../redux/slices/auth.slice';
import { setTopLevelNavigation } from './navigator';
import { RootState } from '../redux/store/rootReducer';
import Register from '../pages/Auth/Register/Register';
import VerifyEmail from '../pages/Auth/VerifyEmail/VerifyEmail';
import Resetpassword from '../pages/Auth/Resetpassword/Resetpassword';
import ForgotPassword from '../pages/Auth/Forgotpassword/Forgotpassword';
import VerifyEmailSuccess from '../pages/Auth/VerifyEmailSuccess/VerifyEmailSuccess';
import RestPasswordSuccess from '../pages/Auth/RestPasswordSuccess/RestPasswordSuccess';

export default function Routes() {
  const dispatch = useDispatch();
  const { initialAuthentcationRequest, authenticated } = useSelector((state: RootState) => state.auth);
  useEffect(() => {
    if (!initialAuthentcationRequest) {
      dispatch(authSlice.actions.checkauth());
    }
  }, []);

  return (
    <Router ref={setTopLevelNavigation}>
      {
        initialAuthentcationRequest === true && authenticated === false
          ? (
            <>
              <Route path="/login" render={() => <Login />} />
              <Route exact path="/register" render={() => <Register />} />
              <Route exact path="/verifyEmail" render={() => <VerifyEmail />} />
              <Route exact path="/verifyEmailSuccess" render={() => <VerifyEmailSuccess />} />
              <Route exact path="/forgotPassword" render={() => <ForgotPassword />} />
              <Route exact path="/resetpassword" render={() => <Resetpassword />} />
              <Route exact path="/restPasswordSuccess" render={() => <RestPasswordSuccess />} />
            </>
          )
          : null
      }
      {
        initialAuthentcationRequest === true && authenticated === true
          ? <Route path="/dashboard" render={() => <Layout />} />
          : null
      }
      <Route exact path="/" render={() => <Login />} />
    </Router>
  );
}
