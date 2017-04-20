# == Schema Information
#
# Table name: availabilities
#
#  id             :integer          not null, primary key
#  spot_id        :integer          not null
#  available_date :date             not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

require 'test_helper'

class AvailabilityTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
