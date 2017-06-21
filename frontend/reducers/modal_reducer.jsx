import {RECEIVE_MODAL, CLEAR_MODAL, SHOW_DROPDOWN, HIDE_DROPDOWN} from '../actions/modal_actions';
import merge from 'lodash/merge';

const _initialState = {
  activeModal: null,
  activeDropdown: '',
};

export default (oldState = _initialState, action) => {

  const newState = merge({}, oldState);
  switch(action.type){
    case RECEIVE_MODAL:
      return merge(newState, {activeModal: action.activeModal});

    case CLEAR_MODAL:
      return merge(newState, {activeModal: null});

    case SHOW_DROPDOWN:
      return merge(newState, {activeDropdown: action.dropdown});

    case HIDE_DROPDOWN:
      return merge(newState, {activeDropdown: ''});

    default:
      return oldState;
  }

};
