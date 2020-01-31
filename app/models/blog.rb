class Blog < ApplicationRecord

    validates :title, :author_id, presence: true

    has_many :comments
    belongs_to :user

end