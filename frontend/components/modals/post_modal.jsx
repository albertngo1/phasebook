import React from 'react'
import { connect } from 'react-redux';
import { togglePost } from '../../actions/ui_actions';
import { createPost } from '../../actions/post_actions';

class PostModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      author_id: this.props.authorId,
      receiver_id: this.props.authorId
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleToggleModal = this.handleToggleModal.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const post = Object.assign({}, this.state);
    this.props.createPost(post).then(
      () => this.setState( {body: ""})
    );
  }
  handleChange() {
    return e => this.setState({ body: e.target.value });
  }

  handleToggleModal(e) {
    if (e.currentTarget === e.target) {
      e.stopPropagation();
      this.props.toggleModal();
    }
  }

  render() {
    debugger
    if (this.props.postModal) {
      return (
        <form className="form" onSubmit={ this.handleSubmit }>
          <div>Create a Post</div>

          <div className="textbox">
            <Link to='/' className="profile-page" />

            <textarea onChange={ this.update('body') }
              value={ this.state.body }
              className='form-items'
              placeholder={`What's on your mind, ${currentUser.first_name}`}>
            </textarea>
          </div>
           <button className="create-form-submit">Post</button>
        </form>
      )
    } else {
      return(<div></div>)
    }
  }
}

const mapStateToProps = state => {
  return {
    postModal: state.ui.togglePostModal,
    currentUser: state.session.currentUser || {},
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleModal: () => dispatch(togglePostModal),
    createPost: (post) => dispatch(createPost(post)),
  };
};




export default connect(mapStateToProps,
   mapDispatchToProps)(PostModal)
