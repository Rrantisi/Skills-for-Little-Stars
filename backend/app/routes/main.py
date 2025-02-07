from flask import Blueprint, jsonify
from app.models import Subject, Progress
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

@bp.route('/api/progress/<int:user_id>', methods=['GET'])
def get_progress(user_id):
    progress = Progress.query.options(
        joinedload(Progress.level),
        joinedload(Progress.subject)
    ).filter_by(user_id = user_id).all()

    if not progress:
        return jsonify({"error": "User progress not found"}), 404

    return jsonify([
            {
                "progress_id": p.id,
                "score": p.score,
                "completed": p.completed,
                "level": {"id": p.level.id, "name": p.level.name},
                "subject": {"id": p.subject.id, "name": p.subject.name}
            }
            for p in progress
        ])
