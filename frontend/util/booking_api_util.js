export const createBooking = (booking, spotId) => {
  const url = `api/spots/${spotId}/bookings`

  return $.ajax({
    method: 'post',
    url,
    data: {booking},
  });
};
//
// export const createBooking = (booking) => {
//   return $.ajax({
//     method: 'post',
//     url: 'api/bookings',
//     data: {booking},
//   });
// };
