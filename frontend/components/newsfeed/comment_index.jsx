import React from 'react';
import {connect} from 'react-redux';
import {deleteComment} from '../../actions/comment_actions';
import { Link } from 'react-router-dom';
import FA from 'react-fontawesome';
import { createCommentLike, removeCommentLike } from '../../actions/like_actions';


class CommentIndex extends React.Component {

  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(commentId) {
    this.props.deleteComment(commentId);
  }

  handleLike(comment) {
    const like = {like_item_id: comment.id, like_item_type: "Comment"}
    this.props.createLike(like);

  }

  handleUnlike(comment) {
    let likeId;
    comment.likes.forEach( like => {
      if (like.liker_id == this.props.currentUser.id) {
        likeId = like.id;
      }
    });
    this.props.deleteLike(likeId);
  }

  renderLikeButton(comment) {
    const commentLikes = comment.likes.map( el => el.liker_id)
      if (commentLikes.includes(this.props.currentUser.id)) {
        return(
          <div onClick={() => this.handleUnlike(comment)} className="comment-like">
            Like
          </div>
        )
      } else {
        return(
          <div onClick={() => this.handleLike(comment)} className="comment-not-liked">
            Like
          </div>
        )
      }
    }

  render() {
    const {post, currentUser} = this.props;
    const comments = post.comments || [];
    return(
      <ul className="comment-wrapper-ul">
        {Object.keys(comments).map(el => {
          const comment = comments[el];
          return(
            <li key={`post-${post.id} comment-${comment.id}`}>
              <div className="comment-abd-wrap">
                <Link to={`/users/${comment.author_id}`}>
                <img className="comment-index-img" src={comment.profile_pic} alt="profile-pic" />
                </Link>
                <div className="comment-delete-wrap1">
                  <div className="comment-delete-wrap2">
                    {(comment.author_id === currentUser.id) &&
                      <FA className="comment-delete" onClick={() => this.handleDelete(comment.id)} name="window-close" />}
                  </div>
                </div>
                <div>
                  <div className="comment-sep-abd">
                    <div className="comment-body">
                      <Link to={`/users/${comment.author_id}`}>
                        <span className="comment-author">{comment.author}</span>
                      </Link>
                      <span>{comment.body}</span>
                    </div>
                  </div>
                  <div className="comment-date-like-wrap">
                    { !!comment && this.renderLikeButton(comment)}
                    {comment.likes.length === 0 ?
                      <div></div> :
                        <div className="like-post-wrap">
                          <div className="like-length-text">
                            {comment.likes.length}
                          </div>
                          <FA name="thumbs-o-up" />
                        </div>
                      }
                      <div className="comment-date">
                        {comment.posted_date}
                      </div>
                  </div>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    )
  }
}


const mapStateToProps = (state, {post})=> ({
  currentUser: state.session.currentUser || {},
  post,
});

const mapDispatchToProps = dispatch => ({
  deleteComment: commentId => dispatch(deleteComment(commentId)),
  createLike: like => dispatch(createCommentLike(like)),
  deleteLike: likeId => dispatch(removeCommentLike(likeId))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex)
