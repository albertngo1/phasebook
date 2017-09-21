json.extract!(comment, :id, :body, :author_id, :post_id)
json.set! :author, comment.author.full_name
json.set! :posted_date, comment.posted_date
json.set! :profile_pic, asset_path(comment.author.profile_pic.url(:small))
json.set! :likes, comment.likes
