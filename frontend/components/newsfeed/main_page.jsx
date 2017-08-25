import React from 'react';
import PostForm from './post_form';
import NavBar from './navbar';
import PostModal from '../modals/post_modal';
import EditPost from './edit_form';
import { NavLink, Link } from 'react-router-dom';
import FA from 'react-fontawesome';

class MainPage extends React.Component {

  constructor(props) {
    super(props);

    this.handleDropDown = this.handleDropDown.bind(this);
    this.handleToggleEditModal = this.handleToggleEditModal.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.fetchPosts();
  }


  handleDropDown(e) {
    e.preventDefault();
    const nextState = !this.state.open;
    this.setState({open: nextState});
  }

  handleDelete(post) {
    this.props.deletePost(post);
  }

  handleToggleEditModal(postId) {
    this.props.toggleEditPostModal(postId);
  }

  render() {
    const {posts, currentUser, togglePostModal,
      toggleEditPostModal} = this.props;
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
          <NavLink to="/"
            className="mp-left-nav-newsfeed"
            activeStyle={{
              fontWeight: 'bold',
              color: 'black'
             }}>
             <span className="mp-left-nav-newsfeed-item-1"><FA
               name="newspaper-o" size='lg' /></span>
             <span>
              News Feed</span>
           </NavLink>
        </div>

        <div className="main-page-newsfeed">
          <div>
            <PostModal />
            <PostForm />
          </div>
          <ul>
            {posts.reverse().map(post => {
              return (
                <li className="mp-newsfeed-post-item" key={`post-${post.id}`}>
                  <div>{post.author}</div>
                  <div>{post.posted_date}</div>
                  <div>{post.body}</div>
                  <div>

                    <EditPost post={post} />
                    <button onClick={() => this.handleToggleEditModal(post.id)}>Edit</button>

                    <button onClick={() => this.handleDelete(post.id)}>Delete</button>
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
