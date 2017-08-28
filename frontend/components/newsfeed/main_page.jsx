import React from 'react';
import PostForm from './post_form';
import NavBar from './navbar';
import PostModal from '../modals/post_modal';
import EditPost from './edit_form';
import CommentForm from './comment_form';
import CommentIndex from './comment_index';
import {NavLink, Link} from 'react-router-dom';
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
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps) {
     if (this.props.match.params.userId !== nextProps.match.params.userId){
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
     let filteredPosts = [];
     posts.forEach( post => {
       if (post.receiver_id === this.props.currentUser.id) {
         filteredPosts.push(post);
       }
     })
     return filteredPosts;
  }

  viewOptions(post) {
    return post.author_id === this.props.currentUser.id;
  }

  sentPost(post) {
    if (post.author_id === post.receiver_id) {
      return(
        <div className="mp-nf-pi-name">
          <Link to={`/users/${post.author_id}`}>
            {post.author}
          </Link>
        </div>
      )
    } else {
    return(
      <div className="mp-nf-pi-name">
        <div className="mp-nf-pi-name-wrap">
              <Link to={`/users/${post.author_id}`}>
                 <label>
                    {post.author}
                 </label>
              </Link>
              <FA className="caret" name="caret-right" />
              <Link to={`/users/${post.receiver_id}`}>
                 <label>
                    {post.receiver}
                 </label>
              </Link>
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
      <div className="main-page-container">
        <header>
          <NavBar/>
        </header>
        <div className="main-page-content">
          <div className="main-page-left-nav">
            <div className="mp-left-nav-name">
              <Link to={`/users/${filteredPosts.author_id}`}>
                <div className="mp-left-nav-name-pic"></div>
                <div className="mp-left-nav-name-title">
                  {`${currentUser.first_name} ${currentUser.last_name}`}
                </div>
              </Link>
            </div>
            <NavLink to="/" className="mp-left-nav-newsfeed" activeStyle={{
              fontWeight: 'bold',
              color: 'black'
            }}>
              <span className="mp-left-nav-newsfeed-item-1"><FA name="newspaper-o" size='lg'/></span>
              <span>
                News Feed</span>
            </NavLink>
          </div>

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
                        <div className="mp-nf-pi-name-header">
                          {this.sentPost(post)}
                          <div className="mp-nf-pi-dropdown">
                            <FA name='sort-down' className="mp-nf-pi-dropdown-btn" />
                            <div className="mp-nf-pi-dropdown-content">
                              <button onClick={() => this.handleToggleEditModal(post)}>Edit</button>
                              <button onClick={() => this.handleDelete(post)}>Delete</button>
                            </div>
                          </div>
                        </div>
                        <div className="mp-nf-pi-header-misc">
                          <div className="mp-nf-pi-date">{post.posted_date}</div>
                          <div className="mp-nf-pi-separator">·</div>
                          <FA name="globe" className="mp-nf-pi-globe"/>
                        </div>
                      </div>
                      <div className="mp-nf-pi-body">{post.body}</div>

                    </div>
                    <div className="mp-nf-pi-footer">
                      <div className="mp-nf-pi-footer-item">
                        <FA name='thumbs-up' className='mp-nf-pi-footer-icon' />
                        Like
                      </div>
                      <div className="mp-nf-pi-footer-item">
                        <FA name='comment' className='mp-nf-pi-footer-icon' />
                        Comment
                      </div>
                      <div className="mp-nf-pi-footer-item">
                        <FA name='mail-forward' className='mp-nf-pi-footer-icon' />
                        Share
                      </div>
                    </div>
                    <div >
                      <CommentIndex post={post} />
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
          <div className="main-page-ad"></div>
        </div>
      </div>
    );
  }
}

export default MainPage;
