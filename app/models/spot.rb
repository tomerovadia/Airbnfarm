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

class Spot < ApplicationRecord
  validates_presence_of :host, :title, :base_price, :summary, :main_photo_url, :privacy_level,
    :num_guests, :num_bedrooms, :num_beds, :num_bathrooms, :street_address, :city,
    :state, :zipcode
  validates_format_of :zipcode, with: /\A[0-9]{5}\Z/
  validates :num_bedrooms, :num_bathrooms, numericality: { greater_than_or_equal_to: 0 }
  validates :num_guests, :num_beds, :base_price, numericality: { greater_than: 0 }

  belongs_to :host,
    class_name: User,
    foreign_key: :host_id

  belongs_to :privacy_level
  belongs_to :state

  has_many :availabilities




  protected

  def self.all_spots_in(city)
    return Spot.all if city == ""

    Spot.where('lower(city) = ?', city.downcase).includes(:privacy_level, :availabilities)
  end


end
