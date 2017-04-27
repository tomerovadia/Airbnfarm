export const getSearchResults = ({spots: {searchResults}}) => {
  if(!searchResults || Object.keys(searchResults).length === 0){
    return {};
  } else {
    return Object.keys(searchResults).map((id) => searchResults[id]);
  }
};

export const getFormatedBookings = ({bookings}) => {
  if(!bookings || Object.keys(bookings).length === 0){
    return {};
  } else {
    return {
      trips: Object.keys(bookings.trips).map((id) => bookings.trips[id]),
      reservations: Object.keys(bookings.reservations).map((id) => bookings.reservations[id]),
      errors: bookings.errors,
    }
  }

}
