# == Schema Information
#
# Table name: likes
#
#  id             :integer          not null, primary key
#  liker_id       :integer          not null
#  like_item_type :string           not null
#  like_item_id   :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Like < ActiveRecord::Base
  validates :liker, :like_item, presence: true
  validates_uniqueness_of :liker_id, scope: [:like_item_type, :like_item_id]

  belongs_to :liker, foreign_key: :liker_id, class_name: :User
  belongs_to :like_item, polymorphic: true
end
