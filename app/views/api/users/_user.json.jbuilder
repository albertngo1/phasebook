json.extract!(user, :id, :email, :first_name, :last_name)
json.set! :image_url, asset_path(user.profile_pic.url)
