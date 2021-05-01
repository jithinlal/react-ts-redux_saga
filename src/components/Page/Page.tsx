/* eslint-disable react/jsx-props-no-spreading */
import React, { forwardRef } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const Page = (props:any) => {
  const {
    title,
    children,
  } = props;
  return (
    <div>
      <Helmet>
        <title>
          NextPort -
          {title}
        </title>
      </Helmet>
      {children}
    </div>
  );
};

export default Page;

Page.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

Page.defaultProps = {
  children: '',
  title: '',
};
