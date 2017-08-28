json.extract!(user, :id, :email, :first_name, :last_name,
:education, :current_city, :hometown, :relationship, :introduction)
json.set! :image_url, asset_path(user.profile_pic.url)
json.set! :active_friends, user.active_friends
json.set! :pending_requests, user.received_friend_requests
json.set! :sent_requests, user.sent_friend_requests
