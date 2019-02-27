class User < ApplicationRecord
    validates :username, :password_digest, :session_token, :email, presence: true 
    validates :username, :session_token, :email, uniqueness: false
    validates :password, length: {minimum: 6, allow_nil: true}
    after_initialize :ensure_session_token

    ### has many relationships here ###

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        return nil unless user 
        return user if user.isPassword?(password)
    end

    def password=(password)
        self.password = password
        self.password_digest = BCrypt::Password.create(password)
    end 

    def isPassword?(password)
        BCrypt::Password.new(password_digest).isPassword?(password)      
    end

    def reset_session_token
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
