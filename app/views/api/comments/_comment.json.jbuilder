json.extract!(comment, :id, :body, :author_id, :post_id)
json.set! :author, comment.author.full_name
json.set! :posted_date, comment.posted_date
