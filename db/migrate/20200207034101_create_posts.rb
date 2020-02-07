class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :title, null: false
      t.string :text
      t.string :pic_url
      t.integer :blog_id, null: false
      
      t.timestamps
    end
    add_index :posts, :title
    add_index :posts, :blog_id
  end
end