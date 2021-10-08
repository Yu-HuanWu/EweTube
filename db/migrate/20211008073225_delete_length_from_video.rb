class DeleteLengthFromVideo < ActiveRecord::Migration[5.2]
  def change
    remove_column :videos, :length
  end
end
