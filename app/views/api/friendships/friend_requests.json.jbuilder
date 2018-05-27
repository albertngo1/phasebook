@friend_requests.each do |friend|
  json.set! friend.friender.id do
    json.extract!(friend.friender, :id, :first_name, :last_name)
  end
end
