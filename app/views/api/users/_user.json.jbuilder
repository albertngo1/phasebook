json.extract!(user, :id, :email, :first_name, :last_name,
:education, :current_city, :hometown, :relationship, :introduction)
json.set! :cover_page, url_for(user.cover_picture.variant(resize: "170x170"))
json.set! :active_friends, user.active_friends
json.set! :sent_friend_requests, user.sent_friend_requests
json.set! :received_friend_requests, user.received_friend_requests
json.set! :profile_pic_small, url_for(user.profile_picture.variant(resize: '50x50'))
json.set! :profile_pic_medium, url_for(user.profile_picture.variant(resize: '101x101'))
json.set! :profile_pic_large, url_for(user.profile_picture.variant(resize: "170x170"))
