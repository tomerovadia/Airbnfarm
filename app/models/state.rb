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

  def self.statesArray
    return State.all.map {|state| state.state_name}
  end

end
