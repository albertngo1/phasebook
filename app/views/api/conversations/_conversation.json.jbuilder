json.extract!(conversation, :id, :creator_id, :recipient_id)
json.set! :creator, conversation.creator.full_name
json.set! :creator_pic, asset_path(conversation.creator.profile_pic.url)
json.set! :recipient, conversation.recipient.full_name
json.set! :recipient_pic, asset_path(conversation.recipient.profile_pic.url)
json.set! :last_message, conversation.messages.last.body
