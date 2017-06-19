import * as SpotAPIUtil from '../util/spot_api_util';

export const RECEIVE_LISTINGS = 'RECEIVE_LISTINGS';

export const receiveListings = (listings) => {
  return {
    type: RECEIVE_LISTINGS,
    listings,
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors,
  };
};



// Thunk action creators

export const fetchUserListings = (userId) => dispatch => {
  return SpotAPIUtil.fetchUserListings(userId)
    .then(
      (resp) => dispatch(receiveListings(resp)),
      (errors) => dispatch(receiveErrors(errors.status))
    );
};
