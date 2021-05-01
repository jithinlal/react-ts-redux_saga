/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Field, useField } from 'formik';

import PropTypes from 'prop-types';

export const Textarea = (props: any) => {
  const [field, meta] = useField(props);
  const {
    value,
    name,
    label,
    placeholder,
    setFieldValue,
  } = props;

  return (
    <div className="w-1/2 flex flex-col items-start mb-5 relative mr-4">
      <div className={`font-bold text-sm whitespace-no-wrap ${meta.touched && meta.error ? 'text-red-600' : ''}`}>{label}</div>
      <Field
        enablereinitialize="true"
        autoComplete="off"
        name={name}
        component="textarea"
        className={`bg-white border rounded-lg border-blue-710focus focus:outline-none py-3 px-3 block w-full appearance-none leading-normal mb-1 ${meta.touched && meta.error ? 'border-red-500' : ''}`}
        placeholder={placeholder}
        rows="2"
        value={value}
        onChange={(e: any) => { setFieldValue(e.target.value, name); }}
      />
      {meta.touched && meta.error && (
        <div className="text-red-600 text-left input-error-message top-100 text-sm absolute bottom-0 -m-5 ml-2">{meta.error}</div>
      )}
      {console.log(field)}
    </div>
  );
};

export default Textarea;
Textarea.propTypes = {
  setFieldValue: PropTypes.func,
  value: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

Textarea.defaultProps = {
  setFieldValue: () => { },
  value: '',
  name: '',
  label: '',
  placeholder: 'Enter',
};
