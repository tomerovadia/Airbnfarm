import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import spotReducer from './spot_reducer';
import modalReducer from './modal_reducer';
import availabilityReducer from './availability_reducer';
import searchCriteriaReducer from './search_criteria_reducer';
import bookingReducer from './booking_reducer';
import listingsReducer from './listing_reducer';

export default combineReducers(
  {
    session: sessionReducer,
    modalConductor: modalReducer,
    spots: spotReducer,
    availabilities: availabilityReducer,
    searchCriteria: searchCriteriaReducer,
    bookings: bookingReducer,
    listings: listingsReducer,
  }
);
