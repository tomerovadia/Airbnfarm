import {RECEIVE_MODAL, CLEAR_MODAL, HIDE_USER_SETTINGS, SHOW_USER_SETTINGS} from '../actions/modal_actions';
import merge from 'lodash/merge';

const _initialState = {
  activeModal: null,
  userSettingsVisible: false,
};

export default (oldState = _initialState, action) => {

  const newState = merge({}, oldState);
  switch(action.type){
    case RECEIVE_MODAL:
      return merge(newState, {activeModal: action.activeModal});

    case CLEAR_MODAL:
      return merge(newState, {activeModal: null});

    case HIDE_USER_SETTINGS:
      return merge(newState, {userSettingsVisible: false});

    case SHOW_USER_SETTINGS:
      return merge(newState, {userSettingsVisible: true});

    default:
      return oldState;
  }

};
