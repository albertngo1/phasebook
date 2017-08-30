import _ from 'lodash';

export const selectAllPosts = state => _.values(state.entities.posts);

export const selectPostComments = state => _.values(state.entities.comments);

export const selectAllUsers = state => _.values(state.entities.user.search)
