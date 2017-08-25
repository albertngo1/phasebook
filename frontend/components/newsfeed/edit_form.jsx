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
    document.body.classList.remove('modal-fixed');
  }

  update(property) {
    return e => this.setState({[property]: e.currentTarget.value});
  }

  handleToggleModal(e) {
    if (e.currentTarget === e.target) {
      e.stopPropagation();
      this.props.toggleEditPostModal(0);
      document.body.classList.remove('modal-fixed');
    }
  }

  render() {
    if (this.props.postModal === this.props.post.id) {
      document.body.classList.add('modal-fixed');
      return (
        <div onClick={this.handleToggleModal} className="mp-nf-edit-form-modal-wrapper">
          <form className="mp-nf-edit-modal" onSubmit={this.handleSubmit}>
            <div className="mp-nf-edit-post-wrap">
              <span className="mp-nf-edit-post">Edit Post</span>
            </div>

            <div className="mp-nf-edit-post-text-wrap">
              <textarea className='mp-nf-edit-post-modal-txt' onChange={this.update('body')} value={this.state.body} autoFocus='autofocus'></textarea>
            </div>
            <input className="mp-nf-edit-post-modal-btn" type="submit" value="Save"/>
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
