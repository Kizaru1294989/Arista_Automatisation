from flask import Flask, request
from flask_cors import CORS
from Labs.bgp import *
from Labs.vxlan import *
from Labs.evpn import *
from Labs.mlag import *



app = Flask(__name__)
CORS(app)

@app.route('/python/post', methods=['POST'])
def receive_integer():
    try:
        data = request.get_json()
        int_value = data.get('intValue')
        print(f"Received integer: {int_value}")
        main()
        return {'message': 'Integer received successfully'}, 200
        
    except Exception as e:
        return {'error': str(e)}, 500





def main():
    print("MAIN")
    mlag()
    bgp()
    vxlan()
    evpn()
    # reponse = mlag()
    # if reponse :
    #     choice = input("Transofrm the Lab to BGP lab ? Y/N")
    #     if choice == "Y":
    #         bgp()
    #     elif choice == "N":
    #         exit(0)
        
    # else:
    #     exit(0)


if __name__ == '__main__':
    app.run(debug=True)


