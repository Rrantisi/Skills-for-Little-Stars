from flask import Flask
from .config import Configuration
from flask_migrate import Migrate
from .routes import main, session
from flask_cors import CORS
from app.models import db

app = Flask(__name__)
CORS(app)

app.config.from_object(Configuration)
db.init_app(app)
Migrate(app, db)

app.register_blueprint(main.bp)
app.register_blueprint(session.bp)
