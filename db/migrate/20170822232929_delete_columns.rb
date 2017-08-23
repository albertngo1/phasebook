class DeleteColumns < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :phone_number
  end
end
