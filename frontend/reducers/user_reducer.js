import { RECEIVE_SINGLE_USER, RECEIVE_ALL_USERS } from '../actions/user_actions';

const userReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SINGLE_USER:
      return action.user;
    default:
      return state;
  }
}

export default userReducer;
