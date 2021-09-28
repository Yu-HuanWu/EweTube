class CreateVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :videos do |t|
      t.string :title, null: false
      t.text :description, null: true
      t.integer :length, null: false
      t.integer :user_id, null: false

      t.timestamps
    end
    add_index :videos, :user_id
  end
end
