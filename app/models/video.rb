class Video < ApplicationRecord
    validates :title, :views, presence: true
    validates :title, length: { maximum: 70}
    validates :description, length: { maximum: 5000, allow_nil: true}

    belongs_to :user

    has_many :comments
    has_many :likes

    has_one_attached :uploaded_video
    has_one_attached :thumbnail
end
