import { TOGGLE_POST_MODAL, TOGGLE_EDIT_POST_MODAL,
TOGGLE_EDIT_INTRO_MODAL } from '../actions/ui_actions';
import _ from 'lodash';

const initialState = {
  togglePostModal: false,
  toggleEditPostModal: 0,
  toggleEditIntroModal: false,
}

const uiReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case TOGGLE_POST_MODAL:
      return Object.assign({}, state, {togglePostModal: !state.togglePostModal});
    case TOGGLE_EDIT_POST_MODAL:
      return Object.assign({}, state, {toggleEditPostModal: action.postId});
    case TOGGLE_EDIT_INTRO_MODAL:
      return Object.assign({}, state, {toggleEditIntroModal: !state.toggleEditIntroModal})
    default:
      return state;
  }


}

export default uiReducer;
