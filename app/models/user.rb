class User < ApplicationRecord
    validates :username, :password_digest, :session_token, :email, presence: true 
    validates :username, :session_token, :email, uniqueness: true
    validates :password, length: {minimum: 6, allow_nil: true}
    # validates :email, inclusion: {in: [:confirmEmail]}

    has_many :playlists

    has_many :followed_playlists
        
    has_many :playlist_follows, 
        through: :followed_playlists,
        source: :playlist

    after_initialize :ensure_session_token
    attr_reader :password, :confirmEmail
    ### has many relationships here ###

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        # user.confirmEmail = user.email
        return nil unless user 
        return user if user.is_password?(password)
    end
    #validate :function name, return string??

    def confirmEmail=(email) 
        @confirmEmail = email
    end 

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end 

    def is_password?(password)
        BCrypt::Password.new(password_digest).is_password?(password)      
    end

    def reset_session_token!
        self.session_token = nil 
        ensure_session_token
        self.save! 
        self.session_token
    end 

    def ensure_session_token
        self.session_token ||= generate_session_token
    end 

    def generate_session_token
        SecureRandom.urlsafe_base64(16)
    end 

    




end
