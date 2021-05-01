import React from 'react';
import { useField } from 'formik';
import PropTypes from 'prop-types';

const inactiveClassName = 'bg-gray-130 w-full text-gray-600 py-3 rounded-lg font-black mb-4 focus:outline-none';

const activeClassName = 'bg-blue-710 hover:bg-white text-blue-710hover border-blue-710 border w-full text-white py-3 rounded-lg font-black mb-4 focus:outline-none';

const Button = (props) => {
  const {
    active, onClick, inactiveClass, activeStyle, style, showArrowBtn, text,
  } = props;

  const meta = useField(props)[1];

  const isFormInError = Object.keys(meta.error).length > 0;

  const firstField = Object.keys(meta.value)[0];

  const isTouched = !!meta.value[firstField];

  let btnClass = inactiveClass || inactiveClassName;

  if (active === true) {
    btnClass = activeStyle || activeClassName;
  } else if (active === false) {
    btnClass = inactiveClass || inactiveClassName;
  } else if (isFormInError === false && isTouched === true) {
    btnClass = activeStyle || activeClassName;
  }

  const handleClick = () => {
    if (onClick && (active || (isFormInError === false && isTouched === true))) {
      onClick();
    }
  };
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a className="relative">
      <button type="button" onClick={handleClick} className={style || btnClass}>
        {text}
      </button>
      {showArrowBtn ? (
        <div className="absolute top-0 right-0 h-full flex items-center">
          <svg
            width="16"
            height="12"
            viewBox="0 0 16 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-4 pr-1"
          >
            <path
              d="M1.02052 5.03226H12.5082L8.92837 1.65368C8.52893 1.27664 8.5274 0.663916 8.92495 0.285094C9.3225 -0.0937776 9.96862 -0.0951808 10.3681 0.281803L15.6999 5.31406C16.0992 5.69202 16.1005 6.30673 15.7009 6.68502L10.3682 11.7182C9.96877 12.0951 9.32265 12.0938 8.92505 11.7149C8.5275 11.3361 8.52903 10.7234 8.92847 10.3463L12.5082 6.96774H1.02052C0.45695 6.96774 0.000114441 6.53448 0.000114441 6C0.000114441 5.46552 0.45695 5.03226 1.02052 5.03226Z"
              fill="#fff"
            />
          </svg>
        </div>
      ) : null}
    </a>
  );
};

export default Button;

Button.propTypes = {
  active: PropTypes.bool,
  inactiveClass: PropTypes.string,
  activeStyle: PropTypes.string,
  style: PropTypes.string,
  onClick: PropTypes.func,
  showArrowBtn: PropTypes.bool,
  text: PropTypes.string,
};

Button.defaultProps = {
  active: undefined,
  onClick: () => {},
  inactiveClass: '',
  activeStyle: '',
  style: '',
  showArrowBtn: false,
  text: '',
};
