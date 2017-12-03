import { RECEIVE_ALL_POSTS, RECEIVE_ONE_POST, DELETE_POST } from '../actions/post_actions';
import _ from 'lodash'
import { RECEIVE_LIKE, DELETE_LIKE } from '../actions/like_actions';

const postReducer = (state = {}, action) => {
  let nextState;
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_POSTS:
      return action.posts;
    case RECEIVE_ONE_POST:
      return Object.assign({}, state, {[action.post.id]: action.post});
    case DELETE_POST:
      nextState = _.merge({}, state);
      delete nextState[action.postId];
      return nextState;

    case RECEIVE_LIKE:
      nextState = _.merge({}, state);
      nextState[action.like.like_item_id].likes.push(action.like);
      return nextState;
    case DELETE_LIKE:
      nextState = _.merge({}, state);
      nextState[action.like.like_item_id].likes = nextState[action.like.like_item_id].likes.filter( el => {
        return action.like.id !== el.id;
      });
      return nextState;
    default:
      return state;
  }
}

export default postReducer;
