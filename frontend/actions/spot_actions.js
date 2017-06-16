import * as SpotAPIUtil from '../util/spot_api_util';

export const RECEIVE_CURRENT_SPOT = 'RECEIVE_CURRENT_SPOT';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';



export const receiveCurrentSpot = (spot) => {
  return {
    type: RECEIVE_CURRENT_SPOT,
    spot,
  };
};


export const receiveSearchResults = (searchResults) => {
  return {
    type: RECEIVE_SEARCH_RESULTS,
    searchResults,
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
  return SpotAPIUtil.createSpot(spot)
    .then(
      (resp) => dispatch(receiveCurrentSpot(resp)),
      (errors) => dispatch(receiveErrors(errors.responseJSON))
    );
};

export const fetchSpot = (id) => dispatch => {
  return SpotAPIUtil.fetchSpot(id)
    .then(
      (resp) => dispatch(receiveCurrentSpot(resp)),
      (errors) => dispatch(receiveErrors(errors))
    );
};

export const fetchSearchResults = (criteria) => dispatch => {
  return SpotAPIUtil.fetchSearchResults(criteria)
    .then(
      (resp) => dispatch(receiveSearchResults(resp)),
      (errors) => dispatch(receiveErrors(errors.status))
    );
};
