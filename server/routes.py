from flask import Blueprint, jsonify
from models import Navigation

api_bp = Blueprint('api', __name__)


@api_bp.route('https://shnyrki-552c68a5b166.herokuapp.com/api/getNav', methods=['GET'])
def get_navigation():
    try:
        navigations = Navigation.query.all()
        return jsonify([navigation.to_dict() for navigation in navigations])
    except Exception as e:
        return jsonify({"error": str(e)}), 500
