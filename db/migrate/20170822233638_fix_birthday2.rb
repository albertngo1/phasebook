class FixBirthday2 < ActiveRecord::Migration[5.1]
  def change
    change_column_null :users, :birth_day, false
    change_column_null :users, :birth_month, false
    change_column_null :users, :birth_year, false
  end
end
