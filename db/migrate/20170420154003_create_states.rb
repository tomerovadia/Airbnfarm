class CreateStates < ActiveRecord::Migration[5.0]
  def change
    create_table :states do |t|
      t.string :state_name, null: false

      t.timestamps
    end

    add_index :states, :state_name
  end
end
