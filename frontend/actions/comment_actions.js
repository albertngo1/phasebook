import * as APICommentUtil from '../util/comment_api_util';

export const RECEIVE_POST_COMMENTS = "RECEIVE_POST_COMMENTS";
export const RECEIVE_ONE_COMMENT = "RECEIVE_ONE_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";

export const receivePostComments = comments => ({
  type: RECEIVE_POST_COMMENTS,
  comments,
});

export const receiveOnePostComment = comment => ({
  type: RECEIVE_ONE_COMMENT,
  comment,
});

export const removeComment = commentId => ({
  type: DELETE_COMMENT,
  commentId,
});

export const fetchPostComments = postId => dispatch => {
  return APICommentUtil.fetchPostComments(postId)
    .then( comments => dispatch(receivePostComments(comments)))
};

export const createComment = comment => dispatch => {
  return APICommentUtil.createComment(comment)
    .then( comment => dispatch(receiveOnePostComment(comment)))
};

export const deleteComment = commentId => dispatch => {
  return APICommentUtil.deleteComment(commentId)
    .then((id) => dispatch(removeComment(id)))
}
