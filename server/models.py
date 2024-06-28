from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class Navigation(db.Model):
    __tablename__ = 'navigation'

    id = db.Column(db.Integer, primary_key=True)
    ua = db.Column(db.String(100), nullable=False)
    pl = db.Column(db.String(200), nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'ua': self.ua,
            'pl': self.pl
        }
