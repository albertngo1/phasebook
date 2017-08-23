import React from 'react';
import { connect } from 'react-redux';
import MainPage from './main_page';
import { logout } from '../../actions/session_actions';
import { createPost, fetchPosts } from '../../actions/post_actions';
import { selectAllPosts } from '../../util/selectors';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser || {},
    posts: selectAllPosts(state) || {},
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createPost: post => dispatch(createPost(post)),
    fetchPosts: () => dispatch(fetchPosts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
