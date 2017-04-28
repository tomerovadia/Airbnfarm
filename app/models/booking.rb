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

class Booking < ApplicationRecord
  validates :spot, :guest, :status, :start_date, :end_date, presence: true

  belongs_to :spot

  belongs_to :guest,
    class_name: 'User',
    foreign_key: :guest_id

  has_one :host,
    through: :spot,
    source: :host

  belongs_to :status,
    class_name: 'BookingStatus'


  



end
