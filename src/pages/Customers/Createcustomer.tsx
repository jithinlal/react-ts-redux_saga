/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Popup from 'reactjs-popup';
import { Formik } from 'formik';

import customerSlice from '../../redux/slices/customer.slice';
import DropdownItem from '../../components/Dropdown/DropdownItem';
import builderModelSlice from '../../redux/slices/builderModel.slice';
import InputBox from '../../components/FormikFields/InputBox/InputBox';
import { PopupClose, USflag, FlagDownArrow } from '../../assets/images';

const initialValues = {
  firstName: '',
  lastName: '',
  phoneNumber: '',
  model: { label: '', value: '' },
  city: '',
  lotNumber: '',
  email: '',
  projectId: { label: '', value: '' },
};

export const Model = (props: { openConfirmation?: any; close?: any; }) => {
  const {
    openConfirmation, close,
  } = props;
  let modelData = [{ label: '', value: '' }];

  const [showSelect, setshowSelect] = useState(false);

  const dispatch = useDispatch();

  const ModelListData = useSelector((state: { builderModelSlice: { list: any; }; }) => state.builderModelSlice.list);

  modelData = ModelListData?.map((item: { _id: string; ID: string; name: string }) => {
    const op = { label: '', value: '' };
    op.label = item.name ? item.name : '';
    // eslint-disable-next-line no-underscore-dangle
    op.value = item._id ? item._id : '';
    return op;
  });

  const projectList = useSelector(
    (state: { projectSlice: { projects: any } }) => state.projectSlice.projects,
  );

  const projectIdData = projectList?.map((item: { id: string; display_name: string; }) => {
    const op = { label: '', value: '' };
    op.label = item.display_name;
    op.value = item.id.toString();
    return op;
  });

  useEffect(() => {
    dispatch(builderModelSlice.actions.getModelList(''));
  }, []);

  const formikRef = useRef<any>(null);

  const ownerCreation = (values: any) => {
    dispatch(customerSlice.actions.createCustomer(values));
    close(false);
  };

  function onStateChange(data: any) {
    formikRef.current.setFieldValue('model', data);
  }

  function onStateChangeProject(data: any) {
    formikRef.current.setFieldValue('projectId', data);
  }
  const contentStyle = {
    maxWidth: '800px',
    height: '570px',
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
        onSubmit={ownerCreation}
      >
        {({
          handleSubmit,
          values,
        }) => (
          <main className="flex-grow h-full w-full bg-white rounded-3xl">
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
                Invite Customer
              </div>
              <div className="flex w-full flex-col">
                <div className="flex w-full py-2 flex-row">
                  <div className="w-1/2 flex items-center mr-3">
                    <InputBox type="text" name="firstName" placeholder="" label="First Name" />
                  </div>
                  <div className="w-1/2 flex items-center">
                    <InputBox type="text" name="lastName" placeholder="" label="Last Name" />
                  </div>
                </div>
                <div className="w-full py-2">
                  <div className="w-full flex items-center">
                    <InputBox type="email" name="email" placeholder="" label="Email" />
                  </div>
                </div>
                <div className="flex w-full py-2 flex-row">
                  <div className="w-24 flex items-center mr-3">
                    <div
                      className="h-full w-full flex items-center px-3 py-1 rounded relative cursor-pointer text-blac border border-gray-400k text-black"
                      onClick={() => setshowSelect(!showSelect)}
                    >
                      +1
                      {' '}
                      <img src={USflag} alt="down" className="pl-2" />
                      {' '}
                      <img src={FlagDownArrow} alt="down" className="pl-2" />
                      {showSelect && (
                        <div className="w-full -ml-3 mt-24 absolute bg-white rounded-4 shadow-xl flex flex-col text-left border z-50">
                          <div
                            className="flex w-full px-3 py-1 font-normal text-sm"
                          >
                            +2
                            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/Flag_of_Australia.svg/800px-Flag_of_Australia.svg.png" alt="down" className="pl-2 w-12" />
                            {' '}
                          </div>
                          <div
                            className="flex w-full px-3 py-1 font-normal text-sm"
                          >
                            +3
                            <img src="https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg" alt="down" className="pl-2 w-12" />
                            {' '}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="w-full flex items-center">
                    <InputBox type="text" name="phoneNumber" placeholder="" label="Phone Number" />
                  </div>
                </div>
                <div className="flex items-center mt-3">
                  <div className="w-1/2 flex flex-col items-start mr-3">
                    <DropdownItem
                      label=""
                      name="model"
                      fieldName="Model"
                      value={values.model}
                      options={modelData}
                      onFieldChange={onStateChange}
                    />
                  </div>
                  <div className="w-1/2 flex flex-col items-start">
                    <DropdownItem
                      label=""
                      name="projectId"
                      fieldName="Project ID"
                      value={values.projectId}
                      options={projectIdData}
                      onFieldChange={onStateChangeProject}
                    />
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <div className="md:w-1/2 w-full flex flex-col items-start md:mr-2">
                    <InputBox name="lotNumber" label="Lot Number" placeholder="" />
                  </div>
                  <div className="w-1/2 flex flex-col items-start Location ml-3">
                    <InputBox name="city" label="Location" placeholder="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full relative bg-gray-100">
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

export default Model;

Model.propTypes = {
  close: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  openConfirmation: PropTypes.bool,
};

Model.defaultProps = {
  close: () => {},
  openConfirmation: false,
};
