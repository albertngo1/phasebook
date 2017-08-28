import React from 'react';
import {connect} from 'react-redux';
import { createComment } from '../../actions/comment_actions';
import FA from 'react-fontawesome';

class CommentForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      body: "",
      post_id: this.props.post.id,
      author_id:  this.props.currentUser.id
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.focusCommentBody = this.focusCommentBody.bind(this);
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

  render() {
    return(
      <div>
        <div className="mp-nf-pi-footer">
          <div className="mp-nf-pi-footer-item">
            <FA name='thumbs-up' className='mp-nf-pi-footer-icon' />
            Like
          </div>
          <div className="mp-nf-pi-footer-item" onClick={() => this.focusCommentBody(this.props.post)}>
            <FA name='comment' className='mp-nf-pi-footer-icon' />
            Comment
          </div>
          <div className="mp-nf-pi-footer-item">
            <FA name='mail-forward' className='mp-nf-pi-footer-icon' />
            Share
          </div>
        </div>
        <form className="comment-form" onKeyPress={this.handleSubmit}>
          <textarea
            id={`comment-${this.props.post.id}`}
            className="comment-textbox"
            onChange={ this.update('body')}
            value={ this.state.body }
            placeholder="Write a comment..."></textarea>
        </form>
      </div>
    )

  }


}


const mapStateToProps = state => ({
  currentUser: state.session.currentUser || {},
});

const mapDispatchToProps = dispatch => ({
  createComment: comment => dispatch(createComment(comment)),
});


export default connect(mapStateToProps, mapDispatchToProps)(CommentForm)
