from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from enum import Enum

db = SQLAlchemy()
bcrypt = Bcrypt()

class RoleEnum(Enum):
    USER = 'user'
    ADMIN = 'admin'

class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    role = db.Column(db.String(20), nullable=False, default='user')
    progress = db.relationship('Progress', backref='user', lazy=True)

    # Get password
    @property
    def password(self):
        return self.hashed_password

    # Set password
    @password.setter
    def password(self, password):
        self.hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')

    # Check password
    def check_password(self, password):
        return bcrypt.check_password_hash(self.hashed_password, password)

class Progress(db.Model):
    __tablename__ = 'progress'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    subject_id = db.Column(db.Integer, db.ForeignKey('subjects.id'), nullable=False)
    score = db.Column(db.Integer)
    completed = db.Column(db.Boolean, default=False)
    user = db.relationship('User', backref='progress')
    subject = db.relationship('Subject', backref='progress')

class Subject(db.Model):
    __tablename__ = 'subjects'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(255))
