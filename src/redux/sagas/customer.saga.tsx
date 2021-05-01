/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable camelcase */
import {
  takeEvery, put,
} from 'redux-saga/effects';
import { toast } from 'react-toastify';
import loaderSlice from '../slices/loader.slice';
import ownerSlice from '../slices/customer.slice';
import Api from '../../services/Apis/index';
import { navigator } from '../../navigation/navigator';
import {
  CREATE_CUSTOMER, GET_CUSTOMER, GET_CUSTOMER_LIST, RESET_SCHDULE,
} from '../actions/customer.actions';

function* createCustomer(action: any) {
  try {
    const {
      firstName,
      lastName,
      phoneNumber,
      city,
      lotNumber,
      email,
    } = action.payload;
    yield put(loaderSlice.actions.show());
    yield Api.owner.createOwnerService({
      firstName,
      lastName,
      phoneNumber,
      modelId: action.payload.model?.value,
      city,
      lotNumber,
      email,
      projectId: action.payload.projectId?.value,
    });
    navigator.history.replace('/dashboard/customers');
    yield getCustomersList({});
    yield put(loaderSlice.actions.hide());
    toast.success('Customer created successfully');
  } catch (err) {
    if (err.message) {
      toast.error(err.message);
    } else {
      toast.error(err);
    }
    yield put(loaderSlice.actions.hide());
  }
}

function* getCustomersList(action: any) {
  try {
    let params: object = { limit: 10, page: 1 };
    if (action.payload) {
      params = action.payload;
    }

    yield put(loaderSlice.actions.show());
    const response = yield Api.owner.getOwnersListService(params);
    yield put(ownerSlice.actions.setCustomersList(response));
    yield put(loaderSlice.actions.hide());
  } catch (err) {
    toast.error(err.message);
    yield put(loaderSlice.actions.hide());
  }
}

function* getCustomer(action: any) {
  try {
    const params = action.payload;
    yield put(loaderSlice.actions.show());
    const response = yield Api.owner.getCustomerService(params);
    yield put(ownerSlice.actions.setCustomer(response.data.data));
    yield put(loaderSlice.actions.hide());
  } catch (err) {
    toast.error(err.message);
    yield put(loaderSlice.actions.hide());
  }
}

function* resetSchdulingData() {
  yield put(loaderSlice.actions.show());
  yield put(loaderSlice.actions.hide());
  return '';
}

export default function* customer() {
  yield takeEvery(RESET_SCHDULE, resetSchdulingData);
  yield takeEvery(CREATE_CUSTOMER, createCustomer);
  yield takeEvery(GET_CUSTOMER_LIST, getCustomersList);
  yield takeEvery(GET_CUSTOMER, getCustomer);
}
