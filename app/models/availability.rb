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

class Availability < ApplicationRecord
  validates :available_date, :spot, presence: true

  belongs_to :spot

  def book_availability
    self.is_available = false
    self.save!
  end

  def self.book_availabilities(start_date, end_date, spot)
    (start_date .. end_date).each do |date|
      availability = Availability.find_by(available_date: date, spot: spot)
      availability.book_availability if availability
    end
  end

end
