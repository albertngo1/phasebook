import React from 'react';
import PostForm from './post_form';
import NavBar from './navbar';
import PostModal from '../modals/post_modal';
import EditPost from './edit_form';
import AdPage from './ad_page';
import CommentForm from './comment_form';
import Chat from '../chat/chat';
import LeftNav from './main_page_left_nav';
import {Link} from 'react-router-dom';
import FA from 'react-fontawesome';

class MainPage extends React.Component {

  constructor(props) {
    super(props);

    this.handleToggleEditModal = this.handleToggleEditModal.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.viewOptions = this.viewOptions.bind(this);
    this.filterPosts = this.filterPosts.bind(this);
    this.sentPost = this.sentPost.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    this.props.fetchPosts().then(this.props.fetchAllConversations());
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

  filterPosts(posts) {
    if (this.props.currentUser && this.props.currentUser.active_friends) {
      let filteredPosts = [];
      const friends = this.props.currentUser.active_friends || []
      posts.forEach(post => {
        if (post.receiver_id === this.props.currentUser.id) {
          filteredPosts.push(post);
        }

        for (let i = 0; i < friends.length; i++) {
          if (post.author_id === friends[i].id && !filteredPosts.includes(post)) {
            filteredPosts.push(post);
          }
        }

      });
      return filteredPosts;
    } else {
      return [];
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
    const filteredPosts = this.filterPosts(posts);
    return (
      <div className="mp-entire-wrapper">
        <div className="main-page-container">
          <header>
            <NavBar toggleChat={this.props.toggleChat} conversations={this.props.conversations}/>
          </header>
          <div className="main-page-content">
            {!!currentUser &&
              <LeftNav currentUser={currentUser} toggleChat={this.props.toggleChat}/>
            }

            <div className="main-page-newsfeed">
              <div>
                <PostModal/>
                <PostForm/>
              </div>
              <ul>
                {filteredPosts.reverse().map(post => {
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
              <AdPage />
              <Chat conversations={this.props.conversations}
                toggleChat={this.props.toggleChat}
                fetchConversations={this.props.fetchAllConversations} />
            </div>
          </div>

      </div>
    );
  }
}

export default MainPage;
