import * as SessionAPIUtil from '../util/spot_api_util';

export const RECEIVE_CURRENT_SPOT = 'RECEIVE_CURRENT_SPOT';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';



export const receiveCurrentSpot = (spot) => {
  return {
    type: RECEIVE_CURRENT_SPOT,
    spot,
  };
};

export const receiveErrors = (errors) => {

  return {
    type: RECEIVE_ERRORS,
    errors,
  };
};



// Thunk action creators

export const createSpot = (spot) => dispatch => {
  return SessionAPIUtil.createSpot(spot)
    .then(
      (resp) => dispatch(receiveCurrentSpot(resp)),
      (errors) => dispatch(receiveErrors(jQuery.parseJSON(errors.responseText)))
    );
};

export const fetchSpot = (id) => dispatch => {
  return SessionAPIUtil.fetchSpot(id)
    .then(
      (resp) => dispatch(receiveCurrentSpot(resp)),
      (errors) => dispatch(receiveErrors(errors))
    );
};
