class AddIsAvailableToAvailabilities < ActiveRecord::Migration[5.0]
  def change
    add_column :availabilities, :is_available, :boolean, :default => true
  end
end
