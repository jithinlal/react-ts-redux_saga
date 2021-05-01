/* eslint-disable react/button-has-type */
import React from 'react';
import {
  NavLink,
} from 'react-router-dom';
import { AuthLayout } from '../../Layout/AuthLayout';
import { SendMailSuccess } from '../../../assets/images';

const RestPasswordSuccess = () => (
  <AuthLayout showSignin>
    <div className="flex items-center justify-center md:justify-end md:px-4 text-sm font-medium py-1 w-full">
      <p className="font-normal text-15 mr-4 text-black md:text-white lg:text-black">
        Already have an  account?
      </p>
      <NavLink to="/login" className="bg-transparent text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 rounded hover:bg-blue-600">SIGN IN</NavLink>
    </div>
    <div className="flex w-full justify-center flex-col items-center px-24 formField sections h-full max-w-6xl">
      <img src={SendMailSuccess} alt="Verify Nextport email" className="overflow-hidden pr-2" />
      <div className="flex w-full justify-center flex-col items-center pt-4">
        <h4 className="f-28 font-semibold text-center text-2xl text-black">
          successfully passwoed reset!
        </h4>
        <span className="text-gray-600 pt-2 text-center">
          You can now use your new password
          {' '}
          <br />
          to log in to your account.
        </span>
        <NavLink to="/login" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 w-64 text-center mt-6">Login</NavLink>
      </div>
    </div>
  </AuthLayout>
);
export default RestPasswordSuccess;
