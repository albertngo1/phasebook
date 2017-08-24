import { connect } from 'react-redux';
import Splash from './splash';
import { signup, login } from "../../actions/session_actions";


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
