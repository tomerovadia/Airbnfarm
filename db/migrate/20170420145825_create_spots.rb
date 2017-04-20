class CreateSpots < ActiveRecord::Migration[5.0]
  def change
    create_table :spots do |t|
      t.integer :host_id, null: false
      t.string :title, null: false
      t.string :base_price, null: false
      t.text :summary, null: false
      t.string :main_photo_url, null: false
      t.text :description

      t.integer :privacy_level_id, null: false

      t.integer :num_guests, null: false
      t.integer :num_bedrooms, null: false
      t.integer :num_beds, null: false
      t.integer :num_bathrooms, null: false

      t.string :street_address, null: false
      t.integer :city_id, null: false
      t.integer :state_id, null: false
      t.integer :zipcode, null: false

      t.timestamps
    end

    add_index(:spots, :host_id)
    add_index(:spots, :privacy_level_id)
    add_index(:spots, :city_id)
    add_index(:spots, :state_id)
  end
end
