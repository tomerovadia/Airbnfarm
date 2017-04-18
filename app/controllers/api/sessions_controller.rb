class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user
      login!(@user)
      redirect_to api_user_url(@user)
    else
      render json: {message: ['Invalid credentials']}, status: 401
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
