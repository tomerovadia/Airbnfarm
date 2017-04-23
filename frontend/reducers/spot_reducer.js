import merge from 'lodash/merge';
import {RECEIVE_CURRENT_SPOT, RECEIVE_ERRORS} from '../actions/spot_actions';

const _initialState = {
  currentSpot: null,
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
