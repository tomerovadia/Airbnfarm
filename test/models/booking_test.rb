# == Schema Information
#
# Table name: bookings
#
#  id             :integer          not null, primary key
#  spot_id        :integer          not null
#  status_id      :integer          not null
#  start_date     :date             not null
#  end_date       :date             not null
#  num_guests     :integer
#  base_price     :integer
#  date_requested :date
#  date_approved  :date
#  city           :date
#  title          :date
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  guest_id       :integer
#

require 'test_helper'

class BookingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
