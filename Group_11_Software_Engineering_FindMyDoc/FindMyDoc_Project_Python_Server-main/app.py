from flask import Flask, jsonify, send_from_directory
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)  # Simplified CORS configuration

@app.route('/popup-content')
def popup_content():
    """Endpoint to return JSON content for a popup user guide."""
    return jsonify({
        "title": "User Guide",
        "content": {
            "header": "Welcome to FindMyDoc!",
            "sections": [
                {
                    "title": "Search for a Doctor",
                    "text": "Enter a doctor's name or specialty in the search bar. Use filters to refine results by location and specialty."
                },
                {
                    "title": "Find Nearby Doctors",
                    "text": "Type in your city to look for doctors near you."
                },
                {
                    "title": "Read & Leave Reviews",
                    "text": "View reviews on doctor profiles. Log in to leave your own."
                }
            ]
        }
    })

@app.route('/')
def serve_index():
    """Serve the main index.html file from the static directory."""
    return send_from_directory('static', 'index.html')

@app.route('/<path:path>')
def static_files(path):
    """Serve static files from the static directory based on the requested path."""
    return send_from_directory('static', path)

if __name__ == '__main__':
    """Run the Flask app on the specified port, defaulting to 5000."""
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
