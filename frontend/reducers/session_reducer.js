import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session/session_actions';

const _nullUser = {
  currentUser: null,
  errors: [],
}

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state)

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, {currentUser: action.currentUser});
    case RECEIVE_ERRORS:
      return Object.assign({}, state, {errors: action.errors})
    default:
      return state;
  }
}

export default sessionReducer;
