json.extract!(friendship, :id, :user1_id, :user2_id, :status)
json.set! :friender, friendship.friender.full_name
json.set! :friendee, friendship.friendee.full_name
