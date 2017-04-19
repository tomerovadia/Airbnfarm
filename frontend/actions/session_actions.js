import * as SessionAPIUtil from '../util/session_api_util';
import { clearModal } from './modal_actions';

// Constants

export const RECEIVE_CURRENT_USER = 'RECEIVE_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

// Regular object action creators

export const receiveCurrentUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  };
};

// Multiple errors: Object {email: Array(1), password: Array(1)}
// Single error: Object {password: Array(1)}

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors: jQuery.parseJSON(errors.responseText)
  };
};


// Thunk action creators

export const login = (user) => dispatch => {
  return SessionAPIUtil.login(user)
    .then(
      (user) => {
        dispatch(receiveCurrentUser(user));
        dispatch(clearModal());
      },
      (errors) => dispatch(receiveErrors(errors))
    );
};


export const logout = () => dispatch => {
  return SessionAPIUtil.logout()
    .then(
      () => dispatch(receiveCurrentUser(null)),
      (errors) => dispatch(receiveErrors(errors)));
};


export const signup = (user) => dispatch => {
  return SessionAPIUtil.signup(user)
    .then(
      (user) => {
        dispatch(receiveCurrentUser(user));
        dispatch(clearModal());
      },
      (errors) => dispatch(receiveErrors(errors)));
};
