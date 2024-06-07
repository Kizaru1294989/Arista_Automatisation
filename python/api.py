from flask import Flask, request, jsonify
from flask_cors import CORS
from Labs.bgp import bgp
from Labs.vxlan import vxlan
from Labs.evpn import evpn
from Labs.mlag import mlag
from reset import reset
from database import *
from MLAG.mlag_file import mlag_file , mlag_file_manual
from BGP.bgp_file import bgp_file , bgp_file_manual
from VXLAN.vxlan_file import vxlan_file , vxlan_file_manual
from gevent.pywsgi import WSGIServer

app = Flask(__name__)
CORS(app)

@app.route('/python/post', methods=['POST'])
def receive_lab_type():
    try:
       
        data = request.get_json()
        return_to_zero_device_record()
        print(f"Received data: {data}")
        
        lab_type = data.get('lab')
        print(f"Received lab type: {lab_type}")
        
        data = {
            'statut': 'started',  
            'lab': lab_type,     
            'id': 1                
        }
        update_record(data)
        response = call_lab_function(lab_type)
        print(response)
        
        if response == True:
            data = {
                    'statut': 'finished',  
                    'lab': lab_type,     
                    'id': 1                
                }
            update_record(data)
            print("LAB SUCCESS")
            return {'message': f'{lab_type} lab started successfully', 'response': response}, 200
        elif response == False:
            data = {
                    'statut': 'failed',  
                    'lab': lab_type,     
                    'id': 1                
                }
            
            update_record(data)
            print("LAB FAILED")
            return {'message': f'{lab_type} lab Failed ', 'response': response}, 200

    except Exception as e:
        return {'error': str(e)}, 500 

@app.route('/python/get', methods=['get'])
def send_lab_status():
    try:    
            statut , labs = read_records()
            device_statut = read_device_records()
            host1 = device_statut[0]['host1']
            host2 = device_statut[0]['host2']
            host3 = device_statut[0]['host3']
            host4 = device_statut[0]['host4']
            leaf1 = device_statut[0]['leaf1']
            leaf2 = device_statut[0]['leaf2']
            leaf3 = device_statut[0]['leaf3']
            leaf4 = device_statut[0]['leaf4']
            leaf5 = device_statut[0]['leaf5']
            leaf6 = device_statut[0]['leaf6']
            leaf7 = device_statut[0]['leaf7']
            leaf8 = device_statut[0]['leaf8']
            spine1 = device_statut[0]['spine1']
            spine2 = device_statut[0]['spine2']
            spine3 = device_statut[0]['spine3']
            spine4 = device_statut[0]['spine4']
            # print("host1:", host1)
            # print("host2:", host2)
            # print("host3:", host3)
            # print("host4:", host4)
            # print("leaf1:", leaf1)
            # print("leaf2:", leaf2)
            # print("leaf3:", leaf3)
            # print("leaf4:", leaf4)
            # print("leaf5:", leaf5)
            # print("leaf6:", leaf6)
            # print("leaf7:", leaf7)
            # print("leaf8:", leaf8)
            # print("spine1:", spine1)
            # print("spine2:", spine2)
            # print("spine3:", spine3)
            # print("spine4:", spine4)
            print({str(labs) + " : " + str(statut)})
            return {
                    'statut': statut,
                    'labs': labs,
                    
                    'host1' : host1,
                    'host2' : host2,
                    'host3' : host3,
                    'host4' : host4,
                    
                    'spine1' : spine1,
                    'spine2' : spine2,
                    'spine3' : spine3,
                    'spine4' : spine4,
                    
                    'leaf1' : leaf1,
                    'leaf2' : leaf2,
                    'leaf3' : leaf3,
                    'leaf4' : leaf4,
                    'leaf5' : leaf5,
                    'leaf6' : leaf6,
                    'leaf7' : leaf7,
                    'leaf8' : leaf8,
                    }, 200
    except Exception as e:
        return {'error': str(e)}, 500

def call_lab_function(lab_type):
    if lab_type == 'bgp':
        response = bgp_file()
        return response
    elif lab_type == 'mlag':
        response = mlag_file()
        return response
    elif lab_type == 'vxlan evpn':
        response = vxlan_file()
        return response
    elif lab_type == 'reset':
        response = reset()
        return response
    
    if lab_type == 'manuel bgp':
        response = bgp_file_manual()
        return response
    elif lab_type == 'manuel mlag':
        response = mlag_file_manual()
        return response
    elif lab_type == 'manuel vxlan evpn':
        response = vxlan_file_manual()
        return response
    else:
        print("Invalid lab type received")
    return None

if __name__ == '__main__':
    
    app.run(debug=True)
