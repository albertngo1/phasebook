import React from 'react';
import {connect} from 'react-redux';
import { createComment } from '../../actions/comment_actions';

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
  }

  handleSubmit(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      const comment = Object.assign({}, this.state);
      this.props.createComment(comment).then(() => this.setState({body: ""}));
    }
  }

  update(property) {
    return e => this.setState({[property]: e.currentTarget.value});
  }

  render() {
    return(
      <form className="comment-form" onKeyPress={this.handleSubmit}>
        <textarea
          className="comment-textbox"
          onChange={ this.update('body')}
          value={ this.state.body }
          placeholder="Write a comment..."></textarea>
      </form>
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
