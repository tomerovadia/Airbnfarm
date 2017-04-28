export const createBooking = (booking) => {
  const url = `api/spots/${booking.spot_id}/bookings`;

  return $.ajax({
    method: 'post',
    url,
    contentResponse: 'json',
    data: {booking},
  });
};


export const fetchBookings = (userId) => {
  const url = `api/users/${userId}/bookings`;

  return $.ajax({
    method: 'get',
    url,
    contentResponse: 'json',
  });
};

export const approveBooking = (bookingId) => {
  const url = `api/bookings/${bookingId}`;

  return $.ajax({
    method: 'patch',
    url,
    contentResponse: 'json',
    data: {
      booking: {
        booking_status: 'approved'
      }
    }
  });

};


export const declineBooking = (bookingId) => {
  const url = `api/bookings/${bookingId}`;

  return $.ajax({
    method: 'patch',
    url,
    contentResponse: 'json',
    data: {
      booking: {
        booking_status: 'declined'
      }
    }
  });

};
