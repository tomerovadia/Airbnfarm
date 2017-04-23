import merge from 'lodash/merge';
import {RECEIVE_CURRENT_SPOT, RECEIVE_ERRORS} from '../actions/spot_actions';

const _initialState = {
  currentSpot: {
    title: '',
    base_price: 0,
    summary: '',
    privacy_level_id: 1,
    description: '',
    num_guests: 8,
    num_bedrooms: 4,
    num_beds: 4,
    num_bathrooms: 4,
    street_address: '',
    state_id: 5,
    zipcode: 11111,
    city: ''
  },
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
      return newState;

    default:
      return oldState;
  }
};
