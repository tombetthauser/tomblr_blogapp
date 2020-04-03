class CreateFollowsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :follows do |t|
      t.integer :following_user_id, null: false
      t.integer :followed_blog_id, null: false

      t.timestamps
    end
    add_index :blogs, :follower_id
    add_index :blogs, :followed_id
  end
end
