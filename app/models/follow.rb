class Follow < ApplicationRecord
  validates :followed_blog_id, :follower_id, presence: true

  belongs_to :blog,
  foreign_key: :followed_blog_id, # should these be swapped?
  class_name: :Blog

  belongs_to :follower,
  foreign_key: :follower_id, # should these be swapped?
  class_name: :User
end
