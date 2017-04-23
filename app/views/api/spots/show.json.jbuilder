json.extract! @spot, :id, :title, :base_price, :summary, :main_photo_url, :description,
  :num_guests, :num_bedrooms, :num_beds, :num_bathrooms, :street_address, :zipcode, :city

json.host @spot.host.email
json.privacy_level @spot.privacy_level.privacy_level
json.state @spot.state.state_name
