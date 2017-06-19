import merge from 'lodash/merge';
import {RECEIVE_ERRORS, RECEIVE_LISTINGS} from '../actions/listing_actions';

const _initialState = {
  listings: [],
  errors: {},
};

export default (oldState = _initialState, action) => {
  let newState = merge({}, oldState);
  switch(action.type){

    case RECEIVE_ERRORS:
      newState.errors = action.errors;
      newState.listings = [];
      return newState;

    case RECEIVE_LISTINGS:
      newState.listings = [];
      for(let key in action.listings){
        newState.listings.push(action.listings[key])
      }
      return newState;

    default:
      return oldState;
  }
};
