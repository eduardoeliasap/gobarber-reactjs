import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';
import { signInSuccess, signFailure } from './actions';

// The payload data has returned of actions.js
export function* singIn({ payload }) {
  try {
    const { email, password } = payload;

    /**
     * Call Parameters:
     * 1). Method that I want call (URL)
     * 2). Parameters tha the api.post need get: URL, The data that I want send
     */
    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    if (!user.provider) {
      // console.tron.error('User is not a provider!');
      toast.error('User is not a provider!');
      return;
    }

    // Set informations that I will use in all requests
    api.defaults.headers.Authorization = `Bearer ${token}`;

    // If is a provider, I call signInSuccess passing token and user data
    yield put(signInSuccess(token, user));

    // Navigate the user into the dashboard route
    history.push('/dashboard');
  } catch (err) {
    toast.error('Authentication failed, check your data');
    yield put(signFailure());
  }
}

export function* singUp({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(api.post, 'users', {
      name,
      email,
      password,
      provider: true,
    });

    history.push('/');
  } catch (err) {
    toast.error('Create provider fail!!');
    yield put(signFailure);
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    // Set informations that I will use in all requests
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

// Always that I listen @auth/SIGN_IN_REQUEST I call the signIn function
export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', singIn),
  takeLatest('@auth/SIGN_UP_REQUEST', singUp),
]);
