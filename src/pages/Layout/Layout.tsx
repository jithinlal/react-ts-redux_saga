/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
import React, { useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import Topnav from './Topnav';
import Sidenav from './Sidenav';
import Settings from '../Settings/Settings';
import Users from '../Users/Users';
import CategoryList from '../Category/CategoryList';
import Dashboard from '../Dashboard/Dashboard';
import { FooterLogo } from '../../assets/images';
import CustomerList from '../Customers/CustomerList';
import CustomerView from '../Customers/Customer-view';

const Layout = () => {
  const history = useHistory();
  const { location } = history;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <section className="flex pl-4 py-5 w-full">
      <Sidenav />
      <div className="w-full md:w-4/5 flex flex-col h-screen overflow-y-hidden">
        <Topnav />
        <div className="w-full overflow-x-hidden flex flex-col h-full">
          <Switch>
            <Route path="/dashboard/customers/view-customer">
              <CustomerView />
            </Route>
            <Route path="/dashboard/customers">
              <CustomerList />
            </Route>
            <Route path="/dashboard/settings">
              <Settings />
            </Route>
            <Route path="/dashboard/category">
              <CategoryList />
            </Route>
            <Route path="/dashboard/users">
              <Users />
            </Route>
            <Route exact path="/dashboard/overview">
              <Dashboard />
            </Route>
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
          </Switch>
          <footer className="w-full text-right py-3 px-4 flex items-center justify-end mb-4 text-gray-700">
            Powered by
            {' '}
            <img src={FooterLogo} className="flex w-24" alt="nextPort" />
          </footer>
        </div>
      </div>
    </section>
  );
};
export default Layout;
