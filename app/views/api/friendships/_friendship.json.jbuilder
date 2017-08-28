json.extract! friendship, :id, :user1_id, :user2_id, :status
json.friender do
  json.partial! 'api/users/user', user: friendship.friender
end
json.friendee do
  json.partial! 'api/users/user', user: friendship.friendee
end
