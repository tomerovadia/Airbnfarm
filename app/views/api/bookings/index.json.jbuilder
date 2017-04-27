json.trips do
  @trips.each do |trip|
    json.set! trip.id do
      json.partial! 'api/bookings/booking', booking: trip
    end
  end
end

json.reservations do
  @reservations.each do |reservation|
    json.set! reservation.id do
      json.partial! 'api/bookings/booking', booking: reservation
    end
  end
end
