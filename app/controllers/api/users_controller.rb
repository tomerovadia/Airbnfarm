class Api::UsersController < ApplicationController

  def handleErrors(unformatted_errors)
    formatted_errors = {}

    # Handle email errors
    if unformatted_errors.include?("Email can't be blank")
      formatted_errors['email'] = "Email is required."
    elsif unformatted_errors.include?("Email is invalid")
      formatted_errors['email'] = "Please enter a valid email address."
    elsif unformatted_errors.include?("Email has already been taken")
      formatted_errors['email'] = "Looks like you already have an account. Please log in instead."
    end

    # Handle password errors
    if unformatted_errors.include?("Password is too short (minimum is 6 characters)")
      if(params[:user][:password] == "")
        formatted_errors['password'] = "Password is required."
      else
        formatted_errors['password'] = "Your password must be at least 8 characters. Please try again."
      end
    end

    formatted_errors
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      render :show
    else
      formatted_errors = handleErrors(@user.errors.full_messages)

      render json: formatted_errors, status: 422
    end
  end

  def show
    @user = User.find_by(id: params[:id])
    render :show
  end

  private
  def user_params
    params.require(:user).permit(:email, :password)
  end

end
