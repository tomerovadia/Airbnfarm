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




end
