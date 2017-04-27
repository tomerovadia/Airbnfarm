json.extract! booking, :id, :start_date, :end_date, :num_guests, :city, :base_price,
  :date_requested, :date_approved, :title, :guest_id

json.spot_main_photo_url booking.spot.main_photo.url
json.spot_id booking.spot.id
json.booking_status booking.status.status
