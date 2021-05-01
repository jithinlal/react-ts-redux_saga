/* eslint-disable max-len */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable camelcase */
import { toast } from 'react-toastify';
import { takeEvery, put } from 'redux-saga/effects';
import { navigator } from '../../navigation/navigator';

import Api from '../../services/Apis/index';
import loaderSlice from '../slices/loader.slice';
import builderModelSlice from '../slices/builderModel.slice';
import { GET_MODEL_LIST, CREATE_MODEL } from '../actions/builderModel.actions';

function* getModelList() {
  try {
    yield put(loaderSlice.actions.show());
    const response = yield Api.builderModel.getModelService();
    yield put(builderModelSlice.actions.setModelList(response));
    yield put(loaderSlice.actions.hide());
  } catch (err) {
    toast.error(err.message);
    yield put(loaderSlice.actions.hide());
  }
}

function* createModel(action: any) {
  try {
    console.log(action.payload);
    yield put(loaderSlice.actions.show());
    const response = true;
    if (response) {
      yield getModelList();
      yield put(loaderSlice.actions.hide());
      navigator.history.replace('/dashboard/models');
      toast.success('Category Created Successfully');
    }
  } catch (err) {
    if (err.message) {
      toast.error(err.message);
    } else {
      toast.error(err);
    }
    yield put(loaderSlice.actions.hide());
  }
}

export default function* builderModel() {
  yield takeEvery(GET_MODEL_LIST, getModelList);
  yield takeEvery(CREATE_MODEL, createModel);
}
