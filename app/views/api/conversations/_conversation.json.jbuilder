friend = conversation.creator.id == current_user.id ?
 conversation.recipient : conversation.creator

json.extract!(conversation, :id, :creator_id, :recipient_id)
json.set! :friend_id, friend.id
json.set! :friend, friend.full_name
json.set! :profile_pic_small, asset_path(friend.profile_pic.url(:small))
