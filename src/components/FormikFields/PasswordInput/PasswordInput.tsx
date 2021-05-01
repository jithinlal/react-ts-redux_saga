import React, { useState } from 'react';
import { Eye, Hide } from '../../../assets/images';

const { InputBox } = require('../InputBox/InputBox');

const EyeIcon = () => <img className="mr-4 pr-1 cursor-pointer" src={Eye} alt="" />;

const HideIcon = () => <img className="mr-4 pr-1 cursor-pointer" src={Hide} alt="" />;

export const PasswordInput = (props: any) => {
  const [type, setType] = useState('password');
  const onClickRightButton = () => {
    if (type === 'password') {
      setType('text');
    } else {
      setType('password');
    }
  };
  return (
    <InputBox
      autoComplete="off"
      name="password"
      label="Password"
      placeholder="password"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      type={type}
      righticon={type === 'password' ? HideIcon : EyeIcon}
      onClickRightButton={onClickRightButton}
    />
  );
};
export default PasswordInput;
