import merge from 'lodash/merge';
import {RECEIVE_CURRENT_SPOT, RECEIVE_ERRORS, RECEIVE_SEARCH_RESULTS} from '../actions/spot_actions';

const _initialState = {
  currentSpot: {
    title: '',
    base_price: 0,
    summary: '',
    privacy_level: '',
    description: '',
    num_guests: 0,
    num_bedrooms: 0,
    num_beds: 0,
    num_bathrooms: 0,
    street_address: '',
    state: '',
    zipcode: 0,
    city: '',
    availabilities: [],
    main_photo: {url: ''},
  },
  searchResults: {},
  errors: {},
};

export default (oldState = _initialState, action) => {
  let newState = merge({}, oldState);
  switch(action.type){

    case RECEIVE_CURRENT_SPOT:
      newState.currentSpot = action.spot;
      return newState;

    case RECEIVE_ERRORS:
      newState.errors = action.errors;
      newState.searchResults = {};
      return newState;

    case RECEIVE_SEARCH_RESULTS:
      newState.searchResults = action.searchResults;
      return newState;

    default:
      return oldState;
  }
};
