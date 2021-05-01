import React, { useState } from 'react';
import Select from 'react-select';
import { useField } from 'formik';
import propTypes from 'prop-types';

import { Selectdown } from '../../assets/images';

const selectStyles = {
  control: (provided: any) => ({ ...provided }),
  menu: () => ({}),
};
const Menu = (props: any) => {
  const shadow = 'hsla(218, 50%, 10%, 0.1)';
  return (
    <div
      style={{
        backgroundColor: 'white',
        borderRadius: 4,
        boxShadow: `0 0 0 1px ${shadow}, 0 4px 11px ${shadow}`,
        marginTop: 8,
        position: 'absolute',
        zIndex: 2,
        width: 'calc( 100% - 3rem)',
        padding: '0.75rem',
      }}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  );
};

const Blanket = (props: any) => (
  <div
    style={{
      bottom: 0,
      left: 0,
      top: 0,
      right: 0,
      position: 'fixed',
      zIndex: 1,
    }}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  />
);
// eslint-disable-next-line react/prop-types
const Dropdown = ({
  // eslint-disable-next-line react/prop-types
  children,
  isOpen,
  target,
  onClose,
}: any) => (
  <div style={{ position: 'relative', width: '100%' }}>
    {target}
    {isOpen ? <Menu>{children}</Menu> : null}
    {isOpen ? <Blanket onClick={onClose} /> : null}
  </div>
);

const DropdownItem = (props: any) => {
  const [field, meta] = useField(props);
  const {
    fieldName, options, value, label, name,
  } = props;
  const [isOpen, setOpen] = useState(false);
  const [isTouched, setTouched] = useState(false);
  const onFieldChange = (data: any) => {
    if (props.onFieldChange) {
      props.onFieldChange(data);
      setOpen(!isOpen);
    }
  };
  function toggleOpenDropdown() {
    if (isOpen) {
      setTouched(true);
    }
    setOpen(!isOpen);
    props.onFieldClick();
  }
  const isInError = (meta.touched && meta.error && true) || false;
  let labelstyle = 'font-bold text-sm whitespace-no-wrap';
  if (isInError) {
    labelstyle += ' text-red-600 font-bold';
  }

  return (
    <div className="w-full flex flex-col items-start mb-5 relative">
      <span className={labelstyle}>
        {label}
      </span>
      <Dropdown
        isOpen={isOpen}
        onClose={toggleOpenDropdown}
        className="w-full"
        target={(
          <button
            type="button"
            onClick={toggleOpenDropdown}
            className={`focus:outline-none focus:border-blue-700 bg-white border border-gray-400 rounded-lg py-3 px-3 relative w-full flex text-gray-900 capitalize mb-1 ${isInError ? 'border-red-400' : ''}`}
          >
            {value && value.length > 0 && value[0]?.label !== '' ? value[0].label : (
              <>
                {value && value.label && value?.label !== '' ? value.label : (<p className="text-gray-600 text-14">{fieldName}</p>)}
              </>
            )}
            <div className="flex justify-center absolute right-0">
              {' '}
              <img src={Selectdown} alt="" className="w-3 h-2 mr-2 mt-2" />
            </div>
          </button>
        )}
      >
        <Select
          autoFocus
          backspaceRemovesValue={false}
          components={{
            IndicatorSeparator: null,
          }}
          controlShouldRenderValue={false}
          hideSelectedOptions={false}
          isClearable={false}
          menuIsOpen
          onChange={onFieldChange}
          options={options}
          placeholder="Search"
          styles={selectStyles}
          name={name}
          tabSelectsValue={false}
          value={value}
        />
      </Dropdown>
      {typeof meta.error === 'object' ? (
        meta.touched && meta.error && <div className="text-red-600 text-left input-error-message top-100 text-sm absolute bottom-0 -m-5 ml-2">Required</div>
      ) : (
        meta.touched && meta.error && <div className="text-red-600 text-left input-error-message top-100 text-sm absolute bottom-0 -m-5 ml-2">{meta.error}</div>
      )}
      {' '}
      {console.log(field)}
      {console.log(isTouched)}
    </div>
  );
};

export default DropdownItem;

DropdownItem.propTypes = {
  fieldName: propTypes.string,
  options: propTypes.arrayOf(
    propTypes.shape({
      label: propTypes.string,
      value: propTypes.string,
    }),
  ),
  value: propTypes.objectOf(
    propTypes.shape({
      label: propTypes.string,
      value: propTypes.string,
    }),
  ),
  onFieldChange: propTypes.func,
  onFieldClick: propTypes.func,
  label: propTypes.string,
  name: propTypes.string,
};

DropdownItem.defaultProps = {
  fieldName: '',
  options: [],
  value: {},
  onFieldChange: () => {},
  onFieldClick: () => {},
  label: '',
  name: '',
};
