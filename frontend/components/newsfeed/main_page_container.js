import React from 'react';
import { connect } from 'react-redux';
import MainPage from './main_page';
import { fetchPosts, deletePost } from '../../actions/post_actions';
import { togglePostModal, toggleEditPostModal, toggleChat } from '../../actions/ui_actions';
import { updateFriendship, deleteFriendship } from '../../actions/friendship_actions';
import { selectAllPosts } from '../../util/selectors';
import { withRouter } from 'react-router-dom';
import { fetchAllConversations } from '../../actions/conversation_actions';



const mapStateToProps = (state) => {
  return {
    conversations: state.entities.conversations,
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
    fetchAllConversations: () => dispatch(fetchAllConversations()),
    toggleChat: () => dispatch(toggleChat),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainPage));
