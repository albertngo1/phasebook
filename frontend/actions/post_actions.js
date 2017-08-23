import * as APIPostUtil from '../util/post_api_util';

export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS";
export const RECEIVE_ONE_POST = "RECEIVE_ONE_POST";

export const receiveAllPosts = posts => ({
  type: RECEIVE_ALL_POSTS,
  posts,
});

export const receiveOnePost = post => ({
  type: RECEIVE_ONE_POST,
  post,
})


export const fetchPosts = () => dispatch => {
  return APIPostUtil.fetchPosts()
    .then( posts => dispatch(receiveAllPosts(posts)))
};

export const createPost = post => dispatch => {
  return APIPostUtil.createPost(post)
    .then( post => dispatch(receiveOnePost(post)))
};
