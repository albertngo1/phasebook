import React from 'react';
import PostForm from './post_form';
import NavBar from './navbar';
import PostModal from '../modals/post_modal';
import EditPost from './edit_form';
import {NavLink, Link} from 'react-router-dom';
import FA from 'react-fontawesome';

class MainPage extends React.Component {

  constructor(props) {
    super(props);

    this.handleToggleEditModal = this.handleToggleEditModal.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  handleDelete(post) {
    this.props.deletePost(post);
  }

  handleToggleEditModal(postId) {
    this.props.toggleEditPostModal(postId);
  }

  render() {
    const {posts, currentUser, togglePostModal, toggleEditPostModal} = this.props;
    return (
      <div className="main-page-container">
        <header>
          <NavBar/>
        </header>
        <div className="main-page-content">

          <div className="main-page-left-nav">
            <div className="mp-left-nav-name">
              <Link to='/'>
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
              {posts.reverse().map(post => {
                return (
                  <li className="mp-newsfeed-post-item" key={`post-${post.id}`}>
                    <div className="mp-nf-pi-wrapper">
                      <div className="mp-nf-pi-header">
                        <div className="mp-nf-pi-name-header">
                          <div className="mp-nf-pi-name">
                            <Link to='/'>
                              {post.author}
                            </Link>
                          </div>
                          <div className="mp-nf-pi-dropdown">
                            <FA name='sort-down' className="mp-nf-pi-dropdown-btn" />
                            <div className="mp-nf-pi-dropdown-content">
                              <button onClick={() => this.handleToggleEditModal(post.id)}>Edit</button>
                              <button onClick={() => this.handleDelete(post.id)}>Delete</button>
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
                        <FA name='mail-forward' />
                        Share
                      </div>
                    </div>
                    <EditPost post={post}/>
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
