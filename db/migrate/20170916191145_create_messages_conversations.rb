class CreateMessagesConversations < ActiveRecord::Migration[5.1]
  def change
    create_table :messages do |t|
      t.string :body, null: false
      t.integer :author_id, null: false
      t.integer :conversation_id, null: false

      t.timestamps

    end

    create_table :conversations do |t|
      t.integer :creator_id, null: false
      t.integer :recipient_id, null: false

      t.timestamps
    end

    add_index :conversations, :creator_id
    add_index :conversations, :recipient_id
    add_index :conversations, [:creator_id, :recipient_id]
  end
end
