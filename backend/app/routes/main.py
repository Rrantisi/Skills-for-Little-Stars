from flask import Blueprint, jsonify
from app.models import Subject
from sqlalchemy.orm import joinedload

bp = Blueprint("main", __name__, url_prefix="/")

@bp.route("/")
def home():
    return jsonify({"message": "This is the data from the backend!"})

@bp.route('/api/subjects', methods=["GET"])
def get_subjects():
    subjects = Subject.query.all()

    return jsonify([
        {
            "id": subject.id,
            "name": subject.name,
            "description": subject.description
        }
        for subject in subjects
    ])

@bp.route('/api/subjects/<int:subject_id>', methods=['GET'])
def get_subject(subject_id):
    subject = Subject.query.options(
        joinedload(Subject.levels),
        joinedload(Subject.content)
    ).filter_by(id = subject_id).first()

    if not subject:
        return jsonify({"error": "Subject not found"}), 404

    return jsonify([
        {
            "id": subject.id,
            "name": subject.name,
            "description": subject.description,
            "levels": [{"id": level.id, "name": level.name} for level in subject.levels],
            "content": [{"id": content.id, "content": content.content} for content in subject.content]
        }
    ])
