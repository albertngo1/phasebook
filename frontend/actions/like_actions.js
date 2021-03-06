import * as APILikeUtil from '../util/like_api_util';

export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const DELETE_LIKE = "DELETE_LIKE";
export const RECEIVE_COMMENT_LIKE = "RECEIVE_COMMENT_LIKE";
export const DELETE_COMMENT_LIKE = "DELETE_COMMENT_LIKE";

export const receiveLike = like => {
  return {
    type: RECEIVE_LIKE,
    like,
  }
}

export const deleteLike = like => {
  return {
    type: DELETE_LIKE,
    like,
  }
}

export const receiveCommentLike = like => {
  return {
    type: RECEIVE_COMMENT_LIKE,
    like,
  }
}

export const deleteCommentLike = like => {
  return {
    type: DELETE_COMMENT_LIKE,
    like,
  }
}


export const createLike = like => dispatch => {
  return APILikeUtil.createLike(like)
    .then( like => dispatch(receiveLike(like)))
}

export const removeLike = likeId => dispatch => {
  return APILikeUtil.destroyLike(likeId)
    .then( like => dispatch(deleteLike(like)))
}

export const createCommentLike = like => dispatch => {
  return APILikeUtil.createLike(like)
    .then( like => dispatch(receiveCommentLike(like)))
}

export const removeCommentLike = likeId => dispatch => {
  return APILikeUtil.destroyLike(likeId)
    .then( like => dispatch(deleteCommentLike(like)))
}
