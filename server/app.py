import os
from dotenv import load_dotenv

from flask import Flask, render_template
from config import DB
from models import db
from routes import api_bp

load_dotenv()

app = Flask(__name__)
app.config.from_object(DB)

db.init_app(app)
app.register_blueprint(api_bp)

app.static_folder = '../client/build/static'
app.template_folder = '../client/build'


@app.route('/')
def index():
    return render_template('index.html')


if __name__ == '__main__':
    app.run()
