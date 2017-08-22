class ChangeBirthday < ActiveRecord::Migration[5.1]
  def change

    add_column :users, :birth_day, :integer
    add_column :users, :birth_month, :integer
    add_column :users, :birth_year, :integer
    remove_column :users, :birthday
  end
end
