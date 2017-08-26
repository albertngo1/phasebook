# == Schema Information
#
# Table name: posts
#
#  id          :integer          not null, primary key
#  body        :text             not null
#  author_id   :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  receiver_id :integer          default(1), not null
#

class Post < ActiveRecord::Base
  include ActionView::Helpers::DateHelper

  validates :body, :author, :receiver, presence: true

  belongs_to :author,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: :User

  belongs_to :receiver,
  primary_key: :id,
  foreign_key: :receiver_id,
  class_name: :User

  has_many :comments,
  primary_key: :id,
  foreign_key: :post_id,
  class_name: :Comment

  def posted_date
    time_ago_in_words(self.created_at)
  end


end
