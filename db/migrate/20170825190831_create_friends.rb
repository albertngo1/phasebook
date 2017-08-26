class CreateFriends < ActiveRecord::Migration[5.1]
  def change
    create_table :friends do |t|
      t.integer :user1, null: false
      t.integer :user2, null: false
      t.string :status, default: "pending", null: false


      t.timestamps
    end
  end
end
