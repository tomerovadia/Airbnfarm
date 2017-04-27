import * as BookingAPIUtil from '../util/booking_api_util';

// Constants

export const RECEIVE_GUEST_BOOKINGS = 'RECEIVE_GUEST_BOOKINGS';
export const RECEIVE_HOST_BOOKINGS = 'RECEIVE_GUEST_BOOKINGS';


// Regular object action creators

export const receiveGuestBookings = (guestBookings) => {
  return {
    type: RECEIVE_GUEST_BOOKINGS,
    guestBookings,
  };
};

export const receiveHostBookings = (hostBookings) => {
  return {
    type: RECEIVE_HOST_BOOKINGS,
    hostBookings,
  };
};




// Thunk function action creators
//
// export const createAvailability = (availability) => dispatch => {
//   return AvailabilityAPIUtil.createAvailability(availability)
//     .then(
//       (availability) => dispatch(receiveAvailability(availability),
//       (errors) => dispatch(jQuery.parseJSON(errors.responseText))
//     )
//   );
// };
