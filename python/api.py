from flask import Flask, request, jsonify
from flask_cors import CORS
from Labs.bgp import bgp
from Labs.vxlan import vxlan
from Labs.evpn import evpn
from Labs.mlag import mlag
from reset import reset
import json
import os
import stat

app = Flask(__name__)
CORS(app)

STATUS_FILE = '/home/rais/Arista_Automatisation/python/lab_status.json'

def initialize_status_file():
    if not os.path.exists(STATUS_FILE):
        with open(STATUS_FILE, 'w') as f:
            json.dump({}, f)
        os.chmod(STATUS_FILE, stat.S_IRWXU | stat.S_IRWXG | stat.S_IRWXO)

def read_lab_status():
    if not os.path.exists(STATUS_FILE):
        initialize_status_file()
    with open(STATUS_FILE, 'r') as f:
        return json.load(f)

def write_lab_status(lab_status):
    with open(STATUS_FILE, 'w') as f:
        json.dump(lab_status, f, indent=4)
    os.chmod(STATUS_FILE, stat.S_IRWXU | stat.S_IRWXG | stat.S_IRWXO)

def update_lab_status(lab_type, status):
    lab_status = read_lab_status()
    lab_status[lab_type] = status
    write_lab_status(lab_status)

@app.route('/python/post', methods=['POST'])
def receive_lab_type():
    try:
        data = request.get_json()
        print(f"Received data: {data}")
        
        lab_type = data.get('lab')
        print(f"Received lab type: {lab_type}")
        
        update_lab_status(lab_type, 'started')
        response = call_lab_function(lab_type)
        
        if response is not None:
            update_lab_status(lab_type, 'finished')
            return {'message': f'{lab_type} lab started successfully', 'response': response}, 200
        else:
            update_lab_status(lab_type, 'finished')
            return {'message': f'{lab_type} lab started successfully'}, 200

    except Exception as e:
        update_lab_status(lab_type, 'error')
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
        response = reset()
        return response
    else:
        print("Invalid lab type received")
        update_lab_status(lab_type, 'invalid')
    return None

def delete_status_file():
    if os.path.exists(STATUS_FILE):
        os.remove(STATUS_FILE)

if __name__ == '__main__':
    initialize_status_file()
    app.run(debug=True)
