@friendships.each do |friend|
  next if friend.id == @user.id
  json.set!(friend.id) do
    json.extract!(friend, :first_name, :last_name)
    json.set! :profile_pic, asset_path(friend.profile_pic.url(:medium))
    json.set! :cover_page, asset_path(friend.cover_page.url)
  end
end
