class Comment < ActiveRecord::Base
  include ActionView::Helpers::DateHelper

  validates :body, :author_id, :post_id, presence: true

  belongs_to :author,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: :User

  belongs_to :post,
  primary_key: :id,
  foreign_key: :post_id,
  class_name: :Post

  def posted_date
    time_ago_in_words(self.created_at)
  end


end
