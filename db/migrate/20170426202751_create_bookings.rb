class CreateBookings < ActiveRecord::Migration[5.0]
  def change
    create_table :bookings do |t|
      t.integer :spot_id, null: false
      t.integer :status_id, null: false
      t.date :start_date, null: false
      t.date :end_date, null: false
      t.integer :num_guests
      t.integer :base_price
      t.date :date_requested
      t.date :date_approved
      t.date :city
      t.date :title

      t.timestamps
    end
  end
end
