import { connect } from 'react-redux';
import Splash from '../splash';
import { signup, logout } from "../../../actions/session_actions";


const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.session.errors,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    signup: user => dispatch(signup(user)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash)
