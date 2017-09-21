import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { togglePostModal } from '../../actions/ui_actions';
import FA from 'react-fontawesome';

class PostForm extends React.Component {

  render() {
    const { currentUser, togglePostModal, postModal } = this.props

        return(
          <form className="mp-nf-post-form">
            <div className="mp-nf-create-post-wrap"
              onClick={togglePostModal}>
              <FA className="mp-nf-pencil" name='pencil' />
              <span className="mp-nf-create-post">Create a Post</span>
            </div>
            <div className="mp-nf-post-text-wrap">
              <Link to={`/users/${currentUser.id}`}>
              <img className="mp-nf-post-text-img" src={currentUser.profile_pic_small} alt="profile-pic" />
              </Link>
              <textarea onClick={togglePostModal}
                className='mp-nf-post-text'
                placeholder={`What's on your mind, ${currentUser.first_name}?`
              }></textarea>
            </div>
          </form>
        )
  }

}

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser || {},
    postModal: state.ui.togglePostModal,
  }
};

const mapDispatchToProps = dispatch => ({
  togglePostModal: () => dispatch(togglePostModal),
});



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostForm));
