import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { togglePostModal } from '../../actions/ui_actions';

class PostForm extends React.Component {

  render() {
    const { currentUser, togglePostModal } = this.props
    return(
      <form className="form">
        <div>Create a Post</div>

        <div className="textbox">
          <Link to='/' className="profile-page" />

          <textarea onClick={togglePostModal}
            className='form-items'
            placeholder={`What's on your mind, ${currentUser.first_name}`}>
          </textarea>
        </div>
      </form>
    )
  }

}

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser || {},
  }
};

const mapDispatchToProps = dispatch => ({
  togglePostModal: () => dispatch(togglePostModal),
});



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostForm));
