import merge from 'lodash/merge';
import {RECEIVE_CURRENT_SPOT} from '../actions/spot_actions';

const _initialState = {
  currentSpot: null
}

export default (oldState = _initialState, action) => {
  switch(action.type){
    case RECEIVE_CURRENT_SPOT:
      return {currentSpot: action.spot};
    default:
      return oldState;
  }
}
