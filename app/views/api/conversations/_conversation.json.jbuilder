json.extract!(conversation, :id, :creator_id, :recipient_id)
json.set! :creator, conversation.creator
json.set! :recipient, conversation.recipient
json.set! :last_message, conversation.messages.last
