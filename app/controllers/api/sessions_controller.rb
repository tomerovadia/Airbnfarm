class Api::SessionsController < ApplicationController

  def create
    result_of_search = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if result_of_search.class == User
      @user = result_of_search
      login!(@user)
      redirect_to api_user_url(@user)
    else
      render json: result_of_search, status: 401
    end
  end

  def destroy
    if current_user
      logout!
      render json: {message: ['successful logout']}
    else
      render json: {errors: ['not logged in']}, status: 404
    end
  end

end
