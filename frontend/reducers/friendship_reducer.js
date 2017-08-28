import { DELETE_FRIENDSHIP,
   RECEIVE_FRIENDSHIP, RECEIVE_ALL_FRIENDSHIPS } from '../actions/friendship_actions';

const friendshipReducer = (state = {}, action) => {
   Object.freeze(state);
   let nextState;
   switch(action.type) {
      case RECEIVE_ALL_FRIENDSHIPS:
         return Object.assign({}, state, action.friendships)
      case RECEIVE_FRIENDSHIP:
         return Object.assign({}, state, {[action.friendship.id]: friendship});
      case DELETE_FRIENDSHIP:
         nextState = Object.assign({}, state);
         delete nextState[action.friendshipId];
         return nextState;
      default:
         return state;
   }
}





export default friendshipReducer;
