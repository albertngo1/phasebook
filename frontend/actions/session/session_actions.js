import * as APISessionUtil from '../../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser,
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors,
});

export const signup = user => dispatch => {
  return APISessionUtil.signup(user)
    .then( user => dispatch(receiveCurrentUser(user))),
    err => dispatch(receiveErrors(err.responseJSON))
};

export const login = user => dispatch => {
  return APISessionUtil.login(user)
    .then( user => dispatch(receiveCurrentUser(user))),
    err => dispatch(receiveErrors(err.responseJSON))
};

export const logout = () => dispatch => {
  return APISessionUtil.logout()
    .then( () => dispatch(receiveCurrentUser(null)))
};
