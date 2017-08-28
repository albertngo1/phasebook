import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { requestSingleUser } from '../../actions/user_actions';
import NavBar from '../newsfeed/navbar';
import { fetchPosts, deletePost } from '../../actions/post_actions';
import { selectAllPosts } from '../../util/selectors';
import { toggleEditIntroModal } from '../../actions/ui_actions';
import PostModal from '../modals/post_modal';
import EditPost from '../newsfeed/edit_form';
import CommentForm from '../newsfeed/comment_form';
import CommentIndex from '../newsfeed/comment_index';
import PostShowForm from './user_show_form';
import UserEditInfo from './user_edit_info_form';
import UserInfo from './user_edit_info';
import { Link } from 'react-router-dom';
import FA from 'react-fontawesome';

class UserShow extends React.Component {

   constructor(props) {
      super(props);
      this.filterPosts = this.filterPosts.bind(this);
      this.handleDelete = this.handleDelete.bind(this);
      this.sentPost = this.sentPost.bind(this);
   }

   filterPosts(posts) {
      let filteredPosts = [];
      posts.forEach( post => {
        if (post.receiver_id === this.props.user.id) {
          filteredPosts.push(post);
        }
      })
      return filteredPosts;
   }

   handleDelete(post) {
     if (post.author_id === this.props.currentUser.id) {
      this.props.deletePost(post.id);
     }
   }

   componentDidMount() {
      this.props.requestSingleUser(this.props.match.params.userId);
      this.props.fetchPosts();
   }

   componentWillReceiveProps(nextProps) {
      if (this.props.match.params.userId !== nextProps.match.params.userId){
         this.props.requestSingleUser(nextProps.match.params.userId);
      }
   }

   viewOptions() {
      return this.props.match.params.userId == this.props.currentUser.id;
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
      const {user, posts, currentUser} = this.props
      const filteredPosts = this.filterPosts(posts);
      return(
         <div className="pp-main-container">
            <header>
               <NavBar />
            </header>
            <div className="pp-container">

              <div className="pp-header">
                 <div className="pp-profile-pic"></div>
                 <div className="pp-header-name">{user.first_name} {user.last_name}</div>
                 <div className="pp-cover-page">

                 <div className="pp-header-items">
                    <div className="pp-header-timeline">Timeline</div>
                    <div className="pp-header-about">About</div>
                    <div className="pp-header-friends">Friends</div>
                 </div>
              </div>
           </div>

           <div className="pp-lower-ctn">
              <div className="pp-left-container">
                 <div className="pp-left-intro-ctn">
                    <div className="pp-left-globe-wrapper">
                     <FA size='lg' name="globe" className="pp-left-globe"/>
                    </div>
                    <div className="pp-left-intro">Intro</div>
                    <div className="pp-left-intro-edit-wrap">
                       {this.viewOptions() && <FA name="pencil-square"
                          className="pp-left-intro-edit"
                          onClick={this.props.toggleEditIntroModal} />
                        }
                    </div>
                 </div>

                 <UserInfo />
                 <UserEditInfo />
                 <div className="pp-left-friends">

                 </div>
              </div>


               <div className="pp-page-feed">
            <div>
              <PostShowForm user={user}/>
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
      )
   }
}

const mapStateToProps = (state, ownProps) => {
   return {
      user: state.entities.user || {},
      posts: selectAllPosts(state) || {},
      currentUser: state.session.currentUser || {},
   }
};

const mapDispatchToProps = dispatch => ({
   requestSingleUser: (userId) => dispatch(requestSingleUser(userId)),
   fetchPosts: () => dispatch(fetchPosts()),
   deletePost: (id) => dispatch(deletePost(id)),
   toggleEditIntroModal: () => dispatch(toggleEditIntroModal),
})






export default withRouter(connect(mapStateToProps,
   mapDispatchToProps)(UserShow));