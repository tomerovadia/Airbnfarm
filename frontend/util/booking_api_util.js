export const createBooking = (booking) => {
  return $.ajax({
    method: 'post',
    url: 'api/bookings',
    data: {booking},
  });
};
