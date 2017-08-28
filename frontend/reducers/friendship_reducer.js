import { DELETE_FRIENDSHIP,
   RECEIVE_FRIENDSHIP } from '../actions/friendship_actions';

const friendshipReducer = (state = {}, action) => {
   Object.freeze(state);
   let nextState;
   switch(action.type) {
      case RECEIVE_FRIENDSHIP:
         return Object.assign({}, state, {[action.friendship.id]: action.friendship});
      default:
         return state;
   }
}





export default friendshipReducer;
