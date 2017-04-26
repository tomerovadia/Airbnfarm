class Api::BookingsController < ApplicationController

  def index
    
  end


  def show

  end


  def create
    @booking = Booking.new(booking_params)

    @booking.guest = current_user

    if @booking.save
      render :show
    else
      render json: @booking.errors, status: 422
    end
  end

  private
  def booking_params
    params.require(:booking).permit(:spot_id, :status_id, :status_id,
      :start_date, :end_date, :num_guests, :base_price, :date_requested,
      :date_approved, :guest_id)
  end

end
