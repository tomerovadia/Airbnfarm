@spots.each do |spot|
  json.set! spot.id do
    if spot.title.length > 30
      json.title spot.title.slice(0..30).concat('...')
    else
      json.title spot.title
    end
    json.base_price spot.base_price
    json.main_photo_url spot.main_photo.url
    json.num_beds spot.num_beds
    json.privacy_level spot.privacy_level.privacy_level
    json.id spot.id
    json.street_address spot.street_address
    json.city spot.city
    json.state spot.state.state_name
    json.zipcode spot.zipcode
  end
end
