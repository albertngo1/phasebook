class CreateLikes < ActiveRecord::Migration[5.1]
  def change
    create_table :likes do |t|
      t.integer :liker_id

      t.references :like_item, polymorphic: true, index: true

      t.timestamps
    end
    add_index :likes, :liker_id
  end
end
