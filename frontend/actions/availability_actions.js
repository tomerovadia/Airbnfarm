import * as AvailabilityAPIUtil from '../util/availability_api_util';

// Constants

export const RECEIVE_AVAILABILITY = 'RECEIVE_AVAILABILITY';
export const CLEAR_AVAILABILITIES = 'CLEAR_AVAILABILITY';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

// Regular object action creators

export const receiveAvailability = (availability) => {
  return {
    type: RECEIVE_AVAILABILITY,
    availability,
  };
};

export const clearAvailabilities = () => {
  return {
    type: RECEIVE_ERRORS,
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors,
  };
};



// Thunk function action creators

export const createAvailability = (availability) => dispatch => {
  return AvailabilityAPIUtil.createAvailability(availability)
    .then(
      (availability) => dispatch(receiveAvailability(availability),
      (errors) => dispatch(jQuery.parseJSON(errors.responseText))
    )
  );
};
