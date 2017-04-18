import React from 'react';
import ReactDOM from 'react-dom';
import {login, logout, signup} from './util/session_api_util';
import configureStore from './store/store.js';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  window.login = login;
  window.logout = logout;
  window.signup = signup;

  const store = configureStore();

  const root = document.getElementById('root');
  ReactDOM.render(
    <Root store={store}/>,
    root
  );
});
