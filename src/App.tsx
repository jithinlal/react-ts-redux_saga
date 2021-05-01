import React from 'react';
import { Provider } from 'react-redux';

import store from './redux/store/store';
import Router from './navigation/routes';
import Toast from './components/Toast/Toast';

function App() {
  return (
    <div className="flex h-screen w-full">
      <Provider store={store}>
        <Toast />
        <Router />
      </Provider>
    </div>
  );
}

export default App;
