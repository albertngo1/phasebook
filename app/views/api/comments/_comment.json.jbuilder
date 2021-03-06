json.extract!(comment, :id, :body, :author_id, :post_id)
json.set! :author, comment.author.full_name
json.set! :posted_date, comment.posted_date
json.set! :profile_pic, comment.author.profile_picture.variant(resize: "50x50").service_url
json.set! :likes, comment.likes
