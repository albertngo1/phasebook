import * as APIConversationUtil from '../util/conversation_api_util';

export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";
export const REMOVE_MESSAGE = "REMOVE_MESSAGE";
export const RECEIVE_CONVERSATIONS = "RECEIVE_CONVERSATIONS";
export const RECEIVE_CONVERSATION = "RECEIVE_CONVERSATION";
export const REMOVE_CONVERSATION = "REMOVE_CONVERSATION";

export const receiveMessage = message => ({
  type: RECEIVE_MESSAGE,
  message,
});

export const removeMessage = messageId => ({
  type: REMOVE_MESSAGE,
  messageId
})

export const receiveConversations = conversations => ({
  type: RECEIVE_CONVERSATIONS,
  conversations,
})

export const receiveConversation = conversation => ({
  type: RECEIVE_CONVERSATIONS,
  conversation,
})

export const removeConversation = conversationId => ({
  type: REMOVE_CONVERSATION,
  conversationId,
})

export const createMessage = message => dispatch => {
  return APIConversationUtil.createMessage(message)
    .then(message => dispatch(receiveMessage(message)))
};

export const deleteMessage = message => dispatch => {
  return APIConversationUtil.deleteMessage(message)
    .then(messageId => dispatch(removeMessage(messageId)))
};

export const fetchAllConversations = () => dispatch => {
  return APIConversationUtil.fetchAllConversations()
    .then(conversations => dispatch(receiveConversations(conversations)))
};

export const createConversation = conversation => dispatch => {
  return APIConversationUtil.createConversation(conversation)
    .then(conversation => dispatch(receiveConversation(conversation)))
};
