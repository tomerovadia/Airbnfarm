import merge from 'lodash/merge';
import { RECEIVE_BOOKINGS, RECEIVE_BOOKING, RECEIVE_ERRORS } from '../actions/booking_actions';

const _initialState = {
  trips: {},
  reservations: {},
  errors: {},
};

export default (oldState = _initialState, action) => {

  let newState = merge({}, oldState)
  switch(action.type){

    case RECEIVE_BOOKINGS:
      return merge(newState, action.bookings);

    case RECEIVE_ERRORS:
      return merge(newState, {errors: action.errors});

    case RECEIVE_BOOKING:
      newState.reservations[action.booking.id] = action.booking
      return merge(newState)

    default:
      return oldState;
  }
};
