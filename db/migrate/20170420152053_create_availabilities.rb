class CreateAvailabilities < ActiveRecord::Migration[5.0]
  def change
    create_table :availabilities do |t|
      t.integer :spot_id, null: false
      t.date :available_date, null: false

      t.timestamps
    end

    add_index :availabilities, :spot_id
    add_index :availabilities, :available_date
    add_foreign_key :availabilities, :spots
  end
end
