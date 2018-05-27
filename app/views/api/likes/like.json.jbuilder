json.extract!(@like, :id, :liker_id, :like_item_id, :like_item_type)

if @like.like_item_type == "Comment"
  json.set! :post_id, @like.like_item.post.id
end
