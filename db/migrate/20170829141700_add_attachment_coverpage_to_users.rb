class AddAttachmentCoverpageToUsers < ActiveRecord::Migration[5.1]
  def self.up
    change_table :users do |t|
      t.attachment :cover_page
    end
  end

  def self.down
    remove_attachment :users, :cover_page
  end
end
