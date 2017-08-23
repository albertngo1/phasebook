class Post < ActiveRecord::Base
  validates :body, :author, presence: true

  belongs_to :author,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: :User



end
