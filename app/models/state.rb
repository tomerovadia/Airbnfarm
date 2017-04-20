# == Schema Information
#
# Table name: states
#
#  id         :integer          not null, primary key
#  state_name :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class State < ApplicationRecord

  has_many :spots

end
