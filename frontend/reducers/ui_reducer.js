import { TOGGLE_POST_MODAL, TOGGLE_EDIT_POST_MODAL,
TOGGLE_POST_SHOW_MODAL } from '../actions/ui_actions';
import _ from 'lodash';

const initialState = {
  togglePostModal: false,
  toggleEditPostModal: 0,
  togglePostShowModal: false,
}

const uiReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case TOGGLE_POST_MODAL:
      return Object.assign({}, state, {togglePostModal: !state.togglePostModal});
    case TOGGLE_EDIT_POST_MODAL:
      return Object.assign({}, state, {toggleEditPostModal: action.postId});
    case TOGGLE_POST_SHOW_MODAL:
      return Object.assign({}, state, {togglePostShowModal: !state.togglePostShowModal})
    default:
      return state;
  }


}

export default uiReducer;
