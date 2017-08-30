class ChangeLikeIndex < ActiveRecord::Migration[5.1]
  def change

    add_index :likes, [:liker_id, :like_item_type, :like_item_id], unique: true
  end
end
