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
#

class User < ActiveRecord::Base
  validates :first_name, :last_name, :email, :gender,
  :birth_day, :birth_month, :birth_year, :password_digest, :session_token, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  attr_reader :password

  has_attached_file :profile_pic, default_url: "splash_page.png"
  validates_attachment_content_type :profile_pic, content_type: /\Aimage\/.*\Z/

  has_many :posts, dependent: :destroy,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: :Post

  has_many :received_posts, dependent: :destroy,
  primary_key: :id,
  foreign_key: :receiver_id,
  class_name: :Post

  has_many :friendships,
  primary_key: :id,
  foreign_key: :user1_id,
  class_name: :Friendship

  has_many :friends,
  through: :friendships,
  source: :friendee

  has_many :comments,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: :Comment

  after_initialize :ensure_session_token

  def active_friends
    active_friends = Friendship
      .where("user1_id = ? OR user2_id = ?", self.id, self.id)
      .where("status = ?", 'active')
      .pluck(:user1_id, :user2_id)
      .flatten
      .uniq
    User.where(id: active_friends)
  end

  def sent_friend_requests
    requested_friends = Friendship
      .where("user1_id = ?", self.id)
      .where("status = ?", 'pending')
      .pluck(:user2_id)

    User.where(id: requested_friends)

  end

  def received_friend_requests
    received_friends = Friendship
      .where("user2_id = ?", self.id)
      .where("status = ?", 'pending')
      .pluck(:user1_id)
    User.where(id: received_friends)
  end





  def full_name
    "#{self.first_name} #{self.last_name}"
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    if user && user.is_password?(password)
      return user
    end
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
