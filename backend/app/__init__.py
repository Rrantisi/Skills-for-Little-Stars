from flask import Flask
from .config import Configuration
from .routes import main
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

app.config.from_object(Configuration)
app.register_blueprint(main.bp)
