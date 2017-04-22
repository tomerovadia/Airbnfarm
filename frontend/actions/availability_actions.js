import * as AvailabilityAPIUtil from '../util/session_api_util';

// Constants



// Regular object action creators







// Thunk function action creators

export const createAvailabilities = (availabilities) => dispatch => {

  return AvailabilityAPIUtil.createAvailability(availability)
    .then(
      (resp) => dispatch(receiveCurrentUser(resp)),
      (errors) => dispatch(receiveCurrentUser(errors))
    );
};
