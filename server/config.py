import os
from dotenv import load_dotenv

load_dotenv()


class DB:
    SQLALCHEMY_DATABASE_URI = os.getenv('DB')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
