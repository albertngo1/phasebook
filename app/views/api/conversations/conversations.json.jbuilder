json.conversations do
  @conversations.each do |conversation|
    json.set! conversation.id do
      json.partial!('api/conversations/conversation', conversation: conversation)
      json.messages conversation.messages
    end
  end
end

json.friends do
  @friends.each do |friend|
    next if friend.id == current_user.id
    json.set! friend.id do
      json.set! :friend_id, friend.id
      json.set! :friend, friend.full_name
      json.set! :profile_pic_small, friend.profile_picture.variant(resize: "50x50").service_url
    end
  end
end
