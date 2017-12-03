json.extract!(post, :id, :body, :author_id, :receiver_id)
json.set! :author, post.author.full_name
json.set! :receiver, post.receiver.full_name
json.set! :posted_date, post.posted_date
json.set! :profile_pic, asset_path(post.author.profile_pic.url(:small))
json.set! :likes, post.likes

json.comments do
  post.comments.each do |comment|
    json.set! comment.id do
      json.partial! 'api/comments/comment', comment: comment
    end
  end
end



if post.image.url != 'missing-post.png'
  json.set! :image, asset_path(post.image.url(:large))
end
