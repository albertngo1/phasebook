import * as APICommentUtil from '../util/comment_api_util';

export const RECEIVE_ONE_COMMENT = "RECEIVE_ONE_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";

export const receiveOnePostComment = comment => ({
  type: RECEIVE_ONE_COMMENT,
  comment,
});

export const removeComment = comment => ({
  type: DELETE_COMMENT,
  comment,
});

export const createComment = comment => dispatch => {
  return APICommentUtil.createComment(comment)
    .then( comment => dispatch(receiveOnePostComment(comment)))
};

export const deleteComment = commentId => dispatch => {
  return APICommentUtil.deleteComment(commentId)
    .then((id) => dispatch(removeComment(id)))
}
