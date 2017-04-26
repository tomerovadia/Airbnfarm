import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root';
import { createAvailability } from './actions/availability_actions';
import {createBooking} from './util/booking_api_util';

document.addEventListener('DOMContentLoaded', () => {

  const preloadedState = {session: {currentUser: window.currentUser, errors: []}};

  const store = configureStore(preloadedState);

  window.createBooking = createBooking;

  const root = document.getElementById('root');
  ReactDOM.render(
    <Root store={store}/>,
    root
  );

  // FLESH THIS OUT LATER, LOGIC FOR MAKING USER DROPDOWN DISAPPEAR
  // MAY NEED TO CONNECT THE ROOT TO STORE
  // const onPageClick() => {
  //
  //   if(this.props.userSettingsVisible){
  //     this.props.hideUserSettings();
  //   }
  //
  // };

});
