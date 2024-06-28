from flask import Blueprint, jsonify
from models import Navigation

api_bp = Blueprint('api', __name__)


@api_bp.route('/api/getNav', methods=['GET'])
def get_navigation():
    try:
        print("Trying to fetch navigation items...")
        navigations = Navigation.query.all()
        print("Successfully fetched navigations:", navigations)
        return jsonify([navigation.to_dict() for navigation in navigations])
    except Exception as e:
        return jsonify({"error": str(e)}), 500
