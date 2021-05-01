/* eslint-disable react/require-default-props */
/* eslint-disable max-len */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Popup from 'reactjs-popup';

export const Model = (props: { handlePopupClick?: any; id?: any; text?: any; openConfirmation?: any; close?: any; purpose?: any; btnName?: any; }) => {
  const [reason, setreason] = useState('');
  const [settle, setsettle] = useState('');
  const [error, seterror] = useState(false);
  // function textInput(data: { target: any; }) {
  //   setreason
  // }
  function Xmark() {
    return (
      <div className="mt-8">
        <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30.5 61C13.6821 61 0 47.3179 0 30.5C0 13.6821 13.6821 0 30.5 0C47.3179 0 61 13.6821 61 30.5C61 47.3179 47.3179 61 30.5 61ZM30.5 4.35701C16.0849 4.35701 4.35701 16.0849 4.35701 30.5C4.35701 44.9151 16.0849 56.643 30.5 56.643C44.9151 56.643 56.643 44.9151 56.643 30.5C56.643 16.0849 44.9151 4.35701 30.5 4.35701Z" fill="#FC615F" />
          <path d="M41.393 43.5714C40.8355 43.5714 40.2779 43.3587 39.8525 42.9329L18.067 21.1474C17.2158 20.2962 17.2158 18.9177 18.067 18.0669C18.9178 17.2162 20.2967 17.2157 21.1475 18.0669L42.933 39.8525C43.7842 40.7037 43.7842 42.0822 42.933 42.9329C42.5076 43.3587 41.9505 43.5714 41.393 43.5714Z" fill="#FC615F" />
          <path d="M19.607 43.5715C19.0495 43.5715 18.4924 43.3588 18.067 42.9329C17.2158 42.0822 17.2158 40.7032 18.067 39.8525L39.8525 18.067C40.7037 17.2158 42.0822 17.2158 42.933 18.067C43.7837 18.9177 43.7842 20.2967 42.933 21.1474L21.1475 42.9329C20.7221 43.3588 20.1645 43.5715 19.607 43.5715Z" fill="#FC615F" />
        </svg>
      </div>
    );
  }
  function Tmark() {
    return (
      <div className="mt-8">
        <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M31 0C13.8792 0 0 13.8792 0 31C0 48.1208 13.8792 62 31 62C48.1208 62 62 48.1208 62 31C61.9818 13.8868 48.1133 0.0182938 31 0ZM31 57.5715C16.325 57.5715 4.42853 45.675 4.42853 31C4.42853 16.325 16.325 4.42853 31 4.42853C45.675 4.42853 57.5715 16.325 57.5715 31C57.5556 45.6685 45.6685 57.5556 31 57.5715Z" fill="#00BF84" />
          <path d="M48.011 18.3631C47.1529 17.5343 45.7925 17.5343 44.9345 18.3631L24.357 38.9404L17.0653 31.6487C16.2158 30.769 14.8139 30.7447 13.9344 31.5943C13.0547 32.4439 13.0304 33.8457 13.88 34.7253C13.8978 34.7437 13.9159 34.7619 13.9344 34.7796L22.7916 43.6368C23.6562 44.5013 25.0579 44.5013 25.9225 43.6368L48.0655 21.4939C48.915 20.6144 48.8906 19.2126 48.011 18.3631Z" fill="#00BF84" />
        </svg>

      </div>
    );
  }
  function FeaturedImg() {
    return (
      <div className="mt-3">
        <svg width="48" height="46" viewBox="0 0 48 46" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M47.2602 17.5868L31.037 15.2442L23.8254 0.631836L16.6138 15.2442L0.390625 17.5868L12.1578 28.9607L9.4035 45.0199L23.8254 37.4382L38.2473 45.0199L35.493 28.9607L47.2602 17.5868Z" fill="#FED843" />
          <path d="M35.4935 28.9603L47.2607 17.5863L31.0375 15.2437L23.8259 0.631348V37.4377L38.2478 45.0194L35.4935 28.9603Z" fill="#FABE2C" />
        </svg>
      </div>
    );
  }
  const {
    id, text, openConfirmation, close, purpose, btnName,
  } = props;
  let mark: any;
  let sureClass: string;
  let butText: string;
  let butClass: string;
  // eslint-disable-next-line no-unused-vars
  let unDone: string;
  let rejOrdeactivate: string;
  if (purpose === 'reject' || purpose === 'delete') {
    mark = Xmark();
    sureClass = 'pt-2 px-10 text-red-500 text-2xl font-semibold';
    butText = purpose;
    butClass = 'bg-red-500 hover:bg-white text-white hover:text-red-500 border border-red-500 font-bold py-2 px-4 rounded ml-2 capitalize';
    rejOrdeactivate = 'rejection';
  } else if (purpose === 'deny') {
    mark = Xmark();
    sureClass = 'pt-2 px-10 text-red-500 text-2xl font-semibold';
    butText = 'Deny';
    butClass = 'bg-red-500 hover:bg-white text-white hover:text-red-500 border border-red-500 font-bold py-2 px-4 rounded ml-2 capitalize';
    rejOrdeactivate = 'Deny';
  } else if (purpose === 'deactivate') {
    mark = Xmark();
    sureClass = 'pt-2 px-10 text-red-500 text-2xl font-semibold';
    butText = 'Deactivate';
    butClass = 'bg-red-500 hover:bg-white text-white hover:text-red-500 border border-red-500 font-bold py-2 px-4 rounded ml-2 capitalize';
    rejOrdeactivate = 'deactivate';
  } else if (purpose === 'approve' || purpose === 'Activate') {
    mark = Tmark();
    sureClass = 'pt-2 px-10 text-green-710 text-2xl font-semibold';
    if (purpose === 'Activate') {
      butText = purpose;
    } else {
      butText = 'Approve';
    }
    butClass = 'capitalize bg-green-710 hover:bg-white text-white text-green-710-hover border border-green-710 font-bold py-2 px-4 rounded ml-2 capitalize';
    rejOrdeactivate = '';
  } else if (purpose === 'default') {
    mark = Tmark();
    sureClass = 'pt-2 px-10 text-green-710 text-2xl font-semibold';
    butText = 'Save';
    butClass = 'capitalize bg-green-710 hover:bg-white text-white text-green-710-hover border border-green-710 font-bold py-2 px-4 rounded ml-2 capitalize';
    rejOrdeactivate = '';
  } else if (purpose === 'Payout') {
    mark = Tmark();
    sureClass = 'pt-2 px-10 text-green-710 text-2xl font-semibold';
    if (purpose === 'Payout') {
      butText = purpose;
    } else {
      butText = 'Payout';
    }
    butClass = 'capitalize bg-green-710 hover:bg-white text-white text-green-710-hover border border-green-710 font-bold py-2 px-4 rounded ml-2 capitalize';
    rejOrdeactivate = '';
  } else if (purpose === 'CWikX_Payout') {
    mark = '';
    sureClass = 'hidden';
    if (purpose === 'CWikX_Payout') {
      butText = 'Payout';
    } else {
      butText = 'Payout';
    }
    butClass = 'capitalize bg-green-710 hover:bg-white text-white text-green-710-hover border border-green-710 font-bold py-2 px-4 rounded ml-2 capitalize';
    rejOrdeactivate = '';
  } else if (purpose === 'featured') {
    mark = FeaturedImg();
    sureClass = 'pt-2 px-10 text-yellow-810 text-2xl font-semibold';
    butText = 'Yes, Confirm';
    butClass = 'capitalize bg-yellow-810 hover:bg-white text-white text-yellow-810-hover border border-yellow-810 font-bold py-2 px-4 rounded ml-2 capitalize';
    rejOrdeactivate = '';
  } else if (purpose === 'unfeature') {
    mark = Xmark();
    sureClass = 'pt-2 px-10 text-red-500 text-2xl font-semibold';
    butText = 'Yes, Remove';
    butClass = 'capitalize bg-red-500 hover:bg-white text-white hover:text-red-500 border border-red-500 font-bold py-2 px-4 rounded ml-2';
    rejOrdeactivate = '';
  } else {
    mark = Xmark();
    sureClass = 'pt-2 px-10 text-red-500 text-2xl font-semibold';
    butText = btnName;
    butClass = 'capitalize bg-red-500 hover:bg-white text-white hover:text-red-500 border border-red-500 font-bold py-2 px-4 rounded ml-2 capitalize';
    rejOrdeactivate = '';
  }
  function handleClick() {
    if ((purpose === 'deactivate' || purpose === 'reject' || purpose === 'deny') && (reason === '' || reason === null)) {
      seterror(true);
    } else if ((purpose === 'deactivate' || purpose === 'reject' || purpose === 'deny')) {
      seterror(false);
      props.handlePopupClick(id, reason);
      close(false);
    } else if ((purpose === 'CWikX_Payout') && (settle === '' || settle === null)) {
      seterror(true);
    } else if (purpose === 'CWikX_Payout') {
      seterror(false);
      props.handlePopupClick(id, settle);
      close(false);
    } else {
      props.handlePopupClick(id);
      close(true);
    }
  }
  return (
    <Popup open={openConfirmation} closeOnDocumentClick onClose={() => close(false)}>
      <div className={`flex flex-col items-center bg-white py-5 rounded-4 overflow-hidden w-100 ${purpose === 'Payout' && 'border border-red-710'}`}>
        {(purpose === 'featured') ? mark : mark}
        {(purpose === 'featured') ? (<div className={sureClass}>Featured Listing</div>) : (<div className={sureClass}>Are you Sure?</div>)}

        {purpose === 'Payout' && (
          <div className="text-center font-semibold px-10 flex text-gray-310 mt-2">
            <span>Payout Amount:</span>
            <span>
              &nbsp;$
              {id?.merchant_settlement_amount && parseFloat(id?.merchant_settlement_amount).toFixed(2)}
            </span>
          </div>
        )}
        {purpose === 'CWikX_Payout'
          ? (
            <div className="text-left font-semibold px-5 w-full py-2">
              {text}
            </div>
          )
          : (
            <div className="text-center font-semibold px-10">
              {text}
            </div>
          )}
        {purpose === 'CWikX_Payout'
          && (
            <div className="text-left bg-gray-110 font-semibold w-full py-4 mb-3">
              <div className="px-5 flex justify-between">
                <p className="text-blue-710 f-16">Total CWikX Profit</p>
                <p className="text-blue-710 f-18">$4.48</p>
              </div>
            </div>
          )}

        {(purpose === 'reject' || purpose === 'deactivate' || purpose === 'deny') && (
          <div className="py-4 mt-5 border-t border-dashed w-full px-8 flex flex-col">
            <p className="text-sm">
              Reason for&nbsp;
              {rejOrdeactivate}
            </p>
            <textarea
              className="h-20 w-full border rounded-lg outline-none p-2"
              placeholder="Enter your comments"
              onInput={(data: { target: any; }) => {
                setreason(data.target.value);
              }}
            />
            {error && (
              <p className="text-sm text-red-710">
                *Please enter the reason for
                {' '}
                {rejOrdeactivate}
              </p>
            )}
          </div>
        )}
        {purpose === 'CWikX_Payout' && (
          <div className="px-5 w-full mt-2">
            <p className="mb-3">Payout Amount</p>
            <input
              type="number"
              className="h-12 w-full border rounded-lg outline-none px-4"
              placeholder="Enter payout amount"
              onInput={(e: any) => {
                setsettle(e.target.value);
              }}
            />
            {error && (
              <p className="text-sm text-red-710 text-left">
                *Please enter the payout amount
              </p>
            )}
          </div>
        )}
        <div className="flex px-10 items-center justify-center p-6 pb-8 border-t w-full mt-6">
          <button
            type="button"
            className="border border-blue-710 bg-blue-710hover text-blue-710 hover:text-white font-bold py-2 px-4 rounded mr-2 outline-none"
            onClick={() => {
              close(false);
            }}
          >
            {(purpose === 'featured' || purpose === 'unfeature') ? <span className="px-6">No</span> : 'Cancel'}
          </button>
          <button
            type="button"
            className={butClass}
            onClick={handleClick}
          >
            {butText}
          </button>
        </div>
      </div>
    </Popup>
  );
};

export default Model;

Model.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array]),
  close: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  handlePopupClick: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  text: PropTypes.string,
  openConfirmation: PropTypes.bool,
};

Model.defaultProps = {
  id: '',
  handlePopupClick: () => { },
  close: () => { },
  text: '',
  openConfirmation: false,
};
