json.extract!(user, :id, :email, :first_name, :last_name,
:education, :current_city, :hometown, :relationship, :introduction)
json.set! :cover_page, asset_path(user.cover_page.url(:large))
json.set! :active_friends, user.active_friends
json.set! :sent_friend_requests, user.sent_friend_requests
json.set! :received_friend_requests, user.received_friend_requests
json.set! :profile_pic_small, asset_path(user.profile_pic.url(:small))
json.set! :profile_pic_medium, asset_path(user.profile_pic.url(:medium))
json.set! :profile_pic_large, asset_path(user.profile_pic.url(:large))
