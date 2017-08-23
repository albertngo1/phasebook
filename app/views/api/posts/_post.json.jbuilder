json.extract!(post, :id, :body, :author_id)
json.set! :author, post.author.full_name
