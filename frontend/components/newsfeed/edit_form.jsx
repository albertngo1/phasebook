import React from 'react';
import {connect} from 'react-redux';
import {toggleEditPostModal} from '../../actions/ui_actions';
import {updatePost} from '../../actions/post_actions';

class EditPost extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      body: this.props.post.body,
      author_id: this.props.currentUser.id,
      receiver_id: this.props.currentUser.id,
      id: this.props.post.id
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleToggleModal = this.handleToggleModal.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const post = Object.assign({}, this.state);
    this.props.updatePost(post).then(() => this.props.toggleEditPostModal(0));
  }

  update(property) {
    return e => this.setState({[property]: e.currentTarget.value});
  }

  handleToggleModal(e) {
    if (e.currentTarget === e.target) {
      e.stopPropagation();
      this.props.toggleCloseModal();
    }
  }

  render() {
    if (this.props.postModal === this.props.post.id) {

      return (
        <div onClick={this.handleToggleModal}>
          <form onSubmit={this.handleSubmit}>
            <div>
              <span>Edit Post</span>
            </div>

            <div>
              <textarea onChange={this.update('body')} value={this.state.body} autoFocus='autofocus'></textarea>
            </div>
            <input type="submit" value="Save"/>
          </form>
        </div>
      )
    } else {
      return (
        <div></div>
      )
    }
  }
}

const mapStateToProps = state => ({
  postModal: state.ui.toggleEditPostModal,
  currentUser: state.session.currentUser || {}
});

const mapDispatchToProps = dispatch => ({
  toggleEditPostModal: (postId) => dispatch(toggleEditPostModal(postId)),
  updatePost: (post) => dispatch(updatePost(post))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);
