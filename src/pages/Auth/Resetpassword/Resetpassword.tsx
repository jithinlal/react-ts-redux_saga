/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import {
  NavLink,
  useLocation,
  useHistory,
} from 'react-router-dom';

import { AuthLayout } from '../../Layout/AuthLayout';
import authSlice from '../../../redux/slices/auth.slice';
import { resetpassFormSchema } from '../../../common/validation';
import InputBox from '../../../components/FormikFields/InputBox/InputBox';
import { OtpField } from '../../../components/FormikFields/OtpInput/OtpInput';

const initialValues = {
  code: '',
  password: '',
  confirm_password: '',
};

const Resetpassword = () => {
  const history = useHistory();
  const location: any = useLocation();
  const otpRef = useRef(null);
  const formikRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!location.state && !location?.state?.email) {
      history.push('/');
    }
  }, []);

  const resetpassword = (values:any) => {
    const { email } = location.state;
    dispatch(authSlice.actions.resetpassword({ ...values, email }));
  };

  return (
    <AuthLayout showSignin>
      <Formik
        innerRef={formikRef}
        initialValues={initialValues}
        onSubmit={resetpassword}
        validationSchema={resetpassFormSchema}
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
              <div className="flex flex-col w-full items-start mb-4">
                <h4 className="f-28 font-semibold text-left w-full text-2xl text-black">Reset Password</h4>
                <span className="text-gray-600">
                  We will email you a verification code
                  {' '}
                  <br />
                  to reset your password.
                </span>
              </div>
              <div className="w-full bg-white flex flex-col pb-3">
                <label className="text-black">Verification Code</label>
                <OtpField
                  name="code"
                  ref={otpRef}
                  containerStyle="w-full flex items-center justify-between mb-3"
                  inputStyle="pinInput"
                  numInputs={6}
                  autoFocus
                  otpType="number"
                  shouldAutoFocus
                />
              </div>
              <div className="w-full bg-white flex flex-col pb-6">
                <InputBox
                  name="password"
                  label="New Password"
                  type="password"
                  placeholder=""
                />
              </div>
              <div className="w-full bg-white flex flex-col pb-8">
                <InputBox
                  name="confirm_password"
                  label="Confirm Password"
                  type="password"
                  placeholder=""
                />
              </div>
              <button
                type="button"
                onClick={() => {
                  if (values.password && values.confirm_password) handleSubmit();
                }}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full"
              >
                Submit
              </button>
            </div>
          </>
        )}
      </Formik>
    </AuthLayout>
  );
};

export default Resetpassword;
