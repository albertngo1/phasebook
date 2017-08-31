import * as APIUserUtil from '../util/user_api_util';


export const RECEIVE_SEARCH = "RECEIVE_SEARCH";
export const RECEIVE_SINGLE_USER = "RECEIVE_SINGLE_USER";

export const receiveAllUsers = users => ({
  type: RECEIVE_SEARCH,
  users,

});

export const receiveSingleUser = user => ({
  type: RECEIVE_SINGLE_USER,
  user,
});

export const requestSingleUser = userId => dispatch => {
  return APIUserUtil.fetchSingleUser(userId)
    .then( user => dispatch(receiveSingleUser(user)));
};

export const updateUser = user => dispatch => {
  return APIUserUtil.updateUser(user)
    .then( user => dispatch(receiveSingleUser(user)));
}


export const fetchSearchUsers = (searchString) => dispatch => {
  return APIUserUtil.fetchSearchUsers(searchString)
    .then( users => dispatch(receiveAllUsers(users)))
}
