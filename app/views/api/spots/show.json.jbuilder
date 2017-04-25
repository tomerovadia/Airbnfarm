json.extract! @spot, :id, :title, :base_price, :summary, :description, :num_guests,
  :num_bedrooms, :num_beds, :num_bathrooms, :street_address, :zipcode, :city

json.main_photo_url asset_path(@spot.main_photo.url)
json.host @spot.host.email
json.privacy_level @spot.privacy_level.privacy_level
json.state @spot.state.state_name
json.availabilities @spot.availabilities.map{|availability| availability.available_date}
