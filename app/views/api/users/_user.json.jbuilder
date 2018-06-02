json.extract!(user, :id, :email, :first_name, :last_name,
:education, :current_city, :hometown, :relationship, :introduction)
json.set! :cover_page, user.cover_picture.service_url
json.set! :active_friends, user.active_friends
json.set! :sent_friend_requests, user.sent_friend_requests
json.set! :received_friend_requests, user.received_friend_requests
json.set! :profile_pic_small, user.profile_picture.variant(resize: '50x50').service_url
json.set! :profile_pic_medium, user.profile_picture.variant(resize: '101x101').service_url
json.set! :profile_pic_large, user.profile_picture.variant(resize: "170x170").service_url
