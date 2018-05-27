# == Schema Information
#
# Table name: users
#
#  id                       :integer          not null, primary key
#  first_name               :string           not null
#  last_name                :string           not null
#  email                    :string           not null
#  gender                   :string           not null
#  password_digest          :string           not null
#  session_token            :string           not null
#  education                :string
#  current_city             :string
#  hometown                 :string
#  relationship             :string
#  introduction             :text
#  created_at               :datetime         not null
#  updated_at               :datetime         not null
#  birth_day                :integer          not null
#  birth_month              :integer          not null
#  birth_year               :integer          not null
#  profile_pic_file_name    :string
#  profile_pic_content_type :string
#  profile_pic_file_size    :integer
#  profile_pic_updated_at   :datetime
#  cover_page_file_name     :string
#  cover_page_content_type  :string
#  cover_page_file_size     :integer
#  cover_page_updated_at    :datetime
#
class User < ActiveRecord::Base
  validates :first_name, :last_name, :email, :gender,
  :birth_day, :birth_month, :birth_year, :password_digest, :session_token, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  attr_reader :password

  has_attached_file :profile_pic, default_url: "fbpic.jpg",
  styles: {
    small: "50x50#",
    medium: "101x101#",
    large:"170x170#"
  }
  validates_attachment_content_type :profile_pic, content_type: /\Aimage\/.*\Z/

  has_attached_file :cover_page, default_url: "airbase.jpg",
  styles: {
    large:"850x210#"
  }
  validates_attachment_content_type :cover_page, content_type: /\Aimage\/.*\Z/

  has_many :posts, inverse_of: :author, dependent: :destroy
  has_many :received_posts, inverse_of: :receiver, dependent: :destroy
  has_many :comments, inverse_of: :author
  has_many :messages, inverse_of: :author
  has_many :friendships, inverse_of: :friender
  has_many :friends, through: :friendships, source: :friendee
  has_many :likes, inverse_of: :liker

  has_many :conversations_started,
  primary_key: :id,
  foreign_key: :creator_id,
  class_name: :Conversation

  has_many :conversations_received,
  primary_key: :id,
  foreign_key: :recipient_id,
  class_name: :Conversation

  after_initialize :ensure_session_token

  def active_friends
    User.where(id: Friendship.find_active_friends(id))
  end

  def sent_friend_requests
    Friendship
      .where(user2_id: id, status: 'pending')
      .pluck(:user2_id)
  end

  def received_friend_requests
    Friendship
      .where(user2_id: id, status: 'pending')
      .pluck(:user1_id)
  end

  def self.search(search_string)
    where("LOWER(CONCAT(first_name, last_name)) LIKE LOWER('%#{search_string}%') AND ? != '' ", search_string)
  end

  def full_name
    "#{first_name} #{last_name}"
  end

  def self.find_by_credentials(email, password)
    user = find_by(email: email)
    return user if user && user.is_password?(password)
    nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
end
