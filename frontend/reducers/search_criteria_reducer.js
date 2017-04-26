import merge from 'lodash/merge';
import {RECEIVE_SEARCH_CRITERIA} from '../actions/search_criteria_actions';

const _initialState = {
    city: '',
    startDate: null,
    endDate: null,
};

export default (oldState = _initialState, action) => {

  let newState = merge({}, oldState);
  switch(action.type){

    case RECEIVE_SEARCH_CRITERIA:
      return action.searchCriteria;

    default:
      return oldState;
  }
};
