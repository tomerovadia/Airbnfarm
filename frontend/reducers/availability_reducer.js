import merge from 'lodash/merge';
import {RECEIVE_AVAILABILITY, CLEAR_AVAILABILITIES, RECEIVE_ERRORS} from '../actions/availability_actions';

const _initialState = {
  availabilities: [],
  errors: {},
};

export default (oldState = _initialState, action) => {

  let newState = merge({}, oldState);
  switch(action.type){

    case RECEIVE_AVAILABILITY:
      newState.availabilities.push(action.availability);
      return newState;

    case CLEAR_AVAILABILITIES:
      newState.availabilities = [];
      return newState;

    case RECEIVE_ERRORS:
      newState.errors = action.errors;
      return newState;

    default:
      return oldState;
  }
};
