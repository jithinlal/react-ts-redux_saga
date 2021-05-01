/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require
  const logger = require('redux-logger').default;
  middleware.push(logger);
}
const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;

sagaMiddleware.run(rootSaga);
