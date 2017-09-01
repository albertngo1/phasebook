import * as APIPostUtil from '../util/post_api_util';

export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS";
export const RECEIVE_ONE_POST = "RECEIVE_ONE_POST";
export const DELETE_POST = "DELETE_POST";

export const receiveAllPosts = posts => ({
  type: RECEIVE_ALL_POSTS,
  posts,
});

export const receiveOnePost = post => ({
  type: RECEIVE_ONE_POST,
  post,
});

export const removePost = postId => ({
  type: DELETE_POST,
  postId,
});


export const fetchPosts = () => dispatch => {
  return APIPostUtil.fetchPosts()
    .then( posts => dispatch(receiveAllPosts(posts)))
};

export const createPost = formData => dispatch => {
  return APIPostUtil.createPost(formData)
    .then( post => dispatch(receiveOnePost(post)))
};

export const updatePost = id => dispatch => {
  return APIPostUtil.updatePost(id)
    .then(post => dispatch(receiveOnePost(post)))
}

export const deletePost = id => dispatch => {
  return APIPostUtil.deletePost(id)
    .then(() => dispatch(removePost(id)))
}
