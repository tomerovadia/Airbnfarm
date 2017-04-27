class ChangeTitleAndCityTypeInBookings < ActiveRecord::Migration[5.0]
  def change
    change_column :bookings, :title, :string
    change_column :bookings, :city, :string
  end
end
