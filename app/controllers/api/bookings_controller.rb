class Api::BookingsController < ApplicationController

  def index
    user = User.find_by(id: params[:user_id])

    if user
      @trips = user.trips.includes(:spot, :status) || {}
      @reservations = user.reservations.includes(:spot, :status) || {}

      render :index
    else
      render json: ['user not found'], status: 404
    end

  end


  def show
    @booking = Booking.find_by(id: params[:id])

    render :show
  end


  def create
    @booking = Booking.new(booking_params)

    spot = Spot.find_by(id: params[:spot_id])


    @booking.guest = current_user
    @booking.spot = spot
    @booking.status_id = BookingStatus.find_by(status: 'pending').id

    @booking.title = spot.title
    @booking.city = spot.city
    @booking.base_price = spot.base_price.to_i

    if @booking.save
      render :show
    else
      render json: @booking.errors, status: 422
    end

  end



  def update
    @booking = Booking.find_by(id: params[:id])
    booking_status = params[:booking][:booking_status]

    if !@booking
      render json: ['booking not found'], status: 404
    elsif @booking.update(status_id: BookingStatus.find_by(status: booking_status).id)

      if booking_status === 'approved'
        Availability.book_availabilities(@booking.start_date, @booking.end_date, @booking.spot)
      end

      render :show
    else
      render json: @booking.errors, status: 400
    end

  end




  private
  def booking_params
    params.require(:booking).permit(:spot_id, :start_date, :end_date, :num_guests,
      :date_requested, :date_approved, :guest_id, :booking_status)
  end

end
