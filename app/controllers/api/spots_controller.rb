class Api::SpotsController < ApplicationController

  def index

    city = params[:city]
    @spots = Spot.where(city: city).includes(:privacy_level)

    render template: 'api/spots/minishow'

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
