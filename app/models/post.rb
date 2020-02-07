class Post < ApplicationRecord
  validates :title, :blog_id, presence: true

  belongs_to :blog

  has_one :author,
    through: :blog,
    source: :user
end
