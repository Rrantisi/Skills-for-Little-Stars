from flask import Flask
from .config import Configuration
from .routes import main

app = Flask(__name__)
app.config.from_object(Configuration)
app.register_blueprint(main.bp)
