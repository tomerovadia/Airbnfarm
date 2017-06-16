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

    let trips = Object.keys(bookings.trips).map((id) => bookings.trips[id]);
    trips = trips.sort((a,b) => {
      if(a.start_date > b.start_date) return 1
      if(a.start_date < b.start_date) return -1
      return 0
    })

    let reservations = Object.keys(bookings.reservations).map((id) => bookings.reservations[id]);
    reservations = reservations.sort((a,b) => {
      if(a.start_date > b.start_date) return 1
      if(a.start_date < b.start_date) return -1
      return 0
    })

    return {
      trips,
      reservations,
      errors: bookings.errors,
    }
  }

}
