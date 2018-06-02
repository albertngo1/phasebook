@friendships.each do |friend|
  next if friend.id == @user.id
  json.set!(friend.id) do
    json.extract!(friend, :first_name, :last_name)
    json.set! :profile_pic, friend.profile_picture.variant(resize: "101x101").service_url
    json.set! :cover_page, friend.cover_picture.service_url
  end
end
