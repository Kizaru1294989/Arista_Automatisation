from flask import Flask, request
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

@app.route('/python/post', methods=['POST'])
def receive_integer():
    try:
        data = request.get_json()
        int_value = data.get('intValue')
        print(f"Received integer: {int_value}")
        return {'message': 'Integer received successfully'}, 200
    except Exception as e:
        return {'error': str(e)}, 500

if __name__ == '__main__':
    app.run(debug=True)


def start_mlag():
    import run