import React from 'react';
import PostForm from './post_form';
import NavBar from '../navbar/navbar';
import PostModal from '../modals/post_modal';
import EditPost from './edit_form';
import AdPage from './ad_page';
import CommentForm from './comment_form';
import Chat from '../chat/chat';
import LeftNav from './main_page_left_nav';
import {Link, withRouter } from 'react-router-dom';
import FA from 'react-fontawesome';
import { connect } from 'react-redux';
import { fetchPosts, deletePost } from '../../actions/post_actions';
import { togglePostModal, toggleEditPostModal, toggleChat } from '../../actions/ui_actions';
import { updateFriendship, deleteFriendship } from '../../actions/friendship_actions';
import { selectAllPosts } from '../../util/selectors';
import { fetchAllConversations } from '../../actions/conversation_actions';
import {toggleNavBar} from '../../actions/ui_actions';


class MainPage extends React.Component {

  constructor(props) {
    super(props);

    this.handleToggleEditModal = this.handleToggleEditModal.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.viewOptions = this.viewOptions.bind(this);
    this.sentPost = this.sentPost.bind(this);
    this.closeNavBar = this.closeNavBar.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    this.props.fetchPosts()
      .then(this.props.fetchAllConversations());
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.userId !== nextProps.match.params.userId) {
      this.props.requestSingleUser(nextProps.match.params.userId);
    }
  }

  handleDelete(post) {
    if (post.author_id === this.props.currentUser.id) {
      this.props.deletePost(post.id);
    }
  }

  handleToggleEditModal(post) {
    if (post.author_id === this.props.currentUser.id) {
      this.props.toggleEditPostModal(post.id);
    }
  }

  closeNavBar() {
    if (this.props.navBar !== 0) {
      this.props.toggleNavBar(0);
    }
  }

  viewOptions(post) {
    return post.author_id === this.props.currentUser.id;
  }

  sentPost(post) {
    if (post.author_id === post.receiver_id) {
      return (
        <div>
          <div className="mp-nf-pi-name-pic">
            <div className="mp-nf-pi-img-wrap">
              <Link to={`/users/${post.author_id}`}>
                <img className="mp-nf-pi-img" src={post.profile_pic} alt="profile-pic"/>
              </Link>
            </div>
            <div className="mp-nf-pi-after-img">
              <div className="mp-nf-pi-name-header">
                <div className="mp-nf-pi-name">
                  <Link to={`/users/${post.author_id}`}>
                    <label className="mp-nf-pi-name-underline">
                      {post.author}
                    </label>
                  </Link>
                </div>
                {this.viewOptions(post) &&
                <div className="mp-nf-pi-dropdown-wrap1">
                <div className="mp-nf-pi-dropdown">
                  <FA name='sort-down' className="mp-nf-pi-dropdown-btn"/>
                        <div className="mp-nf-pi-dropdown-content">
                        <button onClick={() => this.handleToggleEditModal(post)}>Edit</button>
                        <button onClick={() => this.handleDelete(post)}>Delete</button>
                        </div>
                </div>
              </div>
                }
            </div>
              <div className="mp-nf-pi-header-misc">
                <div className="mp-nf-pi-date">{post.posted_date}</div>
                <div className="mp-nf-pi-separator">·</div>
                <FA name="globe" className="mp-nf-pi-globe"/>
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <div className="mp-nf-pi-name-pic">
            <div className="mp-nf-pi-img-wrap">
            <Link to={`/users/${post.author_id}`}>
              <img className="mp-nf-pi-img" src={post.profile_pic} alt="profile-pic"/>
            </Link>
            </div>
            <div className="mp-nf-pi-after-img">
              <div className="mp-nf-pi-name-header">
                <div className="mp-nf-pi-name">
                  <div className="mp-nf-pi-name-wrap">
                      <Link to={`/users/${post.author_id}`}>
                        <label className="mp-nf-pi-name-underline">
                          {post.author}
                        </label>
                      </Link>
                    <div className="mp-nf-pi-name-wrap1">
                      <FA className="caret" name="caret-right"/>
                    </div>
                    <Link to={`/users/${post.receiver_id}`}>
                      <label className="mp-nf-pi-name-underline">
                        {post.receiver}
                      </label>
                    </Link>
                  </div>
                </div>
                <div className="mp-nf-pi-dropdown-wrap2">
                  <div className="mp-nf-pi-dropdown">
                    <FA name='sort-down' className="mp-nf-pi-dropdown-btn"/>
                    <div className="mp-nf-pi-dropdown-content">
                      <button onClick={() => this.handleToggleEditModal(post)}>Edit</button>
                      <button onClick={() => this.handleDelete(post)}>Delete</button>
                    </div>
                  </div>

                </div>
              </div>
              <div className="mp-nf-pi-header-misc">
                <div className="mp-nf-pi-date">{post.posted_date}</div>
                <div className="mp-nf-pi-separator">·</div>
                <FA name="globe" className="mp-nf-pi-globe"/>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

  render() {
    document.body.classList.remove('modal-fixed');
    const {posts, currentUser, togglePostModal, toggleEditPostModal} = this.props;
    return (
      <div className="mp-entire-wrapper">
        <div className="main-page-container">
          <NavBar toggleChat={this.props.toggleChat} conversations={this.props.conversations}/>
          <div className="main-page-content">
            <div className="mp-left-nav-wrapper">
              {!!currentUser &&
                <LeftNav currentUser={currentUser} toggleChat={this.props.toggleChat}/>
              }
            </div>

            <div className="main-page-newsfeed main-page-newsfeed-posts">
              <div>
                <PostModal/>
                <PostForm/>
              </div>
              <ul className="main-page-newsfeed-posts">
                {posts.reverse().map(post => {
                  return (
                    <li className="mp-newsfeed-post-item" key={`post-${post.id}`}>
                      <div className="mp-nf-pi-wrapper">
                        <div className="mp-nf-pi-header">
                          {this.sentPost(post)}

                        </div>
                        <div className="mp-nf-pi-body">{post.body}</div>
                        {!!post.image &&
                          <div className="mp-nf-pi-body-img">
                            <img src={post.image} />
                          </div>}
                        </div>
                        <div >
                          <CommentForm post={post}/>
                        </div>
                        <div>
                          {this.viewOptions(post) && <EditPost post={post}/>}
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </div>
              <div className="mp-ad-page-wrapper">
                <AdPage />
              </div>
            </div>
            <Chat conversations={this.props.conversations}
              toggleChat={this.props.toggleChat}
              fetchConversations={this.props.fetchAllConversations} />
          </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const currentUser = state.session.currentUser || {}
  return {
    conversations: state.entities.conversations,
    currentUser: currentUser,
    navBar: state.ui.toggleNavBar,
    posts: selectAllPosts(state) || {},
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    togglePostModal: () => dispatch(togglePostModal),
    toggleEditPostModal: (postId) => dispatch(toggleEditPostModal(postId)),
    deletePost: (id) => dispatch(deletePost(id)),
    toggleNavBar: (nav) => dispatch(toggleNavBar(nav)),
    fetchAllConversations: () => dispatch(fetchAllConversations()),
    toggleChat: () => dispatch(toggleChat),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainPage));
