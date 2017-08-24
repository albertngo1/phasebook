import React from 'react'
import { connect } from 'react-redux';
import { togglePostModal, toggleCloseModal } from '../../actions/ui_actions';
import { createPost } from '../../actions/post_actions';
import { Link, withRouter } from 'react-router-dom';
import FA from 'react-fontawesome';

class PostModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      author_id: this.props.currentUser.id,
      receiver_id: this.props.currentUser.id
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
    ).then(this.props.toggleCloseModal());
  }
  handleChange() {
    return e => this.setState({ body: e.target.value });
  }

  handleToggleModal(e) {
    if (e.currentTarget === e.target) {
      e.stopPropagation();
      this.props.toggleCloseModal();
    }
  }

  update(property) {
    return e => this.setState({[property]: e.currentTarget.value});
  }

  render() {
    const { currentUser } = this.props
    if (this.props.postModal) {
      return (
        <div onClick={ this.handleToggleModal }
          className="mp-nf-post-form-modal-wrapper">
          <form className="mp-nf-post-modal" onSubmit={ this.handleSubmit }>
            <div className="mp-nf-create-post-wrap">
              <FA className="mp-nf-pencil" name='pencil' />
              <span className="mp-nf-create-post">Create a Post</span>

            </div>

            <div className="mp-nf-post-text-wrap">
              <Link to='/' />

              <textarea onChange={ this.update('body') }
                value={ this.state.body }
                className='form-items'
                placeholder={`What's on your mind, ${currentUser.first_name}?`}
                autoFocus='autofocus'
                className='mp-nf-post-text'>
              </textarea>
            </div>
            <button className="mp-nf-post-modal-btn">Post</button>
          </form>
        </div>
      )} else {
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
    toggleCloseModal: () => dispatch(togglePostModal),
    createPost: (post) => dispatch(createPost(post)),
  };
};




export default withRouter(connect(mapStateToProps,
   mapDispatchToProps)(PostModal));
