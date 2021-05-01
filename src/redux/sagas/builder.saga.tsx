/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable camelcase */
import {
  takeEvery, put,
} from 'redux-saga/effects';
import { toast } from 'react-toastify';
import Api from '../../services/Apis/index';
import loaderSlice from '../slices/loader.slice';
import builderSlice from '../slices/builder.slice';
import { GET_BUILDER } from '../actions/builder.actions';

function* getBuilder() {
  try {
    yield put(loaderSlice.actions.show());
    const response = yield Api.builder.getBuilderService();
    yield put(builderSlice.actions.setBuilderData(response.data));
    yield put(loaderSlice.actions.hide());
  } catch (err) {
    toast.error(err.message);
    yield put(loaderSlice.actions.hide());
  }
}

export default function* builder() {
  yield takeEvery(GET_BUILDER, getBuilder);
}
