# == Schema Information
#
# Table name: comments
#
#  id         :integer          not null, primary key
#  body       :string           not null
#  author_id  :integer          not null
#  post_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ActiveRecord::Base
  include ActionView::Helpers::DateHelper

  validates :body, :author_id, :post_id, presence: true

  has_many :likes, :as => :like_item, dependent: :destroy

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
