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
#  city_id          :integer          not null
#  state_id         :integer          not null
#  zipcode          :integer          not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

class Spot < ApplicationRecord
  validates_presence_of :host_id, :title, :base_price, :summary, :main_photo_url, :privacy_level_id,
    :num_guests, :num_bedrooms, :num_beds, :num_bathrooms, :street_address, :city_id,
    :state_id, :zipcode
  validates_format_of :zipcode, with: /\A[0-9]{5}\Z/
  validates_numericality_of :base_price, :num_guests, :num_bedrooms, :num_beds, :num_bathrooms, :zipcode
  validates :base_price, :num_guests, :num_bedrooms, :num_beds, :num_bathrooms, :zipcode, numericality: { greater_than: 0 }


end
