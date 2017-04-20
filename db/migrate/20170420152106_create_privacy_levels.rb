class CreatePrivacyLevels < ActiveRecord::Migration[5.0]
  def change
    create_table :privacy_levels do |t|
      t.string :privacy_level, null: false

      t.timestamps
    end

    add_index :privacy_levels, :privacy_level
  end
end
