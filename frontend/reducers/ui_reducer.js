import { TOGGLE_POST_MODAL, TOGGLE_EDIT_POST_MODAL,
TOGGLE_EDIT_INTRO_MODAL, TOGGLE_CHAT, TOGGLE_NAVBAR } from '../actions/ui_actions';
import { RECEIVE_SEARCH } from '../actions/user_actions';
import _ from 'lodash';

const initialState = {
  togglePostModal: false,
  toggleEditPostModal: 0,
  toggleEditIntroModal: false,
  toggleChat: false,
  search: {},
  toggleNavBar: 0
}

const uiReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case TOGGLE_POST_MODAL:
      return Object.assign({}, state, {togglePostModal: !state.togglePostModal});
    case TOGGLE_EDIT_POST_MODAL:
      return Object.assign({}, state, {toggleEditPostModal: action.postId});
    case TOGGLE_EDIT_INTRO_MODAL:
      return Object.assign({}, state, {toggleEditIntroModal: !state.toggleEditIntroModal})
    case TOGGLE_CHAT:
      return Object.assign({}, state, {toggleChat: !state.toggleChat});
    case RECEIVE_SEARCH:
      newState = _.merge({}, state);
      newState.search = action.users;
      return newState;
    case TOGGLE_NAVBAR:
      newState = _.merge({}, state);
      if (newState.toggleNavBar === action.nav) {
        newState.toggleNavBar = 0;
      } else {
        newState.toggleNavBar = action.nav;
      }
      return newState;
    default:
      return state;
  }


}

export default uiReducer;
