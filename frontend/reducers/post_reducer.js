import { RECEIVE_ALL_POSTS, RECEIVE_ONE_POST, DELETE_POST } from '../actions/post_actions';
import _ from 'lodash'

const postReducer = (state = {}, action) => {
  let nextState;
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_POSTS:
      return Object.assign({}, state, action.posts);
    case RECEIVE_ONE_POST:
      return Object.assign({}, state, {[action.post.id]: action.post});
    case DELETE_POST:
      nextState = _.merge({}, state);
      delete nextState[action.postId];
      return nextState;
    default:
      return state;
  }
}

export default postReducer;
