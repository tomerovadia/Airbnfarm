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

  def self.get_array
    return self.all.map {|state| state.state_name}
  end

  def self.get_json_hash
    states_hash = {}

    State.all.each do |state|
      states_hash[state.id] = state.state_name
    end

    states_hash.to_json
  end


end
