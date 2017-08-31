import React from 'react';
import {connect} from 'react-redux';
import { createComment } from '../../actions/comment_actions';
import FA from 'react-fontawesome';
import CommentIndex from './comment_index';
import { createLike, removeLike } from '../../actions/like_actions';

class CommentForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      body: "",
      post_id: this.props.post.id,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.focusCommentBody = this.focusCommentBody.bind(this);
    this.handleLike = this.handleLike.bind(this);
    this.handleUnlike = this.handleUnlike.bind(this);
  }

  handleLike(post) {
    const like = {like_item_id: post.id, like_item_type: "Post"}
    this.props.createLike(like);

  }

  handleUnlike(post) {
    let likeId;
    post.likes.forEach( like => {
      if (like.liker_id == this.props.currentUser.id) {
        likeId = like.id;
      }
    });
    this.props.deleteLike(likeId);
  }

  handleSubmit(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      const comment = Object.assign({}, this.state);
      this.props.createComment(comment).then(() => this.setState({body: ""}));
    }
  }

  focusCommentBody(post) {
    document.getElementById(`comment-${post.id}`).focus();
  }

  update(property) {
    return e => this.setState({[property]: e.currentTarget.value});
  }

  renderLikeButton(post) {
    const postLikes = post.likes.map( el => el.liker_id)
      if (postLikes.includes(this.props.currentUser.id)) {
        return(
          <div onClick={() => this.handleUnlike(this.props.post)} className="mp-nf-pi-footer-item">
            <FA name='thumbs-up' className='unlike' />
            Unlike
          </div>
        )
      } else {
        return(
          <div onClick={() => this.handleLike(this.props.post)} className="mp-nf-pi-footer-item">
            <FA name='thumbs-up' className='mp-nf-pi-footer-icon' />
            Like
          </div>
        )
      }
    }

  render() {
    return(
      <div>
        <div className="mp-nf-pi-footer">

          { !!this.props.post && this.renderLikeButton(this.props.post)}
          <div className="mp-nf-pi-footer-item" onClick={() => this.focusCommentBody(this.props.post)}>
            <FA name='comment' className='mp-nf-pi-footer-icon' />
            Comment
          </div>
        </div>
        {this.props.post.likes.length === 0 ?
          <div></div> :
            <div className="like-post-wrap">
              <div className="like-length-text">
                {this.props.post.likes.length}
              </div>
              <FA name="thumbs-o-up" />
            </div>
          }
        <CommentIndex post={this.props.post} />


          <div className="comment-form-wrap">
            <img className="comment-img" src={this.props.currentUser.profile_pic} alt="profile-pic" />
            <form className="comment-form" onKeyPress={this.handleSubmit}>
              <textarea
                id={`comment-${this.props.post.id}`}
                className="comment-textbox"
                onChange={ this.update('body')}
                value={ this.state.body }
                placeholder="Write a comment..."></textarea>
            </form>

          </div>
      </div>
    )

  }


}


const mapStateToProps = state => ({
  currentUser: state.session.currentUser || {},
});

const mapDispatchToProps = dispatch => ({
  createComment: comment => dispatch(createComment(comment)),
  createLike: like => dispatch(createLike(like)),
  deleteLike: likeId => dispatch(removeLike(likeId))
});


export default connect(mapStateToProps, mapDispatchToProps)(CommentForm)
