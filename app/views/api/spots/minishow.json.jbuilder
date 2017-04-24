@spots.each do |spot|
  json.set! spot.id do
    json.title spot.title
    json.base_price spot.base_price
    json.main_photo_url spot.main_photo_url
    json.num_beds spot.num_beds
    json.privacy_level spot.privacy_level.privacy_level
  end
end
