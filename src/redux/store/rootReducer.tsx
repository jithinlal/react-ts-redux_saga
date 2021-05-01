/* eslint-disable import/no-unresolved */
import { combineReducers } from 'redux';
import authSlice from '../slices/auth.slice';
import loaderSlice from '../slices/loader.slice';
import builderSlice from '../slices/builder.slice';
import customerSlice from '../slices/customer.slice';
import builderModelSlice from '../slices/builderModel.slice';

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  loader: loaderSlice.reducer,
  builderSlice: builderSlice.reducer,
  customerSlice: customerSlice.reducer,
  builderModelSlice: builderModelSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
