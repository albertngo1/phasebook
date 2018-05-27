# == Schema Information
#
# Table name: messages
#
#  id              :integer          not null, primary key
#  body            :string           not null
#  author_id       :integer          not null
#  conversation_id :integer          not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Message < ActiveRecord::Base
  validates :body, :author, :conversation, presence: true

  belongs_to :author, inverse_of: :messages, class_name: :User
  belongs_to :conversation
end
