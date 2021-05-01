/* eslint-disable react/button-has-type */
import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import {
  useHistory,
  useLocation,
} from 'react-router-dom';
import { Formik } from 'formik';
import authSlice from '../../../redux/slices/auth.slice';
import { OtpField } from '../../../components/FormikFields/OtpInput/OtpInput';
import { AuthLayout } from '../../Layout/AuthLayout';
import { verifyEmailFormSchema } from '../../../common/validation';

const initialValues = {
  code: '',
};

const VerifyEmail = () => {
  const history = useHistory();
  const location: any = useLocation();
  const formikRef = useRef(null);
  const email = location?.state?.email;
  const dispatch = useDispatch();
  const otpRef = useRef(null);
  const verifyEmail = (values:any) => {
    dispatch(authSlice.actions.verifyEmail({ email, code: values.code }));
  };

  useEffect(() => {
    if (!location.state && !location?.state?.email) {
      history.push('/');
    }
  }, []);

  const resendOtp = () => {
    dispatch(authSlice.actions.resendVerifyMail({ email }));
  };

  return (
    <AuthLayout>
      <Formik
        innerRef={formikRef}
        initialValues={initialValues}
        onSubmit={verifyEmail}
        validationSchema={verifyEmailFormSchema}
      >
        {({ handleSubmit }) => (
          <div className="w-full lg:ml-32 lg:mr-20 md:ml-5 md:mr-5 max-w-lg p-5 md:p-0 mb-12 md:mb-0">
            <p className="text-2xl md-text-28 font-extrabold text-left">
              Verification Code
            </p>
            <div className="mb-3 md:w-9/12">
              <span className="text-sm font-normal text-gray-600 ">
                Please enter the OTP to verify your account.
                OTP has been sent to your registered email address.
              </span>
            </div>
            <span className="text-sm text-black font-normal">Verification Code</span>
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
            <div className="flex justify-end">
              Didn&apos;t receive OTP?
              <button
                type="button"
                onClick={resendOtp}
                className="text-blue-600 cursor-pointer pl-2"
              >
                Resend OTP
              </button>
            </div>
            <button
              className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full"
              onClick={() => { handleSubmit(); }}
            >
              VERIFY
            </button>
          </div>
        )}
      </Formik>
    </AuthLayout>
  );
};

export default VerifyEmail;
