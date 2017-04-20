class ChangeCityIdToCityInSpotsTable < ActiveRecord::Migration[5.0]
  def change
    remove_column :spots, :city_id, :integer
    add_column :spots, :city, :string
  end
end
