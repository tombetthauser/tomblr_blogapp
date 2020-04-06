class Blog < ApplicationRecord
    validates :title, :author_id, presence: true

    has_many :posts


    # Blog => Follow

    has_many :follows,
      class_name: :Follow,
      foreign_key: :followed_blog_id

    has_many :followers,
      through: :follows,
      source: :follower


  # User => Blog

  # has_many :blogs,
  #   class_name: :Blog,
  #   foreign_key: :author_id


    belongs_to :user,
      class_name: :User,
      foreign_key: :author_id
end