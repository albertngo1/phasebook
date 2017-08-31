import { RECEIVE_SEARCH } from '../actions/user_actions';

const searchReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SEARCH:
      return action.users
    default:
      return state;
  }
}

export default searchReducer;
