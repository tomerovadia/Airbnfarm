class Api::AvailabilitiesController < ApplicationController

  def create
    @availability = Availability.new(availability_params)
    if @availability.save
      render json: @availability
    else
      render json: @availability.errors, status: 422
    end
  end

  def destroy

  end

  private
  def availability_params
    params.require(:availability).permit(:available_date, :spot_id)
  end

end
