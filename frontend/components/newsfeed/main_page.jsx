import React from 'react';
import { Link } from 'react-router-dom';
import PostForm from './post_form';

class MainPage extends React.Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchPosts();
  }


  handleClick(e) {
    this.props.logout();
  }


  render() {
        const { posts, currentUser, createPost } = this.props
        return(
          <div>
            <header>
              <div>{currentUser.first_name} {currentUser.last_name}</div>
              <button onClick={this.handleClick}>Log Out</button>
            </header>

            <br/>

            <div>
              <h1>All Posts</h1>
              <div>
                <PostForm currentUser={currentUser}
                  createPost={createPost}
                  authorId={currentUser.id} />
              </div>
              <ul>
                { posts.map( post => {
                  return (
                    <li key={post.id}>
                      <h1>{post.body}</h1>
                        <p>{post.author}</p>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        );
    }
}

export default MainPage;
