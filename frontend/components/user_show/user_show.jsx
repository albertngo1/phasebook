import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { requestSingleUser } from '../../actions/user_actions';
import NavBar from '../navbar/navbar';
import { fetchPosts, deletePost } from '../../actions/post_actions';
import { selectAllPosts } from '../../util/selectors';
import { toggleChat } from '../../actions/ui_actions';
import { fetchAllConversations } from '../../actions/conversation_actions';
import PostModal from '../modals/post_modal';
import EditPost from '../newsfeed/edit_form';
import CommentForm from '../newsfeed/comment_form';
import PostShowForm from './user_show_form';
import UserHeader from './user_header';
import UserIntro from './user_intro';
import { Link } from 'react-router-dom';
import FriendList from './friend_list';
import FA from 'react-fontawesome';
import Chat from '../chat/chat';

class UserShow extends React.Component {

   constructor(props) {
      super(props);
      this.handleDelete = this.handleDelete.bind(this);
      this.sentPost = this.sentPost.bind(this);
   }

   handleDelete(post) {
     if (post.author_id === this.props.currentUser.id) {
      this.props.deletePost(post.id);
     }
   }

   componentDidMount() {
     this.props.requestSingleUser(this.props.match.params.userId)
      .then(this.props.fetchAllConversations())
      .then(this.props.fetchPosts(this.props.match.params.userId))
      .then(window.scrollTo(0, 0));
   }

   componentWillReceiveProps(nextProps) {
      if (this.props.match.params.userId !== nextProps.match.params.userId){
         this.props.requestSingleUser(nextProps.match.params.userId)
         .then(this.props.fetchPosts(nextProps.match.params.userId))
         .then(window.scrollTo(0, 0));
      }
   }

   viewOptions() {
      return this.props.match.params.userId == this.props.currentUser.id;
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
      const {user, posts, currentUser} = this.props

      return(
         <div className="pp-main-container">
             <NavBar toggleChat={this.props.toggleChat} conversations={this.props.conversations} />
            <div className="pp-container-wrap">
               <div className="pp-container">
                  <UserHeader user={user} currentUser={currentUser}/>

                  <div className="pp-lower-ctn">
                     <div className="pp-left-ctn-wrapper">
                        <UserIntro />
                        <FriendList user={user} currentUser={currentUser}/>

                     </div>
                  <div className="pp-page-feed">
                     <PostShowForm user={user}/>
                     <ul className="pp-posts-wrapper">
                        {this.props.posts.reverse().map(post => {
                           return (
                              <li className="mp-newsfeed-post-item" key={`post-${post.id}`}>
                                 <div className="mp-nf-pi-wrapper">
                                    <div className="mp-nf-pi-header">
                                       <div className="mp-nf-pi-name-header">
                                          {this.sentPost(post)}
                                       </div>
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
                                       {<EditPost post={post}/>}
                                    </div>
                                 </li>
                              )
                           })}
                        </ul>
                     </div>

                  </div>
               </div>

            </div>
              <Chat conversations={this.props.conversations} toggleChat={this.props.toggleChat} />
         </div>
      )
   }
}

const mapStateToProps = (state, ownProps) => {
   return {
      conversations: state.entities.conversations,
      user: state.entities.user || {},
      posts: selectAllPosts(state) || {},
      currentUser: state.session.currentUser || {},
   }
};

const mapDispatchToProps = dispatch => ({
   requestSingleUser: (userId) => dispatch(requestSingleUser(userId)),
   fetchPosts: (userId) => dispatch(fetchPosts(userId)),
   deletePost: (id) => dispatch(deletePost(id)),
   toggleChat: () => dispatch(toggleChat),
   fetchAllConversations: () => dispatch(fetchAllConversations()),
})






export default withRouter(connect(mapStateToProps,
   mapDispatchToProps)(UserShow));
