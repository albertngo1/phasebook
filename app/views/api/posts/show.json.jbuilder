json.post do
  json.partial!('/api/posts/post', post: @post)
end
