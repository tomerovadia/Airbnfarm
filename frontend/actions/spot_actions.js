import * as SessionAPIUtil from '../util/spot_api_util';

export const RECEIVE_CURRENT_SPOT = 'RECEIVE_CURRENT_SPOT';

export const receiveCurrentSpot = (spot) => {
  return {
    type: RECEIVE_CURRENT_SPOT,
    spot,
  }
}

// Thunk action creators

export const createSpot = (spot) => dispatch => {
  return SessionAPIUtil.createSpot(spot).then(
    (resp) => receiveCurrentSpot(resp)
  )
}
