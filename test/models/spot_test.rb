# == Schema Information
#
# Table name: spots
#
#  id               :integer          not null, primary key
#  host_id          :integer          not null
#  title            :string           not null
#  base_price       :string           not null
#  summary          :text             not null
#  main_photo_url   :string           not null
#  description      :text
#  privacy_level_id :integer          not null
#  num_guests       :integer          not null
#  num_bedrooms     :integer          not null
#  num_beds         :integer          not null
#  num_bathrooms    :integer          not null
#  street_address   :string           not null
#  state_id         :integer          not null
#  zipcode          :integer          not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  city             :string
#

require 'test_helper'

class SpotTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
