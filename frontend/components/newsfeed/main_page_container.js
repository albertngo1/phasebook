import React from 'react';
import { connect } from 'react-redux';
import MainPage from './main_page';
import { fetchPosts, deletePost } from '../../actions/post_actions';
import { togglePostModal, toggleEditPostModal } from '../../actions/ui_actions';
import { selectAllPosts } from '../../util/selectors';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser || {},
    posts: selectAllPosts(state) || {},

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    togglePostModal: () => dispatch(togglePostModal),
    toggleEditPostModal: (postId) => dispatch(toggleEditPostModal(postId)),
    deletePost: (id) => dispatch(deletePost(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
