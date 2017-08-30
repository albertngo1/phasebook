import { RECEIVE_USER_FRIENDS,
RECEIVE_FRIENDSHIP } from '../actions/friendship_actions';

const friendshipReducer = (state = {}, action) => {
   Object.freeze(state);
   let nextState;
   switch(action.type) {
     case RECEIVE_USER_FRIENDS:
      return Object.assign({}, state, {friends: action.friends});
     case RECEIVE_FRIENDSHIP:
      return Object.assign({}, state, action.friendship)
    default:
       return state;
   }
}





export default friendshipReducer;
