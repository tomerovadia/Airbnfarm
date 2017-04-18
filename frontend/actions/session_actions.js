import * as SessionAPIUtil from '../util/session_api_util';

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

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};


// Thunk action creators

export const login = (user) => dispatch => {
  return SessionAPIUtil.login(user)
    .then(
      (user) => dispatch(receiveCurrentUser(user)),
      (errors) => dispatch(receiveErrors(errors)));
};


export const logout = () => dispatch => {
  return SessionAPIUtil.logout()
    .then(
      () => dispatch(receiveCurrentUser(null)),
      (errors) => dispatch(receiveErrors(errors)));
};


export const signup = (user) => dispatch => {
  return SessionAPIUtil.signup(signup)
    .then(
      (user) => dispatch(receiveCurrentUser(user)),
      (errors) => dispatch(receiveErrors(errors)));
};
