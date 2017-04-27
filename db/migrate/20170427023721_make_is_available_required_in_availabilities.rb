class MakeIsAvailableRequiredInAvailabilities < ActiveRecord::Migration[5.0]
  def change
    change_column(:availabilities, :is_available, :boolean, null: false, default: true)
  end
end
