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

  belongs_to :author, inverse_of: :posts, class_name: :User
  belongs_to :receiver, inverse_of: :received_posts, class_name: :User
  has_many :comments, inverse_of: :post, dependent: :destroy
  has_many :likes, as: :like_item, dependent: :destroy

  has_attached_file :image, default_url: "missing-post.png",
  styles: {
    large: "452x452#",
    small: "1x1"
  }
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  def posted_date
    time_ago_in_words(created_at)
  end
end
