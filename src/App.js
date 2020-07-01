/* eslint-disable import/no-unresolved */
import React from 'react';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react'; // Need be after <Provider> and before <Router>
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import './config/ReactotronConfig';

import Routes from './routes';
import history from './services/history';

import { store, persistor } from './store';

import GlobalStyles from './styles/globals';

function App() {
  return (
    <Provider store={store}>
      {/* Will render the data only after fetching the application data */}
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes />
          <GlobalStyles />
          {/* Close messages after 3 seconds */}
          <ToastContainer autoClose={3000} />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
