class AddNulls < ActiveRecord::Migration[5.1]
  def change

    change_column_null :users, :birth_day, true
    change_column_null :users, :birth_month, true
    change_column_null :users, :birth_year, true
  end
end
