import { connect } from 'react-redux';
import Splash from '../splash';
import { login } from "../../../actions/session_actions";


const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.session.errors,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    login: user => dispatch(login(user)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash)
