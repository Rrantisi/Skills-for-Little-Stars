from flask_wtf import FlaskForm
from wtforms import (StringField, PasswordField, SubmitField)
from wtforms.validators import DataRequired, EqualTo

class LoginForm(FlaskForm):
    username = StringField("Username", validators=[DataRequired(message="Please enter your Username.")])
    password = PasswordField("Password", validators=[DataRequired(message="Please enter your Password.")])
    submit = SubmitField("Login")

class SignupForm(FlaskForm):
    username = StringField("Username", validators=[DataRequired(message="Please enter your Username.")])
    password = PasswordField("Password", validators=[DataRequired(message="Please enter your Password.")])
    confirm_password = PasswordField("Confirm Password", validators=[DataRequired(message="Please enter your Password."),
                                                        EqualTo('password', message="Passwords must match.")])
    submit = SubmitField("Signup")
