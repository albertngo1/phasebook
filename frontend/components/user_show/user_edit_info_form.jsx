import React from 'react'
import { connect } from 'react-redux';
import { toggleEditIntroModal } from '../../actions/ui_actions';
import { updateUser } from '../../actions/user_actions';
import { Link, withRouter } from 'react-router-dom';
import FA from 'react-fontawesome';

class UserEditInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.currentUser.id,
      education: this.props.user.education || "",
      current_city: this.props.user.current_city || "",
      hometown: this.props.user.hometown || "",
      relationship: this.props.user.relationship || "",
      introduction: this.props.user.introduction || ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.handleToggleModal = this.handleToggleModal.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("user[id]", this.state.id);
    formData.append("user[education]", this.state.education);
    formData.append("user[current_city]", this.state.current_city);
    formData.append("user[hometown]", this.state.hometown);
    formData.append("user[relationship]", this.state.relationship);
    formData.append("user[introduction]", this.state.introduction);

    this.props.updateUser(formData, this.state.id).then(this.props.toggleEditIntroModal());
    document.body.classList.remove('modal-fixed');
  }


  handleToggleModal(e) {
    if (e.currentTarget === e.target) {
      e.stopPropagation();
      this.props.toggleEditIntroModal();
      document.body.classList.remove('modal-fixed');
    }
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  render() {
    const { currentUser } = this.props
    if (this.props.introModal) {
      document.body.classList.add('modal-fixed');
      return (
        <div onClick={ this.handleToggleModal } className="mp-nf-post-form-modal-wrapper">
          <form className="pp-edit-intro-form" onSubmit={ this.handleSubmit }>
            <div className="pp-edit-header">
              <h1>Customize your intro</h1>
              <FA className="pp-edit-header-x" onClick={this.handleToggleModal} name="window-close" />
            </div>
            <div className="pp-edit-image-wrap">
              <img src={"./assets/owl.png"} className="pp-edit-image" ></img>
              <p>Details you select will be <b>Public</b> and won't post to News Feed.</p>
            </div>
            <div className="pp-edit-input-wrap">
            <div className="pp-edit-input-second-wrap">
              <label>Introduction:</label>
              <textarea onChange={this.update('introduction')}
                value={this.state.introduction}>{this.state.introduction}</textarea>
            </div>
            <div className="pp-edit-input-second-wrap">
              <label>Education:</label>
              <textarea onChange={this.update('education')}
                value={this.state.education}></textarea>
            </div>
            <div className="pp-edit-input-second-wrap">
              <label>Current City:</label>
              <textarea onChange={this.update('current_city')}
                value={this.state.current_city}></textarea>
            </div>
            <div className="pp-edit-input-second-wrap">
              <label>Hometown:</label>
              <textarea onChange={this.update('hometown')}
                value={this.state.hometown}></textarea>
            </div>
            <div className="pp-edit-input-second-wrap">
              <label>Relationship:</label>
              <textarea onChange={this.update('relationship')}
                value={this.state.relationship}></textarea>
            </div>
            </div>
            <button className="mp-nf-post-modal-btn edit-intro-btn">Save</button>
          </form>
        </div>
      )} else {
        return(<div></div>)
      }
  }
}

const mapStateToProps = state => {
  return {
    introModal: state.ui.toggleEditIntroModal,
    user: state.entities.user || {},
    currentUser: state.session.currentUser || {},
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleEditIntroModal: () => dispatch(toggleEditIntroModal),
    updateUser: (formData, id) => dispatch(updateUser(formData, id)),
  };
};




export default withRouter(connect(mapStateToProps,
   mapDispatchToProps)(UserEditInfo));
