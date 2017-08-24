import React from 'react';
import PostForm from './post_form';
import NavBar from './navbar';
import PostModal from '../modals/post_modal';
import { NavLink, Link } from 'react-router-dom';
import FA from 'react-fontawesome';

class MainPage extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPosts();
  }
  render() {
    const {posts, currentUser, togglePostModal} = this.props
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
          <div className="mp-newsfeed-post-form">
            <PostModal />
            <PostForm />
          </div>
          <ul>
            {posts.reverse().map(post => {
              return (
                <li className="mp-newsfeed-post-item" key={post.id}>
                  <p>{post.author}</p>
                  <h1>{post.body}</h1>
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
