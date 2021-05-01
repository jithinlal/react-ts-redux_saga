/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Formik } from 'formik';

import { Eye } from '../../../assets/images';
import { AuthLayout } from '../../Layout/AuthLayout';
import authSlice from '../../../redux/slices/auth.slice';
import { loginFormSchema } from '../../../common/validation';
import InputBox from '../../../components/FormikFields/InputBox/InputBox';
import PasswordInput from '../../../components/FormikFields/PasswordInput/PasswordInput';

const EyeIcon = (props: any) => {
  const { className } = props;
  return <img className={`mr-4 pr-1 cursor-pointer ${className}`} src={Eye} alt="" />;
};

const initialValues = {
  email: '',
  password: '',
};

const Login = () => {
  const formikRef: any = useRef();
  const dispatch = useDispatch();
  const onSubmit = (values: typeof initialValues) => {
    dispatch(authSlice.actions.login({ password: values.password, username: values.email }));
  };
  return (
    <AuthLayout>
      <Formik
        innerRef={formikRef}
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={loginFormSchema}
      >
        {({
          handleSubmit, values,
        }) => (
          <>
            <div className="flex items-center justify-center md:justify-end md:px-4 text-sm font-medium py-1 w-full">
              <p className="font-normal text-15 mr-4 text-black md:text-white lg:text-black">
                Don&apos;t have an account?
              </p>
              <NavLink to="/register" className="bg-transparent text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 rounded hover:bg-blue-600">SIGN UP</NavLink>
            </div>
            <div className="w-full flex justify-center flex-col items-end pr-32 pl-32 formField sections h-full max-w-6xl">
              <div className="flex flex-col w-full items-start mb-8">
                <h4 className="f-28 font-semibold text-left w-full text-2xl">Sign in to your account</h4>
                <span className="text-gray-700">Explore our tool.</span>
              </div>
              <div className="flex mb-8 w-full">
                <InputBox name="email" label="User Name*" placeholder="" />
              </div>
              <PasswordInput
                name="password"
                label="Password*"
                placeholder=""
                righticon={EyeIcon}
                type="password"
                onKeyDown={(e: any) => {
                  if (e.key === 'Enter') {
                    handleSubmit();
                  }
                }}
              />
              <div className="w-full intro-x flex text-gray-700 dark:text-gray-600 text-xs sm:text-sm pt-2">
                <div className="flex items-center mr-auto">
                  <input id="remember-me" type="checkbox" className="form-check-input border mr-2" />
                  <label className="cursor-pointer select-none" htmlFor="remember-me">Keep me signed in</label>
                </div>
                <NavLink to="/forgotPassword" className="pl-2 mt-1 text-blue-700 hover:text-blue-700">Forgot Password?</NavLink>
              </div>
              <button
                type="button"
                onClick={() => {
                  if (values.email && values.password) handleSubmit();
                }}
                className="bg-blue-500 mt-8 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full"
              >
                Sign In
              </button>
            </div>
          </>
        )}
      </Formik>
    </AuthLayout>
  );
};

export default Login;
