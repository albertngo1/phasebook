import React from 'react';
import { connect } from 'react-redux';
import MainPage from './main_page';
import { fetchPosts, deletePost } from '../../actions/post_actions';
import { togglePostModal, toggleEditPostModal } from '../../actions/ui_actions';
import { updateFriendship, deleteFriendship } from '../../actions/friendship_actions';
import { selectAllPosts } from '../../util/selectors';
import { withRouter } from 'react-router-dom';


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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainPage));
