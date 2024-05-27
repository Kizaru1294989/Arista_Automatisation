from flask import Flask, request
from flask_cors import CORS
from Labs.bgp import bgp
from Labs.vxlan import vxlan
from Labs.evpn import evpn
from Labs.mlag import mlag
from reset import reset

app = Flask(__name__)
CORS(app)

@app.route('/python/post', methods=['POST'])
def receive_lab_type():
    try:
        data = request.get_json()
        print(f"Received data: {data}")
        
        lab_type = data.get('lab')
        print(f"Received lab type: {lab_type}")

        # Call the corresponding function and handle the response for mlag
        response = call_lab_function(lab_type)

        if response is not None:
            return {'message': f'{lab_type} lab started successfully', 'response': response}, 200
        else:
            return {'message': f'{lab_type} lab started successfully'}, 200

    except Exception as e:
        return {'error': str(e)}, 500

def call_lab_function(lab_type):
    if lab_type == 'bgp':
        bgp()
    elif lab_type == 'mlag':
        response = mlag()
        return response
    elif lab_type == 'vxlan':
        vxlan()
    elif lab_type == 'evpn':
        evpn()
    elif lab_type == 'reset':
        reset()
    else:
        print("Invalid lab type received")
    return None

if __name__ == '__main__':
    app.run(debug=True)
