import {RECEIVE_MODAL, CLEAR_MODAL} from '../actions/modal_actions';
import merge from 'lodash/merge';

const _initialState = {
  activeModal: null
}

export default (oldState = _initialState, action) => {

  switch(action.type){
    case RECEIVE_MODAL:
      return {activeModal: action.activeModal}
    case CLEAR_MODAL:
      return {activeModal: null}
    default:
      return oldState;
  }

}
