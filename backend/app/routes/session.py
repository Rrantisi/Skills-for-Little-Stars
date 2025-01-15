from flask import Blueprint, request, jsonify
from app.models import User, db
import os
import jwt
from datetime import datetime, timedelta

bp = Blueprint("session", __name__, url_prefix="/api/session")

@bp.route("/", methods=["GET", "POST"])
def login():
    data = request.get_json()
    username = data.get("username")
    password = data.get("password")

    # Check if both username and password are provided
    if not username or not password:
        return jsonify({"message": "Username and password are required"}), 400

    # Query the user from the database
    user = User.query.filter_by(username=username).first()

    # Check if user exists and if the password matches
    if not user or not user.check_password(password):
        return jsonify({"message": "Invalid username or password"}), 401

    # Create a token with user information
    token = jwt.encode(
        {
            "user": {
                "id": user.id,
                "username": user.username,
                "role": user.role,
            },
            "exp": datetime.utcnow() + timedelta(hours=1),  # Token expiration
        },
        os.environ.get('SECRET_KEY'),
        algorithm="HS256",
    )

    # Return a response with user details
    return jsonify({
        "message": "Login successful",
        "user": {
            "id": user.id,
            "username": user.username,
            "role": user.role
        },
        "token": token
    }), 200

@bp.route("/signup", methods=["GET", "POST"])
def signup():
    """
    Handle user signup.
    """
    data = request.get_json()
    username = data.get("username")
    password = data.get("password")

    # Check if username is already taken
    existing_user = User.query.filter_by(username=username).first()

    if existing_user:
        return jsonify({"message": "Username already exists"}), 400

    new_user = User(username=username, password=password)

    # Add the user to the database
    db.session.add(new_user)
    db.session.commit()

    # Return a success response
    return jsonify({
        "message": "User registered successfully",
        "user": {
            "id": new_user.id,
            "username": new_user.username
        }
    }), 201
