@friendships.each do |friend|
  next if friend.id == @user.id
  json.set!(friend.id) do
    json.extract!(friend, :first_name, :last_name)
    json.set! :profile_pic, url_for(friend.profile_picture.variant(resize: "101x101"))
    json.set! :cover_page, url_for(friend.cover_picture)
  end
end
