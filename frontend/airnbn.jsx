import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root';
import { createAvailability } from './actions/availability_actions';

document.addEventListener('DOMContentLoaded', () => {

  const preloadedState = {session: {currentUser: window.currentUser, errors: []}};

  const store = configureStore(preloadedState);

  window.store = store;

  const root = document.getElementById('root');
  ReactDOM.render(
    <Root store={store}/>,
    root
  );

});
