class AddPostColumn < ActiveRecord::Migration[5.1]
  def change

    add_column :posts, :receiver_id, :integer, default: 1
    change_column_null :posts, :receiver_id, false
    add_index :posts, :receiver_id
  end
end
