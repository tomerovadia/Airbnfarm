class Api::SpotsController < ApplicationController

  def index

    if params[:user_id] # /api/users/:id/spots
      @spots = User.find(params[:user_id]).listings.includes(:state, :privacy_level)
    else # /api/spots
      @spots = Spot.all_spots_within(params[:bounds]).includes(:state, :privacy_level, :availabilities)

      if (params[:startDate] && params[:endDate]) && (!(params[:startDate].empty? && params[:endDate].empty?))
        startRequestedDate = Date.parse(params[:startDate])
        endRequestedDate = Date.parse(params[:endDate])

        @spots = Spot.filter_by_availability(@spots, startRequestedDate, endRequestedDate)
      end

    end

    if @spots.empty?
      render json: ['Nothing matches your search'], status: 404
    else
      render template: 'api/spots/spots'
    end

  end


  def show
    @spot = Spot.find_by(id: params[:id])

    if @spot
      render :show
    else
      render json: {}
    end

  end


  def create
    @spot = Spot.new(spot_params)

    @spot.host = current_user

    if @spot.save
      render json: @spot
    else
      render json: @spot.errors, status: 422
    end

  end



  private
  def spot_params
    params.require(:spot).permit(:title, :base_price, :summary, :main_photo_url, :privacy_level_id,
      :num_guests, :num_bedrooms, :num_beds, :num_bathrooms, :street_address, :city,
      :state_id, :zipcode, :description, :main_photo)
  end


end
