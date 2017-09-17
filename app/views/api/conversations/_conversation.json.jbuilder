json.extract!(conversation, :id, :creator_id, :recipient_id)
json.set! :friend, conversation.creator.id == current_user.id ?
 conversation.recipient.full_name : conversation.creator.full_name
json.set! :friend_pic, conversation.creator.id == current_user.id ?
 asset_path(conversation.recipient.profile_pic.url) : asset_path(conversation.creator.profile_pic.url)
json.set! :last_message, conversation.messages.last.body
