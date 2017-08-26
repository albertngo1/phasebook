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

  # belongs_to :friender,
  # primary_key: :id,
  # foreign_key: :user1_id,
  # class_name: :User
  #
  # belongs_to :friendee,
  # primary_key: :id,
  # foreign_key: :user2_id,
  # class_name: :User

end
