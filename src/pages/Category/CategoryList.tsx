/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';

import './model.scss';
import { AddCategory } from './AddCategory';
import { Search, AddMore, Defaultimage } from '../../assets/images';
import builderModelSlice from '../../redux/slices/builderModel.slice';

const CategoryList = () => {
  const dispatch = useDispatch();
  const [isEditModel, setEditModel] = useState('');
  const [isModelcreate, setModelcreate] = useState(false);

  const ModelList = useSelector((state:
    { builderModelSlice: { list: any; }; }) => state.builderModelSlice.list);
  useEffect(() => {
    dispatch(builderModelSlice.actions.getModelList(''));
  }, []);

  const closeConfirmation = () => {
    setModelcreate(false);
  };

  return (
    <main className="w-full flex-grow pl-5 pr-5">
      <div className="fixed top-0 mt-5 z-40 w-4/12 hidden md:flex flex-col justify-center">
        <input
          className="topSearch focus:outline-none border placeholder-gray-600 rounded-4 py-4 pr-4 md:pl-12 block appearance-none leading-normal w-full rounded-full bg-transparent text-13px"
          type="text"
          placeholder="Search here"
        />
        <div className="h-full w-12 absolute top-0 flex items-center md:left-0 right-0">
          <img src={Search} className="pl-4" alt="search" />
        </div>
      </div>
      <div className="w-full overflow-x-hiden overflow-y-auto bg-white rounded-2xl border border-gray-400 h-full">
        <div className="flex items-center justify-between bg-white px-4 pt-5 pb-3">
          <div className="flex flex-col">
            <p className="text-xl text-black font-bold">Category</p>
          </div>
        </div>
        <div className="flex flex-wrap px-4 pb-4">
          <div
            className="flex flex-col items-center justify-center px-3 py-5 w-40 rounded-xl border border-gray-400 relative mr-5 text-black cursor-pointer mb-5"
            onClick={() => setModelcreate(true)}
            tabIndex={0}
            role="button"
          >
            <img src={AddMore} alt="merchantpic" className="h-20 w-20 rounded-full" />
            <h1 className="flex pt-3 text-xs font-bold">Add Category</h1>
          </div>
          {isModelcreate && (
            <AddCategory
              openConfirmation
              close={closeConfirmation}
            />
          )}
          {ModelList && ModelList.length > 0 ? (
            <>
              {ModelList.map((value: any) => (
                <div key={value._id} className="flex flex-col items-center justify-center px-3 py-5 w-40 rounded-xl border border-gray-400 relative mr-5 text-black mb-5">
                  <div className="absolute top-0 right-0">
                    <button
                      className="mt-2 h-6 w-8 cursor-pointer flex items-center justify-center relative tooltip3 bg-white rounded-4 focus:outline-none"
                      type="button"
                      onClick={() => {
                        if (isEditModel === '') {
                          setEditModel(value._id);
                        } else {
                          setEditModel('');
                        }
                      }}
                    >
                      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="stroke-current stroke-1" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="1" />
                        <circle cx="12" cy="5" r="1" />
                        <circle cx="12" cy="19" r="1" />
                      </svg>
                      <div className={`-ml-24 mt-4 tooltiptext flex flex-col bg-white absolute z-30 rounded-4 top-0 border-gray-110 p-1 w-auto border border-gray-400 rounded-lg shadow ${value._id === isEditModel ? 'visible' : 'invisible'}`}>
                        <div className="flex items-center px-3 py-1 w-full hover:bg-gray-100">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.14624 1.93213L0.779246 8.29958C0.747214 8.3317 0.724085 8.37227 0.713071 8.41587L0.00735081 11.2485C-0.0137593 11.3337 0.0112975 11.4244 0.0735264 11.4867C0.120611 11.5337 0.184767 11.5598 0.250392 11.5598C0.270493 11.5598 0.291052 11.5573 0.311061 11.5523L3.14367 10.8465C3.18782 10.8355 3.22793 10.8124 3.25996 10.7804L9.6275 4.41339L7.14624 1.93213Z" fill="#3D4455" />
                            <path d="M11.2049 1.06385L10.4962 0.355097C10.0225 -0.118595 9.19691 -0.118136 8.72377 0.355097L7.85559 1.22327L10.3368 3.70444L11.2049 2.83627C11.4416 2.59974 11.5719 2.28493 11.5719 1.9501C11.5719 1.61528 11.4416 1.30046 11.2049 1.06385Z" fill="#3D4455" />
                          </svg>
                          <span className="text-gray-800 ml-3">Edit</span>
                        </div>
                        <div className="flex items-center px-3 py-1 w-full hover:bg-gray-100">
                          <svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.972 4.64111C6.80629 4.64111 6.672 4.77541 6.672 4.94111V10.6111C6.672 10.7767 6.80629 10.9111 6.972 10.9111C7.1377 10.9111 7.272 10.7767 7.272 10.6111V4.94111C7.272 4.77541 7.1377 4.64111 6.972 4.64111Z" fill="#F80000" />
                            <path d="M3.43208 4.64111C3.26638 4.64111 3.13208 4.77541 3.13208 4.94111V10.6111C3.13208 10.7767 3.26638 10.9111 3.43208 10.9111C3.59778 10.9111 3.73208 10.7767 3.73208 10.6111V4.94111C3.73208 4.77541 3.59778 4.64111 3.43208 4.64111Z" fill="#F80000" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M0.852049 11.205V3.81367C0.29576 3.66602 -0.0647089 3.12859 0.00970516 2.55777C0.0842364 1.98707 0.570447 1.56016 1.14607 1.56004H2.68205V1.18504C2.68029 0.869688 2.80498 0.566875 3.02822 0.344102C3.25146 0.121446 3.55474 -0.00253871 3.8701 3.94175e-05H6.534C6.84935 -0.00253871 7.15263 0.121446 7.37588 0.344102C7.59912 0.566875 7.72381 0.869688 7.72205 1.18504V1.56004H9.25803C9.83365 1.56016 10.3199 1.98707 10.3944 2.55777C10.4688 3.12859 10.1083 3.66602 9.55205 3.81367V11.205C9.55205 11.6419 9.39185 12.0522 9.11201 12.3466C8.83357 12.6418 8.44592 12.8093 8.0401 12.81H2.364C1.9583 12.8093 1.57064 12.6418 1.29209 12.3466C1.01224 12.0522 0.852049 11.6419 0.852049 11.205ZM2.364 12.21H8.0401C8.55303 12.21 8.95205 11.7694 8.95205 11.205V3.84004H1.45205V11.205C1.45205 11.7694 1.85107 12.21 2.364 12.21ZM3.28205 1.18504C3.28006 1.02883 3.34146 0.878477 3.45232 0.768204C3.56306 0.65793 3.71377 0.597344 3.8701 0.600039H6.534C6.69033 0.597344 6.84103 0.65793 6.95178 0.768204C7.06263 0.87836 7.12404 1.02883 7.12205 1.18504V1.56004H3.28205V1.18504ZM9.25803 2.16004H1.14607C0.84783 2.16004 0.606072 2.4018 0.606072 2.70004C0.606072 2.99828 0.84783 3.24004 1.14607 3.24004H9.25803C9.55627 3.24004 9.79803 2.99828 9.79803 2.70004C9.79803 2.4018 9.55627 2.16004 9.25803 2.16004Z" fill="#F80000" />
                            <path d="M5.2021 4.64111C5.0364 4.64111 4.9021 4.77541 4.9021 4.94111V10.6111C4.9021 10.7767 5.0364 10.9111 5.2021 10.9111C5.3678 10.9111 5.5021 10.7767 5.5021 10.6111V4.94111C5.5021 4.77541 5.3678 4.64111 5.2021 4.64111Z" fill="#F80000" />
                          </svg>
                          <span className="text-red-600 ml-3">Delete</span>
                        </div>
                      </div>
                    </button>
                  </div>
                  <img src={value?.imageUrl ? value.imageUrl : Defaultimage} alt="merchantpic" className="h-20 w-20 rounded-full" />
                  <h1 className="flex pt-3 text-xs font-bold">{value.name}</h1>
                  <span className="flex text-xs">
                    Created:
                    {moment(value.updatedAt).format('ll')}
                  </span>
                </div>
              ))}
            </>
          ) : <div className="h-40 flex justify-center items-center text-center w-full font-normal">There are no category yet.</div>}
        </div>
      </div>
    </main>
  );
};
export default CategoryList;
