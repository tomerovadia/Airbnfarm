import merge from 'lodash/merge';
import { RECEIVE_BOOKINGS, RECEIVE_TRIP, RECEIVE_RESERVATION, RECEIVE_ERRORS } from '../actions/booking_actions';

const _initialState = {
  trips: {},
  reservations: {},
  errors: {},
};

export default (oldState = _initialState, action) => {

  let newState = merge({}, oldState)
  switch(action.type){

    case RECEIVE_BOOKINGS:
      // newState.reservations = action.reservations;
      // newState.trips = action.trips;
      // return newState;
      return merge(newState, action.bookings);

    case RECEIVE_ERRORS:
      return merge(newState, {errors: action.errors});

    case RECEIVE_RESERVATION:
      newState.reservations[action.reservation.id] = action.reservation
      return merge(newState)

    case RECEIVE_TRIP:
      newState.trips[action.trip.id] = action.trip
      return merge(newState)

    default:
      return oldState;
  }
};
