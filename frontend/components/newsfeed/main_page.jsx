import React from 'react';
import PostForm from './post_form';
import NavBar from './navbar';

class MainPage extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPosts();
  }
  render() {
        const { posts, currentUser, createPost } = this.props
        return(
          <div className="main-page-container">
            <header>
              <NavBar />
            </header>

            <div>
              <h1>All Posts</h1>
              <div>
                <PostForm currentUser={currentUser}
                  createPost={createPost}
                  authorId={currentUser.id} />
              </div>
              <ul>
                { posts.reverse().map( post => {
                  return (
                    <li key={post.id}>
                      <p>{post.author}</p>
                      <h1>{post.body}</h1>
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
