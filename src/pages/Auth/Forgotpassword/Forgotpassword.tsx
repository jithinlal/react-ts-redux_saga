import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import {
  NavLink,
} from 'react-router-dom';
import { Formik } from 'formik';

import { AuthLayout } from '../../Layout/AuthLayout';
import authSlice from '../../../redux/slices/auth.slice';
import { forgotFormSchema } from '../../../common/validation';
import InputBox from '../../../components/FormikFields/InputBox/InputBox';

const initialValues = {
  email: '',
};

const ForgotPass = () => {
  const formikRef = useRef(null);
  const dispatch = useDispatch();

  const forgotPassword = (values:any) => {
    dispatch(authSlice.actions.forgotPassword(values));
  };

  return (
    <AuthLayout showSignin>
      <Formik
        innerRef={formikRef}
        initialValues={initialValues}
        onSubmit={forgotPassword}
        validationSchema={forgotFormSchema}
      >
        {({ handleSubmit, values }) => (
          <>
            <div className="flex items-center justify-center md:justify-end md:px-4 text-sm font-medium py-1 w-full">
              <p className="font-normal text-15 mr-4 text-black md:text-white lg:text-black">
                Already have an  account?
              </p>
              <NavLink to="/login" className="bg-transparent text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 rounded hover:bg-blue-600">SIGN IN</NavLink>
            </div>
            <div className="flex w-full justify-center flex-col items-end px-24 formField sections h-full max-w-6xl">
              <div className="flex flex-col w-full items-start mb-8">
                <h4 className="f-28 font-semibold text-left w-full text-2xl text-black">Forgot Password?</h4>
                <span className="text-gray-600">
                  Enter the email address associated with your account.
                  We will
                  {' '}
                  <br />
                  {' '}
                  email you a OTP to reset your password
                </span>
              </div>
              <div className="w-full bg-white flex flex-col pb-8">
                <InputBox name="email" label="Email*" placeholder="" />
              </div>
              <button
                type="button"
                onClick={() => {
                  if (values.email) handleSubmit();
                }}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full"
              >
                Send
              </button>
            </div>
          </>
        )}
      </Formik>
    </AuthLayout>
  );
};

export default ForgotPass;
