# == Schema Information
#
# Table name: conversations
#
#  id           :integer          not null, primary key
#  creator_id   :integer          not null
#  recipient_id :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Conversation < ActiveRecord::Base

  validates :creator, :recipient, presence: true
  validates_uniqueness_of :creator_id, :scope => [:recipient_id]

  validate :conversation_exists, on: :create

  has_many :messages, dependent: :destroy
  primary_key: :id,
  foreign_key: :conversation_id,
  class_name: :Message

  belongs_to :creator,
  primary_key: :id,
  foreign_key: :creator_id,
  class_name: :User

  belongs_to :recipient,
  primary_key: :id,
  foreign_key: :recipient_id,
  class_name: :User

  private

  def conversation_exists
    a = creator.id
    b = recipient.id
    if Conversation.where("creator_id = ? AND recipient_id = ?", a, b).exists? ||
      Conversation.where("creator_id = ? AND recipient_id = ?", b, a).exists?
      errors.add(:conversation, 'Already added or has been added')
    end
  end



end
