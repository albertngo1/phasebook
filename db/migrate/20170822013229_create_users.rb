class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :email, null: false
      t.string :phone_number, null: false
      t.string :gender, null: false
      t.date :birthday, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :education
      t.string :current_city
      t.string :hometown
      t.string :relationship
      t.text :introduction


      t.timestamps
    end
    add_index :users, :session_token, unique: true
    add_index :users, :email, unique: true
    add_index :users, :phone_number, unique: true
  end
end
