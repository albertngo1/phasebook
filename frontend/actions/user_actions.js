import * as APIUserUtil from '../util/user_api_util';


export const RECEIVE_SINGLE_USER = "RECEIVE_SINGLE_USER";

export const requestSingleUser = userId => dispatch => {
  return APIUserUtil.fetchSingleUser(userId)
    .then( user => dispatch(receiveSingleUser(user)));
};

export const receiveSingleUser = user => ({
  type: RECEIVE_SINGLE_USER,
  user,
});
