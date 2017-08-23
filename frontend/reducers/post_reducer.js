import { RECEIVE_ALL_POSTS, RECEIVE_ONE_POST } from '../actions/post_actions';

const postReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_POSTS:
      return Object.assign({}, state, action.posts)
    case RECEIVE_ONE_POST:
      return Object.assign({}, state, {[action.post.id]: action.post})
    default:
      return state;
  }
}

export default postReducer;
