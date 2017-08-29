json.extract!(post, :id, :body, :author_id, :receiver_id)
json.set! :author, post.author.full_name
json.set! :receiver, post.receiver.full_name
json.set! :posted_date, post.posted_date
json.set! :profile_pic, asset_path(post.author.profile_pic.url)
