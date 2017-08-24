import { TOGGLE_POST_MODAL } from '../actions/ui_actions';
import _ from 'lodash';

const initialState = {
  togglePostModal: false
}

const uiReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case TOGGLE_POST_MODAL:
      return Object.assign({}, state, {togglePostModal: !state.togglePost});
    default:
      return state;
  }


}

export default uiReducer;
