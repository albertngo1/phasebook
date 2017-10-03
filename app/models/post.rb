# == Schema Information
#
# Table name: posts
#
#  id                 :integer          not null, primary key
#  body               :text             not null
#  author_id          :integer          not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  receiver_id        :integer          default(1), not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
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

  has_many :comments, dependent: :destroy,
  primary_key: :id,
  foreign_key: :post_id,
  class_name: :Comment

  has_attached_file :image, default_url: "missing-post.png",
  :styles => {
    :large => "452x452#",
    :small => "1x1"
  }
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  has_many :likes, :as => :like_item, dependent: :destroy

  def posted_date
    time_ago_in_words(self.created_at)
  end


end
