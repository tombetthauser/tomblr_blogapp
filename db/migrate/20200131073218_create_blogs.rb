class CreateBlogs < ActiveRecord::Migration[5.2]
  def change
    create_table :blogs do |t|
      t.string :title, null: false
      t.string :description
      t.integer :author_id, null: false

      t.timestamps
    end
    add_index :blogs, :title, unique: true
    add_index :blogs, :author_id
  end
end