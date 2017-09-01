import { RECEIVE_USER_FRIENDS,
RECEIVE_FRIENDSHIP, RECEIVE_FRIEND_REQUESTS } from '../actions/friendship_actions';
import _ from 'lodash'

const friendshipReducer = (state = {}, action) => {
   Object.freeze(state);
   let nextState;
   switch(action.type) {
     case RECEIVE_USER_FRIENDS:
      return Object.assign({}, state, {friends: action.friends});
     case RECEIVE_FRIENDSHIP:
      return Object.assign({}, state, {friendship: action.friendship})
     case RECEIVE_FRIEND_REQUESTS:
      return _.merge({}, state, {friendRequests: action.friendRequests})
    default:
       return state;
   }
}





export default friendshipReducer;
