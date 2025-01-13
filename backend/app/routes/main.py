from flask import Blueprint, jsonify

bp = Blueprint("main", __name__, url_prefix="/api")

@bp.route("/")
def home():
    return jsonify({"message": "This is the data from the backend!"})
