import * as SessionAPIUtil from '../util/spot_api_util';

export const RECEIVE_CURRENT_SPOT = 'RECEIVE_CURRENT_SPOT';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveCurrentSpot = (spot) => {
  return {
    type: RECEIVE_CURRENT_SPOT,
    spot,
  };
}

export const receiveErrors = (errors) => {

  return {
    type: RECEIVE_ERRORS,
    errors: jQuery.parseJSON(errors.responseText),
  };
}

// Thunk action creators

export const createSpot = (spot) => dispatch => {
  return SessionAPIUtil.createSpot(spot)
    .then(
      (resp) => dispatch(receiveCurrentSpot(resp)),
      (errors) => dispatch(receiveErrors(errors))
    )
}
