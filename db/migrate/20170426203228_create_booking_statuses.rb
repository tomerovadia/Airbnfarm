class CreateBookingStatuses < ActiveRecord::Migration[5.0]
  def change
    create_table :booking_statuses do |t|
      t.string :status, null: false

      t.timestamps
    end

    add_index :booking_statuses, :status, :unique => true
  end
end
