class User < ApplicationRecord
  validates :username, presence: true, uniqueness: true
  validates :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6 }, allow_nil: true
  
  attr_reader :password

  before_validation :set_user_color
  after_initialize :ensure_session_token

  has_many :videos

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save
    self.session_token
  end

  def set_user_color
      colors = ['#AA47BC', '#78909C', '#EC407A', '#5C6BC0', '#0288D1', '#00579C', '#0098A6', '#00887A', '#004C3F', '#689F39', '#33691E', '#8C6E63', '#5D4038', '#EF6C00', '#F5511E', '#BF360C']

      self.color = colors.sample if !attribute_present?("color")
  end
end
