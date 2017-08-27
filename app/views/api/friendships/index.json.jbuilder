@friendships.each do |friendship|
  json.set! friendship.user1 do
    json.partial!('/api/friendships/friendship', friendship: friendship)
  end
end
