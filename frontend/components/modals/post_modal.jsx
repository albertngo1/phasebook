import React from 'react'
import { connect } from 'react-redux';
import { togglePostModal } from '../../actions/ui_actions';
import { createPost } from '../../actions/post_actions';
import { Link, withRouter } from 'react-router-dom';
import FA from 'react-fontawesome';

class PostModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      imageFile: null,
      imageUrl: null,
      receiver_id: this.props.currentUser.id
    };
    this.handleEnterSubmit = this.handleEnterSubmit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleToggleModal = this.handleToggleModal.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }

  updateFile(e) {
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ imageFile: file, imageUrl: fileReader.result });
    }

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleEnterSubmit(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      let formData = new FormData();
      formData.append("post[body]", this.state.body);
      formData.append("post[receiver_id]", this.state.receiver_id);
      if (this.state.imageFile) {
        formData.append("post[image]", this.state.imageFile);
      }
      this.props.createPost(formData).then(
        () => this.setState( {body: "", imageFile: null, imageUrl: null})
      ).then(this.props.toggleCloseModal());
      document.body.classList.remove('modal-fixed');
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append("post[body]", this.state.body);
    formData.append("post[receiver_id]", this.state.receiver_id);
    if (this.state.imageFile) {
      formData.append("post[image]", this.state.imageFile);
    }
    this.props.createPost(formData).then(
      () => this.setState( {body: "", imageFile: null, imageUrl: null})
    ).then(this.props.toggleCloseModal());
    document.body.classList.remove('modal-fixed');
  }


  handleToggleModal(e) {
    if (e.currentTarget === e.target) {
      e.stopPropagation();
      this.props.toggleCloseModal();
      document.body.classList.remove('modal-fixed');
    }
  }

  update(property) {
    return e => this.setState({[property]: e.currentTarget.value});
  }

  render() {
    const { currentUser } = this.props
    if (this.props.postModal) {
      document.body.classList.add('modal-fixed');
      return (
        <div onClick={ this.handleToggleModal } className="mp-nf-post-form-modal-wrapper">
          <form className="mp-nf-post-modal" onSubmit={ this.handleSubmit }
            onKeyPress={this.handleEnterSubmit}>
            <div className="mp-nf-create-post-wrap">
              <FA className="mp-nf-pencil" name='pencil' />
              <span className="mp-nf-create-post">Create a Post</span>

                <div className="mp-nf-pic-upload-wrapper">
                    <label htmlFor="mp-nf-pic-upload">
                        <FA name="file-photo-o" className="mp-nf-pic"/>
                        <div>Add Picture</div>
                    </label>

                    <input id="mp-nf-pic-upload"
                       type="file" onChange={this.updateFile} />
                </div>
            </div>

            <div className="mp-nf-post-text-wrap">
              <Link to={`/users/${currentUser.id}`}>
              <img className="mp-nf-post-modal-img" src={currentUser.profile_pic_small} alt="profile-pic" />
              </Link>
              <textarea onChange={ this.update('body') }
                value={ this.state.body }
                placeholder={`What's on your mind, ${currentUser.first_name}?`}
                autoFocus='autofocus'
                className='mp-nf-post-modal-txt'></textarea>
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
    createPost: (formData) => dispatch(createPost(formData)),
  };
};




export default withRouter(connect(mapStateToProps,
   mapDispatchToProps)(PostModal));
