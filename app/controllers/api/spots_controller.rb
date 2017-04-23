class Api::SpotsController < ApplicationController

  def create
    @spot = Spot.new(spot_params)

    @spot.host = current_user

    if @spot.save
      render json: @spot
    else
      render json: @spot.errors, status: 422
    end

  end

  def show
    @spot = Spot.find_by(id: params[:id])

    if @spot
      render json: @spot
    else
      render json: ['Spot not found'], status: 404
    end

  end

  private
  def spot_params
    params.require(:spot).permit(:title, :base_price, :summary, :main_photo_url, :privacy_level_id,
      :num_guests, :num_bedrooms, :num_beds, :num_bathrooms, :street_address, :city,
      :state_id, :zipcode, :description)
  end


end
