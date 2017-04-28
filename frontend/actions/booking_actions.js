import * as BookingAPIUtil from '../util/booking_api_util';

// Constants

export const RECEIVE_BOOKINGS = 'RECEIVE_BOOKINGS';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const RECEIVE_BOOKING = 'RECEIVE_BOOKING';


// Regular object action creators

export const receiveBookings = (bookings) => {
  return {
    type: RECEIVE_BOOKINGS,
    bookings,
  };
};

export const receiveBooking = (booking) => {
  return {
    type: RECEIVE_BOOKING,
    booking,
  };
}




export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors,
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

export const fetchBookings = (userId) => dispatch => {
  return BookingAPIUtil.fetchBookings(userId)
    .then((resp) => dispatch(receiveBookings(resp)),
          (errors) => dispatch(receiveErrors(errors.responseJSON))
    );
};

export const approveBooking = (bookingId) => dispatch => {
  return BookingAPIUtil.approveBooking(bookingId)
    .then((resp) => dispatch(receiveBooking(resp)),
          (errors) => dispatch(receiveErrors(errors.responseJSON))
    );
};

export const declineBooking = (bookingId) => dispatch => {
  return BookingAPIUtil.declineBooking(bookingId)
    .then((resp) => dispatch(receiveBooking(resp)),
          (errors) => dispatch(receiveErrors(errors.responseJSON))
    );
};
