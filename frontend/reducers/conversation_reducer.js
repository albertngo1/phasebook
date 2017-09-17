import {
  RECEIVE_MESSAGE,
  REMOVE_MESSAGE,
  RECEIVE_CONVERSATIONS,
  RECEIVE_CONVERSATION,
  REMOVE_CONVERSATION
} from '../actions/conversation_actions';
import _ from 'lodash'

const conversationState = {
  conversations: {},
  openChats: [],
  friends: {},
}

const conversationReducer = (state = conversationState, action) => {
  Object.freeze(state);
  let nextState;
  switch (action.type) {
    case RECEIVE_CONVERSATIONS:
      nextState = _.merge({}, state)
      nextState.conversations = action.conversations.conversations;
      nextState.friends = action.conversations.friends
      return nextState;
    case RECEIVE_CONVERSATION:
      nextState = _.merge({}, state)
      nextState = _.merge(nextState, {
        conversations: {
          [action.conversation[Object.keys(action.conversation)[0]].id]: action.conversation[Object.keys(action.conversation)[0]]
        }
      })
  nextState["openChats"].push(action.conversation[Object.keys(action.conversation)[0]]);
  if (nextState["openChats"].length > 3) {
    nextState["openChats"].shift();
  }
  return nextState;
  default:
  return state;
}
}





export default conversationReducer;
