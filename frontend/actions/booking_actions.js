import * as BookingAPIUtil from '../util/booking_api_util';

// Constants

export const RECEIVE_BOOKINGS = 'RECEIVE_BOOKINGS';


// Regular object action creators

export const receiveBookings = (bookings) => {
  return {
    type: RECEIVE_BOOKINGS,
    bookings,
  };
};




// Thunk function action creators

export const createBooking = (booking) => dispatch => {
  return BookingAPIUtil.createBooking(booking)
    .then(
      (booking) => BookingAPIUtil.fetchBookings(booking.guest_id)
        .then((bookings) => dispatch(receiveBookings(bookings)),
              (errors) => console.log('there were errors')
        ),
      (errors) => console.log('there were errors')
    )
};
