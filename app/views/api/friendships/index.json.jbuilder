@friendships.each do |friendship|
  json.set! friendship.user1_id do
    json.partial! 'api/friendships/friendship', friendship: friendship
  end
end
