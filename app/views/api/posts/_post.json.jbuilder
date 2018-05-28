json.extract!(post, :id, :body, :author_id, :receiver_id)
json.set! :author, post.author.full_name
json.set! :receiver, post.receiver.full_name
json.set! :posted_date, post.posted_date
json.set! :profile_pic, url_for(post.author.profile_picture.variant(resize: '50x50'))
json.set! :likes, post.likes

json.comments do
  post.comments.each do |comment|
    json.set! comment.id do
      json.partial! 'api/comments/comment', comment: comment
    end
  end
end

if post.picture.attached?
  json.set! :image, url_for(post.picture.variant(resize: '452x452'))
end
