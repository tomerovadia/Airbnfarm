# == Schema Information
#
# Table name: privacy_levels
#
#  id            :integer          not null, primary key
#  privacy_level :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class PrivacyLevel < ApplicationRecord

  has_many :spots

  def self.get_array
    return self.all.map {|privacy_level| privacy_level.privacy_level}
  end

  def self.get_json_hash
    privacy_level_hash = {}

    PrivacyLevel.all.each do |privacy_level|
      privacy_level_hash[privacy_level.id] = privacy_level.privacy_level
    end

    privacy_level_hash.to_json
  end


end
