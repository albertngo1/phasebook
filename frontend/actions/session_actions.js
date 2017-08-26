import * as APISessionUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const USER_LOGOUT = "USER_LOGOUT";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser,
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors,
});
export const userLogout = () => ({
  type: USER_LOGOUT,
})

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
})

export const signup = user => dispatch => {
  dispatch(clearErrors());
  return APISessionUtil.signup(user)
    .then( user => dispatch(receiveCurrentUser(user)),
    err => dispatch(receiveErrors(err.responseJSON)))
};

export const login = user => dispatch => {
  dispatch(clearErrors());
  return APISessionUtil.login(user)
    .then( user => dispatch(receiveCurrentUser(user)),
    err => dispatch(receiveErrors(err.responseJSON)))
};

export const logout = () => dispatch => {
  return APISessionUtil.logout()
    .then( () => dispatch(receiveCurrentUser(null)))
    .then( () => dispatch(userLogout()))
};
