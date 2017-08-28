import React from 'react';
import {connect} from 'react-redux';
import {selectPostComments} from '../../util/selectors';
import {fetchPostComments} from '../../actions/comment_actions';
import { Link } from 'react-router-dom';
import FA from 'react-fontawesome';

class CommentIndex extends React.Component {

  constructor(props) {
    super(props);

    this.filteredComments = this.filteredComments.bind(this);
  }

  componentDidMount() {
    this.props.fetchPostComments(this.props.post.id)
  }

  handleDelete(commentId) {
    this.props.deleteComment(commentId);
  }

  filteredComments(comments) {
    let filteredComments = [];
    comments.forEach( comment => {
      if (comment.post_id === this.props.post.id) {
        filteredComments.push(comment);
      }
    })
    return filteredComments;
  }

  render() {
    const {post, currentUser, comments} = this.props
    const filteredComments = this.filteredComments(comments);

    return(
      <div>
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
      <ul className="comment-wrapper-ul">

        {filteredComments.map(comment => {
          return(
            <li key={`post-${post.id} comment-${comment.id}`}>
              <div className="comment-sep-abd">
                <div className="comment-author">
                  <Link to={`/users/${comment.author_id}`}>
                    <spav>{comment.author}</spav>
                  </Link>
                </div>
                <div className="comment-body">
                  <span>{comment.body}</span>
                </div>
              </div>
              <div className="comment-date">
                {comment.posted_date}
              </div>
            </li>
          )
        })}
      </ul>
      </div>
    )
  }
}


const mapStateToProps = (state, {post})=> ({
  comments: selectPostComments(state) || {},
  currentUser: state.session.currentUser || {},
  post,
});

const mapDispatchToProps = dispatch => ({
  fetchPostComments: postId => dispatch(fetchPostComments(postId)),
  deleteComment: commentId => dispatch(deleteComment(commentId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex)
