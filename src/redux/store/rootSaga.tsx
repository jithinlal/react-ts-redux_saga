/* eslint-disable import/no-unresolved */
import { all } from 'redux-saga/effects';
import authSaga from '../sagas/auth.saga';
import builder from '../sagas/builder.saga';
import customer from '../sagas/customer.saga';
import builderModel from '../sagas/builderModel.saga';

export default function* rootSaga() {
  yield all([
    builder(),
    customer(),
    authSaga(),
    builderModel(),
  ]);
}
