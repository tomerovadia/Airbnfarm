import merge from 'lodash/merge';
import { RECEIVE_BOOKINGS } from '../actions/booking_actions';

const _initialState = {
  trips: {},
  reservations: {},
};

export default (oldState = _initialState, action) => {

  switch(action.type){

    case RECEIVE_BOOKINGS:
      return merge({}, action.bookings);

    default:
      return oldState;
  }
};
