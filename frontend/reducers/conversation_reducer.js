import { RECEIVE_MESSAGE, REMOVE_MESSAGE, RECEIVE_CONVERSATIONS,
RECEIVE_CONVERSATION, REMOVE_CONVERSATION } from '../actions/conversation_actions';
import _ from 'lodash'

const conversationState = {
   conversations: {},
   openChats: [],
}

const conversationReducer = (state = conversationState, action) => {
   Object.freeze(state);
   let nextState;
   switch(action.type) {
     case RECEIVE_CONVERSATIONS:
      return _.merge({}, state, { conversations: action.conversations });
     case RECEIVE_CONVERSATION:
         nextState = _.merge({}, state, {conversations: {[action.conversation[Object.keys(action.conversation)[0]].id]: action.conversation[Object.keys(action.conversation)[0]]}})
         if (nextState["openChats"].length > 3) {
            nextState.shift();
         }
         nextState["openChats"].push(action.conversation[Object.keys(action.conversation)[0]]);
      return nextState;
    default:
       return state;
   }
}





export default conversationReducer;
