# == Schema Information
#
# Table name: friendships
#
#  id         :integer          not null, primary key
#  user1_id   :integer          not null
#  user2_id   :integer          not null
#  status     :string           default("pending"), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Friendship < ActiveRecord::Base
  validates :user1_id, :user2_id, :status, presence: true
  validates_uniqueness_of :user1_id, :scope => [:user2_id]
  validate :friendship_exists, on: :create

  belongs_to :friender,
  primary_key: :id,
  foreign_key: :user1_id,
  class_name: :User

  belongs_to :friendee,
  primary_key: :id,
  foreign_key: :user2_id,
  class_name: :User

  private

  def friendship_exists
    a = friender.id
    b = friendee.id
    if Friendship.where("user1_id = ? AND user2_id = ?", a, b).exists? ||
      Friendship.where("user1_id = ? AND user2_id = ?", b, a).exists?
      errors.add(:friendship, 'Already added or has been added')
    end
  end
end