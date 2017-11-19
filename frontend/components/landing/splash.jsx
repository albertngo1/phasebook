import React from 'react';
import NewUserForm from './new_user_form';
import SessionForm from './session_form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup, login } from "../../actions/session_actions";



const Splash = ({ loggedIn, errors, login, signup}) => {

  window.scrollTo(0, 0)

  return(
    <div>
      <header className="landing-header">
        <Link to="/" className='landing-logo-link'>
          <h2 className="landing-logo">phasebook</h2>
        </Link>
        <SessionForm loggedIn={ loggedIn }
          errors={errors}
          login={login}/>
      </header>

      <div className="splash-background">
        <div className="splash-static">
          <div className="splash-static-cmt-1">Connect with friends and the
world around you on Phasebook.</div>
          <div className="splash-static-cmt-2">
            <img className="splash-imgs" src="https://s3.us-east-2.amazonaws.com/phasebook-dev/pic1.png"></img>
            <span className="splash-static-cmt-2-bold">See photos and updates</span>
            <span className="splash-static-cmt-2-reg">from friends in News Feed.</span>
          </div>
          <div className="splash-static-cmt-2">
            <img className="splash-imgs" src="https://s3.us-east-2.amazonaws.com/phasebook-dev/pic2.png"></img>
            <span className="splash-static-cmt-2-bold">Share what's new</span>
            <span className="splash-static-cmt-2-reg">in your life on your Timeline.</span>
          </div>
          <div className="splash-static-cmt-2">
            <img className="splash-imgs" src="https://s3.us-east-2.amazonaws.com/phasebook-dev/pic3.png"></img>
            <span className="splash-static-cmt-2-bold">Find more</span>
            <span className="splash-static-cmt-2-reg">of what you're looking for with Facebook Search.</span>
          </div>
        </div>

        <NewUserForm loggedIn={ loggedIn }
          errors={errors}
          signup={signup}/>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.session.errors,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signup: user => dispatch(signup(user)),
    login: user => dispatch(login(user)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash)
