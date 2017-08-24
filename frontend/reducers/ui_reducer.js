import { TOGGLE_POST_MODAL, TOGGLE_FRIEND_REQUEST_DROPDOWN,
TOGGLE_MESSAGES_DROPDOWN, TOGGLE_NOTIFICATIONS_DROPDOWN,
TOGGLE_HELP_DROPDOWN } from '../actions/ui_actions';
import _ from 'lodash';

const initialState = {
  togglePostModal: false,
  toggleFriendRequestDropdown: false,
  toggleMessagesDropdown: false,
  toggleNotificationsDropdown: false,
  toggleHelpDropdown: false,
}

const uiReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case TOGGLE_POST_MODAL:
      return Object.assign({}, state, {togglePostModal: !state.togglePostModal});
    case TOGGLE_FRIEND_REQUEST_DROPDOWN:
      return Object.assign({}, state,
         {toggleFriendRequestDropdown: !state.toggleFriendRequestDropdown,
         toggleMessagesDropdown: false, toggleNotificationsDropdown: false,
         toggleHelpDropdown: false})
    case TOGGLE_MESSAGES_DROPDOWN:
      return Object.assign({}, state,
         {toggleMessagesDropdown: !state.toggleMessagesDropdown,
         toggleFriendRequestDropdown: false, toggleNotificationsDropdown: false,
         toggleHelpDropdown: false })
    case TOGGLE_NOTIFICATIONS_DROPDOWN:
      return Object.assign({}, state,
         {toggleNotificationsDropdown: !state.toggleNotificationsDropdown,
         toggleFriendRequestDropdown: false, toggleMessagesDropdown: false,
         toggleHelpDropdown: false})
    case TOGGLE_HELP_DROPDOWN:
      return Object.assign({}, state, {toggleHelpDropdown: !state.toggleHelpDropdown,
      toggleFriendRequestDropdown: false, toggleMessagesDropdown: false,
      toggleNotificationsDropdown: false})
    default:
      return state;
  }


}

export default uiReducer;
