/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Popup from 'reactjs-popup';
import { Formik } from 'formik';

import { PopupClose } from '../../assets/images';
import { AddModelSchema } from '../../common/validation';
import builderModelSlice from '../../redux/slices/builderModel.slice';
import InputBox from '../../components/FormikFields/InputBox/InputBox';
import { ImageDrop } from '../../components/FormikFields/ImageDrop/ImageDrop';

const initialValues = {
  imageUrl: '',
  name: '',
};

export const AddCategory = (props: { openConfirmation?: any; close?: any; }) => {
  const {
    openConfirmation, close,
  } = props;

  const dispatch = useDispatch();
  const formikRef = useRef<any>(null);

  const Create = (values: any) => {
    dispatch(builderModelSlice.actions.createModel(values));
    close(false);
  };
  // const [sublength, setsublength] = useState(0);

  const onFileChange = async (file: { type: any; }) => {
    console.log(file);
  };

  const onRemoveUserLogo = () => {
    formikRef.current.handleChange('imageUrl')('');
  };

  const contentStyle = {
    maxWidth: '800px',
    height: '430px',
    width: '100%',
  };

  return (
    <Popup
      open={openConfirmation}
      closeOnDocumentClick
      onClose={() => close(false)}
      modal
      contentStyle={contentStyle}
    >
      <Formik
        innerRef={formikRef}
        initialValues={initialValues}
        onSubmit={Create}
        validationSchema={AddModelSchema}
      >
        {({
          handleSubmit,
        }) => (
          <main className="flex-grow h-full w-full bg-gray-100 rounded-3xl">
            <div className="flex items-start p-6 flex-col justify-start w-full bg-white">
              <div className="flex items-end w-full text-black text-26px justify-end">
                <img
                  src={PopupClose}
                  alt="merchantpic"
                  className="h-6 w-6 rounded-full cursor-pointer"
                  onClick={() => {
                    close(false);
                  }}
                />
              </div>
              <div className="flex items-center w-full text-black text-26px justify-between mb-4 font-bold">
                Create a New Category
              </div>
              <div className="flex w-full flex-col">
                <div className="w-full py-2">
                  <div className="w-full flex items-center">
                    <InputBox type="text" name="name" placeholder="" label="Category Name" />
                  </div>
                </div>
                <div className="w-full py-2 flex flex-col items-start">
                  <label className="text-15px font-bold text-gray-800 pb-2">Upload Category Image</label>
                  <ImageDrop
                    name="imageUrl"
                    label=""
                    onRemove={onRemoveUserLogo}
                    onFileChange={onFileChange}
                  />
                </div>
              </div>
            </div>
            <div className="flex w-full relative">
              <div className="w-full rounded-8 border-t overflow-hidden px-8 py-8 flex justify-center md:justify-end rounded-8">
                <button
                  type="button"
                  className="text-blue-500 outline-none h-12 font-bold"
                  onClick={() => {
                    close(false);
                  }}
                >
                  <span className="px-6">Cancel</span>
                </button>
                <button
                  type="submit"
                  onClick={() => handleSubmit()}
                  className="bg-blue-500 hover:bg-blue-700 text-white h-12 px-10 font-bold"
                >
                  Create
                </button>
              </div>
            </div>
          </main>
        )}
      </Formik>
    </Popup>
  );
};

export default AddCategory;

AddCategory.propTypes = {
  close: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  openConfirmation: PropTypes.bool,
};

AddCategory.defaultProps = {
  close: () => { },
  openConfirmation: false,
};
