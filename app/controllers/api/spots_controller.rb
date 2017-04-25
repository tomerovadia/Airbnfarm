class Api::SpotsController < ApplicationController

  def index

    city = params[:city]
    if city == ""
      @spots = Spot.all
    else
      @spots = Spot.where(city: city).includes(:privacy_level, :availabilities)
    end


    if params[:startDate] && params[:endDate]
      startDate = Date.parse(params[:startDate])
      endDate = Date.parse(params[:endDate])

      # select only those spots where...
      new_spots = @spots.select do |spot|
        availabilities = spot.availabilities.map do |availability|
          availability.available_date
        end

        # ...each of the requested dates are in the spot's availabilities
        response = (startDate..endDate).all? do |requested_date|
          availabilities.include?(requested_date)
        end
        response
      end
      @spots = new_spots
    end

    if @spots.empty?
      render json: ['Nothing matches your search'], status: 404
    else
      render template: 'api/spots/minishow'
    end


    # receive params that include location, start date and end date

    # go through all spots and return those that:
      # a) have the same location, and
      # b) have a row in the Availabilities table for each date from the startdate to the endDate

    # return those spots as an object, with the id as the key, and the spot info as the value
    # the only spot info needed is title, main photo url, price, and num_beds
    # make a json builder that formats these spots, partial for _spot and one for show that puts them together into an array with .map! or something

    # render :show

    # render errors otherwise:
      # if no results matched
      # if another error occurred

  end


  def show
    @spot = Spot.find_by(id: params[:id])

    if @spot
      render :show
    else
      render json: ['Spot not found'], status: 404
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
