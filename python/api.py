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
from database import *

app = Flask(__name__)
CORS(app)



@app.route('/python/post', methods=['POST'])
def receive_lab_type():
    try:
        data = request.get_json()
        print(f"Received data: {data}")
        
        lab_type = data.get('lab')
        print(f"Received lab type: {lab_type}")
        
        # update_lab_status(lab_type, 'started')
        data = {
            'statut': 'started',  
            'lab': lab_type,     
            'id': 1                
        }
        update_record(data)
        response = call_lab_function(lab_type)
        print(response)
        
        if response == True:
            # update_lab_status(lab_type, 'finished')
            data = {
                    'statut': 'finished',  
                    'lab': lab_type,     
                    'id': 1                
                }
            update_record(data)
            print("LAB SUCCESS")
            return {'message': f'{lab_type} lab started successfully', 'response': response}, 200
        elif response == False:
            
            # update_lab_status(lab_type, 'finished')
            data = {
                    'statut': 'failed',  
                    'lab': lab_type,     
                    'id': 1                
                }
            update_record(data)
            print("LAB FAILED")
            return {'message': f'{lab_type} lab Failed ', 'response': response}, 200

    except Exception as e:
        # update_lab_status(lab_type, 'error')
        return {'error': str(e)}, 500 

@app.route('/python/get', methods=['get'])
def send_lab_status():
    try:    
            statut , labs = read_records()
            print(statut)
            print(labs)
            return {'statut': statut, 'labs': labs}, 200
    except Exception as e:
        return {'error': str(e)}, 500
    
    
# @app.route('/python/device', methods=['get'])
# def get_data():
#     data = {
#         "message": "Bonjour depuis le serveur!"
#     }
#     return jsonify(data)

def call_lab_function(lab_type):
    if lab_type == 'bgp':
        bgp()
    elif lab_type == 'mlag':
        #     data = {
#         "message": "Bonjour depuis le serveur!"
#     }
#     return jsonify(data)
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
        # update_lab_status(lab_type, 'invalid')
    return None

if __name__ == '__main__':
    # initialize_status_file()
    app.run(debug=True)
