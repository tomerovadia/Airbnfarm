class AddGuestIdColumnToBookingsTable < ActiveRecord::Migration[5.0]
  def change
    add_column :bookings, :guest_id, :integer
  end
end
