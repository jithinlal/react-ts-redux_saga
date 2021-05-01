/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Logo, LinkedIn, Twitter, Facebook,
} from '../../assets/images';

import { Spinner } from '../../components/Loader/Loader';

export const AuthLayout = (props:any) => (
  <div className="h-full w-full flex flex-col lg:flex-row mb-lg-log bg-white px-4 py-5">
    <div className="authPage w-full lg:w-5/12 relative lg-min-w-6 h-full overflow-hidden flex bg-cover">
      <div className="items-start flex w-full px-12 pt-10 h-full flex-col">
        <NavLink to="/login">
          <img src={Logo} className="md:w-auto w-32 md:mb-6 mb-3" alt="nextPort" title="nextPort" />
        </NavLink>
        <div className="flex items-center justify-center h-full">
          <div className="slider flex items-start h-auto flex-col justify-center p-5">
            <h1 className="text-white md:text-4xl flex w-full text-2xl font-black mb-0 text-left leading-tight">
              Introducing the
              {' '}
              <br />
              {' '}
              Smartest Construction Communication
              {' '}
              <br />
              {' '}
              Platform
            </h1>
            <p className="text-white text-left text-sm font-openSans pt-3 tracking-wider w-full md:w-3/5">
              NextPort is a platform that enables homebuilders to share real-time construction updates with their customers
            </p>
          </div>
        </div>
        <footer className="flex justify-between items-end pb-6 w-full">
          <div className="flex">
            <img src={LinkedIn} className="" alt="nextPort" />
            <img src={Twitter} className="px-3" alt="nextPort" />
            <img src={Facebook} className="" alt="nextPort" />
          </div>
          <h6 className="text-white font-roboto">
            © Copyright NEXTPORT - All Rights Reserved
          </h6>
        </footer>
      </div>
    </div>
    <div
      className="forms-md w-full lg:w-7/12 md:px-5 md:pb-5 items-center justify-center flex-col overflow-hidden h-full flex relative"
    >
      <Spinner />
      {props.children}
    </div>
  </div>
);
