import { TOGGLE_POST_MODAL, TOGGLE_EDIT_POST_MODAL } from '../actions/ui_actions';
import _ from 'lodash';

const initialState = {
  togglePostModal: false,
  toggleEditPostModal: false,
}

const uiReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case TOGGLE_POST_MODAL:
      return Object.assign({}, state, {togglePostModal: !state.togglePostModal});
    case TOGGLE_EDIT_POST_MODAL:
      return Object.assign({}, state, {toggleEditPostModal: !state.toggleEditPostModal});
    default:
      return state;
  }


}

export default uiReducer;
