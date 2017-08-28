json.extract!(user, :id, :email, :first_name, :last_name,
:education, :current_city, :hometown, :relationship, :introduction)
json.set! :image_url, asset_path(user.profile_pic.url)
json.set! :sent_requests, user.sent_friend_requests
