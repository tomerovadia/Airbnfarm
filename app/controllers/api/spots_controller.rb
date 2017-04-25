class Api::SpotsController < ApplicationController

  def index

    @spots = Spot.all_spots_in(params[:city])

    # if params[:startDate] && params[:endDate]
    #   startDate = Date.parse(params[:startDate])
    #   endDate = Date.parse(params[:endDate])
    #
    #   # select only those spots where...
    #   new_spots = @spots.select do |spot|
    #     availabilities = spot.availabilities.map do |availability|
    #       availability.available_date
    #     end
    #
    #     # ...each of the requested dates are in the spot's availabilities
    #     response = (startDate..endDate).all? do |requested_date|
    #       availabilities.include?(requested_date)
    #     end
    #     response
    #   end
    #   @spots = new_spots
    # end


    if params[:startDate] && params[:endDate]
      startRequestedDate = Date.parse(params[:startDate])
      endRequestedDate = Date.parse(params[:endDate])

      @spots = Spot.filter_by_availability(@spots, startRequestedDate, endRequestedDate)
    end

    if @spots.empty?
      render json: ['Nothing matches your search'], status: 404
    else
      render template: 'api/spots/minishow'
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
      :state_id, :zipcode, :description)
  end


end
