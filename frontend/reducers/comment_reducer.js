import { RECEIVE_POST_COMMENTS, RECEIVE_ONE_COMMENT,
   DELETE_COMMENT } from '../actions/comment_actions';
import _ from 'lodash'

const commentReducer = (state = {}, action) => {
  let nextState;
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_POST_COMMENTS:
      return Object.assign({}, state, action.comments);
    case RECEIVE_ONE_COMMENT:
      return Object.assign({}, state, {[action.comment.id]: action.comment});
    case DELETE_COMMENT:
      nextState = _.merge({}, state);
      delete nextState[action.commentId];
      return nextState;
    default:
      return state;
  }
}

export default commentReducer;
