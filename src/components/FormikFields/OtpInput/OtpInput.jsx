/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef, useEffect } from 'react';
import { useField } from 'formik';
import propTypes from 'prop-types';
import OtpInput from '../../../common/lib/react-otp-input/lib/index';
import useCopyBoard from '../../../common/lib/hooks/useCopyBoard';

export const OtpField = (props) => {
  const otpRef = useRef(null);
  const [field, meta, helpers] = useField(props);
  const [copy] = useCopyBoard();

  useEffect(() => {
    if (!field.value && copy && copy.match(/[0-9]{6}/)) {
      helpers.setValue(copy, true);
    }
  }, [copy]);
  return (
    <>
      <OtpInput
        ref={otpRef}
        containerStyle="w-full flex items-center justify-between mb-3"
        inputStyle="pinInput"
        onChange={(otp) => {
          helpers.setValue(otp, true);
        }}
        numInputs={6}
        autoFocus
        otpType="number"
        shouldAutoFocus
        value={field.value}
        {...props}
      />
      {meta.touched && meta.error && (
        <div className="text-red-400 text-center absolute input-error-message">{meta.error}</div>
      )}
    </>
  );
};

export default OtpField;
OtpField.propTypes = {
  containerStyle: propTypes.string,
  inputStyle: propTypes.string,
  name: propTypes.string,
  ref: propTypes.any,
  numInputs: propTypes.number,
  autoFocus: propTypes.bool,
  otpType: propTypes.string,
  shouldAutoFocus: propTypes.bool,
};

OtpField.defaultProps = {
  containerStyle: '',
  inputStyle: '',
  name: '',
  ref: '',
  numInputs: 6,
  autoFocus: true,
  otpType: '',
  shouldAutoFocus: true,
};
