from flask import Flask
from config import DB
from models import db
from routes import api_bp

app = Flask(__name__)
app.config.from_object(DB)

db.init_app(app)

app.register_blueprint(api_bp)

if __name__ == '__main__':
    app.run()
