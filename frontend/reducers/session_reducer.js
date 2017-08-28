import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/session_actions';
import { DELETE_FRIENDSHIP, RECEIVE_FRIENDSHIP } from '../actions/friendship_actions';

const nullUser = {
  currentUser: null,
  errors: [],
}

const sessionReducer = (state = nullUser, action) => {
  Object.freeze(state);
  let nextState;
  let nextUser;
  let requests;
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, {currentUser: action.currentUser});
    case RECEIVE_ERRORS:
      return Object.assign({}, state, {errors: action.errors});
    case CLEAR_ERRORS:
      return Object.assign({}, state, {errors: []});
    case DELETE_FRIENDSHIP:
      nextState = Object.assign({}, state);
      nextUser = Object.assign({}, nextState.currentUser);
      nextState.currentUser = nextUser;
      requests = nextState.currentUser.received_friend_requests;
      nextState.currentUser.received_friend_requests = requests.filter( el => {
        return el !== action.friendshipId;
      } );
      return nextState;
    case RECEIVE_FRIENDSHIP:
      debugger
      nextState = Object.assign({}, state);
      nextUser = Object.assign({}, nextState.currentUser);
      nextState.currentUser = nextUser;
      requests = nextState.currentUser.received_friend_requests;
      nextState.currentUser.received_friend_requests = requests.filter( el => {
        return el !== action.friendship.user1_id;
      } );
      return nextState;
    default:
      return state;
  }
}

export default sessionReducer;
