import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/session_actions';
import { DELETE_FRIENDSHIP, RECEIVE_FRIENDSHIP } from '../actions/friendship_actions';

const nullUser = {
  currentUser: null,
  errors: [],
}

const sessionReducer = (state = nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, {currentUser: action.currentUser});
    case RECEIVE_ERRORS:
      return Object.assign({}, state, {errors: action.errors});
    case CLEAR_ERRORS:
      return Object.assign({}, state, {errors: []});
    case DELETE_FRIENDSHIP:
        let nextState = Object.assign({}, state);
        let requests = nextState.currentUser.received_friend_requests;
        delete requests[requests.indexOf(action.friendshipId)];
        return nextState;
    default:
      return state;
  }
}

export default sessionReducer;
