export const createMessage = message => {
  return $.ajax({
    url: `/api/conversations/${message.conversation_id}/messages`,
    method: 'POST',
    data: { message },
  });
};

export const deleteMessage = message => {
  return $.ajax({
    url: `/api/conversations/${message.conversationId}/messages/${message.id}`,
    method: 'DELETE',
  });
};

export const fetchAllConversations = () => {
  return $.ajax({
    url: '/api/conversations',
    method: 'GET',
  });
};

export const createConversation = conversation => {
  return $.ajax({
    url: '/api/conversations',
    method: 'POST',
    data: {conversation},
  })
}
